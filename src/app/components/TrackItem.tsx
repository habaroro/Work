import { motion } from "motion/react";
import { Play, Pause, Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
  audio: string;
  duration: string;
}

interface TrackItemProps {
  track: Track;
  isPlaying: boolean;
  isSelected: boolean;
  onPlay: () => void;
  onSelect: () => void;
}

export function TrackItem({ track, isPlaying, isSelected, onPlay, onSelect }: TrackItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onClick={onSelect}
      className={cn(
        "group relative flex items-center gap-4 rounded-[24px] p-3 transition-all duration-300 cursor-pointer",
        isSelected 
          ? "bg-[#030213]/5 shadow-[0px_0px_0px_0px_rgba(3,2,19,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" 
          : "bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:bg-white/60"
      )}
    >
      {/* Cover Image */}
      <div className="relative shrink-0">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#f3f4f6] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-1">
          <img 
            src={track.cover} 
            alt={track.title} 
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          
          {/* Play/Pause Overlay Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-200 focus:outline-none active:scale-95",
              isPlaying 
                ? "opacity-100 bg-black/10" 
                : "opacity-0 group-hover:opacity-100 focus:opacity-100 bg-black/10"
            )}
          >
            {isPlaying ? (
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#030213] text-white shadow-lg animate-pulse">
                <Pause className="h-4 w-4 fill-current" />
              </div>
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm text-[#030213]">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-center h-full space-y-0.5">
        <h3 className="truncate text-[16px] font-semibold leading-5 tracking-[-0.3px] text-[#0a0a0a]">
          {track.title}
        </h3>
        <p className="truncate text-[14px] font-normal leading-5 tracking-[-0.15px] text-[#717182]">
          {track.artist}
        </p>
      </div>

      {/* Selection Indicator (iOS Style Checkmark) */}
      <div className="shrink-0 pr-1">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300",
            isSelected
              ? "border-[#030213] bg-[#030213] text-white shadow-md"
              : "border-[rgba(113,113,130,0.3)] bg-transparent text-transparent"
          )}
        >
          <Check className="h-4 w-4 stroke-[3]" />
        </div>
      </div>
    </motion.div>
  );
}
