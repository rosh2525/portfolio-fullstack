import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  ONLINE: 'online',
  OFFLINE: 'offline',
};

export default function SystemStatus() {
  const [status, setStatus] = useState(STATUS.LOADING);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      setStatus(STATUS.OFFLINE);
      return;
    }

    const check = async () => {
      try {
        const res = await fetch(`${apiUrl}/actuator/health`);
        if (!res.ok) throw new Error('Health check failed');
        const data = await res.json();
        if (data.status === 'UP') setStatus(STATUS.ONLINE);
        else setStatus(STATUS.OFFLINE);
      } catch {
        setStatus(STATUS.OFFLINE);
      }
    };

    check();
  }, []);

  let label;
  let dotClass;

  if (status === STATUS.LOADING) {
    label = 'Checking system status…';
    dotClass = 'bg-amber-400';
  } else if (status === STATUS.ONLINE) {
    label = 'System: Online (AWS us-east-1)';
    dotClass = 'bg-emerald-500';
  } else {
    label = 'System: Offline (showing static content)';
    dotClass = 'bg-red-500';
  }

  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      <span>{label}</span>
    </div>
  );
}
