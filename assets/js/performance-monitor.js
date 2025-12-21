/**
 * PERFORMANCE MONITORING
 * 
 * Tracks Core Web Vitals and performance metrics
 * Reports to console (can be extended to send to analytics)
 */

(function() {
  'use strict';

  const metrics = {
    fcp: null,  // First Contentful Paint
    lcp: null,  // Largest Contentful Paint
    fid: null,  // First Input Delay
    cls: null,  // Cumulative Layout Shift
    ttfb: null  // Time to First Byte
  };

  /**
   * Report metric
   */
  function reportMetric(metric, value, rating) {
    metrics[metric] = { value, rating };
    
    console.log(`%c${metric.toUpperCase()}: ${value}ms - ${rating}`, 
      `color: ${rating === 'good' ? 'green' : rating === 'needs-improvement' ? 'orange' : 'red'}`
    );

    // Can be extended to send to Google Analytics:
    // gtag('event', metric, {
    //   value: value,
    //   metric_rating: rating
    // });
  }

  /**
   * Get rating for metric
   */
  function getRating(metric, value) {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Measure TTFB
   */
  function measureTTFB() {
    if (!window.performance || !performance.timing) return;

    const ttfb = performance.timing.responseStart - performance.timing.requestStart;
    const rating = getRating('ttfb', ttfb);
    reportMetric('ttfb', ttfb, rating);
  }

  /**
   * Measure FCP (First Contentful Paint)
   */
  function measureFCP() {
    if (!window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            const value = Math.round(entry.startTime);
            const rating = getRating('fcp', value);
            reportMetric('fcp', value, rating);
            observer.disconnect();
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.error('FCP measurement failed:', e);
    }
  }

  /**
   * Measure LCP (Largest Contentful Paint)
   */
  function measureLCP() {
    if (!window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const value = Math.round(lastEntry.renderTime || lastEntry.loadTime);
        const rating = getRating('lcp', value);
        reportMetric('lcp', value, rating);
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.error('LCP measurement failed:', e);
    }
  }

  /**
   * Measure FID (First Input Delay)
   */
  function measureFID() {
    if (!window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const value = Math.round(entry.processingStart - entry.startTime);
          const rating = getRating('fid', value);
          reportMetric('fid', value, rating);
          observer.disconnect();
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.error('FID measurement failed:', e);
    }
  }

  /**
   * Measure CLS (Cumulative Layout Shift)
   */
  function measureCLS() {
    if (!window.PerformanceObserver) return;

    let clsValue = 0;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      // Report final value when page is hidden
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          const rating = getRating('cls', clsValue);
          reportMetric('cls', clsValue.toFixed(3), rating);
          observer.disconnect();
        }
      });
    } catch (e) {
      console.error('CLS measurement failed:', e);
    }
  }

  /**
   * Measure page load time
   */
  function measurePageLoad() {
    window.addEventListener('load', () => {
      if (!window.performance || !performance.timing) return;

      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`%cPage Load Time: ${loadTime}ms`, 'color: blue; font-weight: bold');

      // Log all metrics summary
      setTimeout(() => {
        console.group('%c📊 Performance Summary', 'color: blue; font-weight: bold; font-size: 14px');
        console.table(metrics);
        console.groupEnd();
      }, 3000);
    });
  }

  /**
   * Log resource timing
   */
  function logResourceTiming() {
    if (!window.performance || !performance.getEntriesByType) return;

    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(r => r.duration > 500);

    if (slowResources.length > 0) {
      console.group('%c⚠️ Slow Resources (>500ms)', 'color: orange; font-weight: bold');
      slowResources.forEach(resource => {
        console.log(`${resource.name}: ${Math.round(resource.duration)}ms`);
      });
      console.groupEnd();
    }
  }

  /**
   * Initialize performance monitoring
   */
  function init() {
    // Skip in production (can be enabled with query param)
    const urlParams = new URLSearchParams(window.location.search);
    const debug = urlParams.get('debug') === 'performance';
    
    if (!debug && window.location.hostname !== 'localhost') {
      return;
    }

    console.log('%c🚀 Performance Monitoring Enabled', 'color: green; font-weight: bold; font-size: 14px');
    console.log('Add ?debug=performance to URL to enable on production');

    measureTTFB();
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measurePageLoad();
    
    // Log resource timing after page load
    window.addEventListener('load', () => {
      setTimeout(logResourceTiming, 1000);
    });
  }

  // Initialize
  init();

  // Export for manual access
  window.performanceMetrics = {
    get: () => metrics,
    report: () => {
      console.table(metrics);
    }
  };

})();
