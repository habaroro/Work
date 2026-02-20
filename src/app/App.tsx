import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Music, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { TrackItem } from './components/TrackItem';
import { Button } from './components/ui/Button';
import { cn } from '../lib/utils';
import { toast, Toaster } from 'sonner';

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from './components/ui/drawer';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

import imgImage1 from "figma:asset/f228563ccb35d67e292f2f51ac565a95625dbd08.png";
import imgImage2 from "figma:asset/d6b8f0c107beec31d7b38ccf4d2ff22c032ca274.png";
import imgImage3 from "figma:asset/71f3945ce5afe5962d1e0b2a71e03034747ed047.png";
import imgImage4 from "figma:asset/2897bb468ae95606199d27545adf92fcf2a52a41.png";
import imgImage5 from "figma:asset/b9ae1985fdde75a9c854873abd3c3c8ebd9e949a.png";

// Sample Data
// Note: Using external URLs for demo purposes. Replace with local paths (e.g., '/music/1.mp3') when files are available in public/music/
const TRACKS = [
  {
    id: '1',
    title: 'No.1',
    artist: '밝고 경쾌한 동요 Pop 스타일',
    cover: imgImage1,
    audio: '../public/music/1.mp3',
    duration: '3:00',
    lyrics: "퍼펙트! 퍼펙트! 퍼펙트문해! \n공부가 쉬워지는 초등 문해력 키우기\n긴 글은 술~술, 서술형 문제는 척!척!\n퍼펙트문해! 퍼펙트문해! \n문해력이 쑥쑥쑥! \n공부가 쉬워지는 초등 문해력 키우기 \n퍼펙트문해와 함께해요! 예~!"
  },
  {
    id: '2',
    title: 'No.2',
    artist: '세련된 멜로디의 K-Pop 스타일',
    cover: imgImage2,
    audio: './public/music/2.mp3',
    duration: '3:00',
    lyrics: "퍼펙트문해~Let's go!\n\n책 읽기가 즐거워지고\n생각하는 힘이 커져가\n문해력은 나의 무기\n꿈을 향해 나아가\n\n퍼펙트문해! 매일 성장해\n나를 바꾸는 힘\n퍼펙트문해! 자신감 UP\n미래를 여는 열쇠\n\n퍼펙트문해 지금 시작해"
  },
  {
    id: '3',
    title: 'No.3',
    artist: '에너제틱한 Hook Song 스타일',
    cover: imgImage3,
    audio: './public/music/3.mp3',
    duration: '3:00',
    lyrics: "퍼펙트문해 시작해볼까\n\n긴 지문도 빠르게 이해하고\n핵심 내용 한눈에 파악해\n문해력 키우면\n성적은 자연스럽게 올라가\n\n퍼펙트문해~ 퍼펙트문해~\n스마트한 공부법\n퍼펙트문해~ 퍼펙트문해~\n나만의 학습 파트너\n지금 바로 퍼펙트문해!"
  },
  {
    id: '4',
    title: 'No.4',
    artist: '귀엽고 친근한 어린이 보컬과 화음',
    cover: imgImage4,
    audio: './public/music/4.mp3',
    duration: '3:00',
    lyrics: "공부가 쉬워지는 초등 문해력 키우기\n긴 글은 술~술, 서술형 문제는 척!척!\n공부가 쉬워지는 초등 문해력 키우기\n퍼펙트문해!\n퍼펙트문해~! 예~!"
  },
  {
    id: '5',
    title: 'No.5',
    artist: '청량하고 깨끗한 K-Pop 발라드',
    cover: imgImage5,
    audio: './public/music/5.mp3',
    duration: '3:00',
    lyrics: "어려운 글도 이젠 두렵지 않아\n\n문제 해결 나는 할 수 있어\n독해력이 달라지면\n모든 과목이 쉬워져\n\n퍼펙트문해! 퍼펙트문해!\n실력이 올라가\n퍼펙트문해! 퍼펙트문해!\n공부가 쉬워지는 시작\n초등읽기프로젝트 퍼펙트문해"
  }
];

import { AdminView } from './components/AdminView';

