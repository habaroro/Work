import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { Lock, Unlock, BarChart3, X, RefreshCcw } from 'lucide-react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerClose,
  DrawerTrigger
} from './ui/drawer';
import { Button } from './ui/Button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

// Template for display
const VOTE_TEMPLATE = [
  { id: '1', name: 'No.1', color: '#FF6B6B' },
  { id: '2', name: 'No.2', color: '#4ECDC4' },
  { id: '3', name: 'No.3', color: '#45B7D1' },
  { id: '4', name: 'No.4', color: '#96CEB4' },
  { id: '5', name: 'No.5', color: '#FFEEAD' },
];

export function AdminView() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [votes, setVotes] = useState<any[]>([]);
  const [totalVotes, setTotalVotes] = useState(0);

  const fetchVotes = async (pwd: string) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-9dd730a0/votes?password=${encodeURIComponent(pwd)}`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) throw new Error("비밀번호가 올바르지 않습니다.");
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }

      const data = await response.json();
      
      // Transform data
      let total = 0;
      const chartData = VOTE_TEMPLATE.map(t => {
        const count = data[t.id] || 0;
        total += count;
        return {
          ...t,
          votes: count
        };
      });

      setVotes(chartData);
      setTotalVotes(total);
      return true;
    } catch (e: any) {
      toast.error(e.message || "오류가 발생했습니다.");
      return false;
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await fetchVotes(password);
    if (success) {
      setIsAuthenticated(true);
      toast.success("관리자 모드로 전환되었습니다.");
    }
    
    setIsLoading(false);
  };

  const handleRefresh = async () => {
    await fetchVotes(password);
    toast.success("투표 현황이 업데이트되었습니다.");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setIsOpen(false);
    toast.info("관리자 모드가 종료되었습니다.");
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
          <Lock className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          {!isAuthenticated ? (
            // Login View
            <div className="p-6 pb-8">
              <DrawerHeader>
                <DrawerTitle className="text-center text-xl mb-2">관리자 로그인</DrawerTitle>
                <DrawerDescription className="text-center">
                  투표 결과를 확인하려면 관리자 비밀번호를 입력하세요.
                </DrawerDescription>
              </DrawerHeader>
              
              <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="비밀번호 입력" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-lg h-12"
                    autoFocus
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base" 
                  disabled={isLoading || !password}
                >
                  {isLoading ? "확인 중..." : "로그인"}
                </Button>
              </form>
            </div>
          ) : (
            // Results View
            <div className="p-6 pb-8">
              <DrawerHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <DrawerTitle className="text-xl font-bold">실시간 투표 현황</DrawerTitle>
                  <DrawerDescription>
                    총 투표 수: {totalVotes}표
                  </DrawerDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={handleRefresh}>
                     <RefreshCcw className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleLogout}>
                     <X className="h-5 w-5" />
                  </Button>
                </div>
              </DrawerHeader>

              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={votes} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fill: '#888888', fontSize: 14 }}
                      width={40}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="votes" radius={[0, 4, 4, 0]} barSize={32}>
                      {votes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                 {votes.map((track, idx) => (
                   <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: track.color }} />
                        <span className="font-medium text-sm">{track.name}</span>
                      </div>
                      <span className="font-bold">{track.votes}표</span>
                   </div>
                 ))}
              </div>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
