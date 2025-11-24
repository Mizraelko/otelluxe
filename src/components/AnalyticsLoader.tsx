'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      return;
    }

    const enableAnalytics = () => {
      setEnabled(true);
      router.events?.off('routeChangeComplete', enableAnalytics);
    };

    router.events?.on('routeChangeComplete', enableAnalytics);
    const timeoutId = window.setTimeout(enableAnalytics, FALLBACK_DELAY_MS);

    return () => {
      router.events?.off('routeChangeComplete', enableAnalytics);
      window.clearTimeout(timeoutId);
    };
  }, [enabled, router.events]);

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