export default function App() {
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [lyricsTrackId, setLyricsTrackId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio();
    
    const handleEnded = () => setIsPlaying(false);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (currentTrackId && audioRef.current) {
      const track = TRACKS.find(t => t.id === currentTrackId);
      if (track) {
        // Only change source if it's different
        if (!audioRef.current.src.includes(track.audio)) {
          audioRef.current.src = track.audio;
          audioRef.current.load();
        }
        
        if (isPlaying) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Audio playback failed:", error);
              setIsPlaying(false);
            });
          }
        } else {
          audioRef.current.pause();
        }
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [currentTrackId, isPlaying]);

  const togglePlay = (id: string) => {
    setLyricsTrackId(id);
    setIsLyricsOpen(true);

    if (currentTrackId === id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrackId(id);
      setIsPlaying(true);
    }
  };

  const handleSelect = (id: string) => {
    if (hasVoted) return;
    
    setLyricsTrackId(id);
    setIsLyricsOpen(true);
    setSelectedTrackId(id);
  };

  const handleSubmitVote = async () => {
    if (!selectedTrackId) return;
    
    // Send vote to backend
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-9dd730a0/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ trackId: selectedTrackId })
      });

      if (!response.ok) throw new Error("Vote failed");

      setHasVoted(true);
      toast.success("투표가 완료되었습니다! 소중한 의견 감사합니다.", {
        description: "선택하신 곡이 집계되었습니다.",
        duration: 3000,
      });
    } catch (e) {
      console.error("Vote submission failed:", e);
      toast.error("투표 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-black font-sans text-foreground selection:bg-black/10">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-[rgba(229,231,235,0.5)] dark:border-white/10">
        <div className="mx-auto max-w-md px-6 py-4 flex items-center justify-between h-[80px]">
          <div>
            <h1 className="text-[24px] font-bold tracking-[-0.5px] text-[#0a0a0a] dark:text-white leading-8">퍼펙트문해 LOGO SONG</h1>
            <p className="text-[12px] font-medium tracking-[0.6px] uppercase text-[#717182] leading-4">마음에 드는 CM송에 투표해주세요.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#f3f4f6] dark:bg-white/10 flex items-center justify-center">
             <Music className="h-5 w-5 text-[#030213] dark:text-white" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-md px-4 py-6 pb-32 space-y-4">
        <AnimatePresence mode='popLayout'>
          {TRACKS.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TrackItem
                track={track}
                isPlaying={currentTrackId === track.id && isPlaying}
                isSelected={selectedTrackId === track.id}
                onPlay={() => togglePlay(track.id)}
                onSelect={() => handleSelect(track.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Footer with Admin Trigger */}
        <div className="pt-8 pb-12 text-center">
          <p className="text-[11px] text-[#717182] mb-4">
            © 2026 Perfect Literacy. All rights reserved.
          </p>
          <div className="flex justify-center opacity-30 hover:opacity-100 transition-opacity">
            <AdminView />
          </div>
        </div>
      </main>

      {/* Sticky Bottom Vote Bar */}
      <AnimatePresence>
        {selectedTrackId && !hasVoted && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-20 p-4 pb-8 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90"
          >
            <div className="mx-auto max-w-md">
              <Button 
                onClick={handleSubmitVote}
                className="w-full h-[56px] text-[18px] tracking-[-0.44px] bg-[#030213] hover:bg-[#030213]/90 text-white font-semibold rounded-[16px] flex items-center justify-between px-6 shadow-[0px_20px_25px_0px_rgba(3,2,19,0.2),0px_8px_10px_0px_rgba(3,2,19,0.2)]"
                size="lg"
              >
                <span className="w-full text-center relative">
                  투표하기
                  <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 opacity-80" />
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You / Results View (Mock) */}
      <AnimatePresence>
        {hasVoted && (
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="fixed bottom-8 left-0 right-0 z-30 px-4 pointer-events-none"
          >
            <div className="mx-auto max-w-md bg-black/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black p-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10 dark:border-black/5">
              <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Vote Recorded</h3>
                <p className="text-sm opacity-80">Thanks for participating!</p>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0 pointer-events-auto" onClick={() => {
                // Share functionality mock
                toast("Shared link copied to clipboard!");
              }}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Drawer open={isLyricsOpen} onOpenChange={setIsLyricsOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle className="text-center text-xl">{TRACKS.find(t => t.id === lyricsTrackId)?.title}</DrawerTitle>
              <DrawerDescription className="text-center">{TRACKS.find(t => t.id === lyricsTrackId)?.artist}</DrawerDescription>
            </DrawerHeader>
            <div className="p-6 pb-8 max-h-[60vh] overflow-y-auto">
              <p className="whitespace-pre-wrap text-center text-lg leading-loose opacity-90 font-medium text-foreground/90">
                {TRACKS.find(t => t.id === lyricsTrackId)?.lyrics || "가사 정보가 없습니다."}
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full h-12 text-base rounded-xl">닫기</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

    </div>
  );
}
