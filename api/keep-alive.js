// api/keep-alive.js
export default async function handler(req, res) {
  try {
    // Supabase Edge Function이나 DB에 가벼운 요청(GET)을 보냅니다.
    // 기존에 사용하시던 `https://${ab}.supabase.co/...` 주소를 활용해도 좋습니다.
    const response = await fetch('https://biibtfdpchcdlpfimimh.supabase.co'); 
    
    if (response.ok) {
      res.status(200).json({ message: 'Supabase 깨우기 완료!' });
    } else {
      res.status(response.status).json({ message: '요청은 갔으나 응답 오류' });
    }
  } catch (error) {
    res.status(500).json({ error: '깨우기 실패' });
  }
}
