'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Analytics from '@/components/Analytics';

interface AnalyticsLoaderProps {
  googleAnalyticsId?: string;
  yandexMetrikaId?: string;
}

const FALLBACK_DELAY_MS = 8000;

export default function AnalyticsLoader({
  googleAnalyticsId,
  yandexMetrikaId,
}: AnalyticsLoaderProps) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const initialPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (initialPathRef.current === null) {
      initialPathRef.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    if (enabled) {
      return;
    }

    const maybeEnable = () => setEnabled(true);

    if (
      initialPathRef.current !== null &&
      pathname !== null &&
      pathname !== initialPathRef.current
    ) {
      maybeEnable();
      return;
    }

    const timeoutId = window.setTimeout(maybeEnable, FALLBACK_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  }, [enabled, pathname]);

  if (!enabled) {
    return null;
  }

  return (
    <Analytics
      googleAnalyticsId={googleAnalyticsId}
      yandexMetrikaId={yandexMetrikaId}
    />
  );
}

