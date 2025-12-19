import React, { useRef, useState, useEffect } from 'react';
import { Upload, Download, RotateCw, Trash2, Wand2, Zap } from 'lucide-react';

export default function ImageEditor() {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const ctx = canvasRef.current?.getContext('2d');

  // Draw image with filters
  const drawImage = (img, props = {}) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const b = props.brightness ?? brightness;
    const c = props.contrast ?? contrast;
    const s = props.saturation ?? saturation;
    const r = props.rotation ?? rotation;
    const fh = props.flipH ?? flipH;
    const fv = props.flipV ?? flipV;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((r * Math.PI) / 180);
    ctx.scale(fh ? -1 : 1, fv ? -1 : 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%)`;
    ctx.drawImage(img, 0, 0);
    ctx.restore();
  };

  // Redraw whenever filters change
  useEffect(() => {
    if (image) {
      drawImage(image);
    }
  }, [brightness, contrast, saturation, rotation, flipH, flipV, image]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        resetFilters();
      };
      img.src = ev.target?.result;
    };
    reader.readAsDataURL(file);
  };

  const resetFilters = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
  };

  const handleRemoveBackground = async () => {
    if (!image || !canvasRef.current) return;
    setIsRemoving(true);

    try {
      const canvas = canvasRef.current;
      const imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Simple background removal using color difference
      // This removes pixels similar to the corners (assumed background)
      const samplePixels = [
        [0, 0], [canvas.width - 1, 0],
        [0, canvas.height - 1], [canvas.width - 1, canvas.height - 1]
      ];

      let avgR = 0, avgG = 0, avgB = 0;
      samplePixels.forEach(([x, y]) => {
        const idx = (y * canvas.width + x) * 4;
        avgR += data[idx];
        avgG += data[idx + 1];
        avgB += data[idx + 2];
      });

      avgR = Math.round(avgR / 4);
      avgG = Math.round(avgG / 4);
      avgB = Math.round(avgB / 4);

      const threshold = 50;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const diff = Math.sqrt(
          (r - avgR) ** 2 + (g - avgG) ** 2 + (b - avgB) ** 2
        );

        if (diff < threshold) {
          data[i + 3] = 0; // Set alpha to transparent
        }
      }

      canvas.getContext('2d').putImageData(imageData, 0, 0);
    } catch (error) {
      console.error('Error removing background:', error);
    }

    setIsRemoving(false);
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.href = canvasRef.current.toDataURL('image/png');
    link.download = 'edited-image.png';
    link.click();
  };

  const clearImage = () => {
    setImage(null);
    resetFilters();
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Edit Your image</h1>
        <p className="text-slate-400 mb-8">Edit and enhance your images with advanced tools</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Canvas Area */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 flex items-center justify-center min-h-96">
              {image ? (
                <div className="w-full max-h-96 overflow-auto">
                  <canvas
                    ref={canvasRef}
                    className="max-w-full h-auto mx-auto rounded"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-400">Upload an image to get started</p>
                </div>
              )}
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-4">
            {/* Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              <Upload className="w-5 h-5" />
              Upload Image
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            {image && (
              <>
                {/* Background Removal */}
                <button
                  onClick={handleRemoveBackground}
                  disabled={isRemoving}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  <Wand2 className="w-5 h-5" />
                  {isRemoving ? 'Removing...' : 'Remove Background'}
                </button>

                {/* Brightness */}
                <div className="bg-slate-700 p-4 rounded-lg">
                  <label className="block text-white text-sm font-semibold mb-2">
                    Brightness: {brightness}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Contrast */}
                <div className="bg-slate-700 p-4 rounded-lg">
                  <label className="block text-white text-sm font-semibold mb-2">
                    Contrast: {contrast}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Saturation */}
                <div className="bg-slate-700 p-4 rounded-lg">
                  <label className="block text-white text-sm font-semibold mb-2">
                    Saturation: {saturation}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={saturation}
                    onChange={(e) => setSaturation(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Rotation */}
                <div className="bg-slate-700 p-4 rounded-lg">
                  <label className="block text-white text-sm font-semibold mb-2">
                    Rotation: {rotation}°
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Flip Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFlipH(!flipH)}
                    className={`py-2 rounded-lg font-semibold transition ${
                      flipH
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Flip H
                  </button>
                  <button
                    onClick={() => setFlipV(!flipV)}
                    className={`py-2 rounded-lg font-semibold transition ${
                      flipV
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    Flip V
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={resetFilters}
                    className="bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition"
                  >
                    <RotateCw className="w-4 h-4" />
                    Reset
                  </button>
                  <button
                    onClick={clearImage}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear
                  </button>
                </div>

                {/* Download Button */}
                <button
                  onClick={downloadImage}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}