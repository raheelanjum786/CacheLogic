export default function FeaturePoint({
  icon: Icon,
  title,
  showBottomBorder,
  showRightBorder,
}) {
  return (
    <div className="relative flex items-center gap-3 p-4">
      {/* Icon Container */}
      <div className="w-10 h-10 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#3B82F6]" />
      </div>

      {/* Title */}
      <p className="text-lg text-white">{title}</p>

      {/* Glowing Bottom Line */}
      {showBottomBorder && (
        <div className="absolute bottom-0 left-0 w-full h-[10px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent blur-sm"></div>
      )}

      {/* Glowing Right Line */}
      {showRightBorder && (
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#3B82F6] to-transparent blur-sm"></div>
      )}
    </div>
  );
}
