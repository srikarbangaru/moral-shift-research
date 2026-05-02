// Real research data - "When Models Change Their Minds: Moral Shift in AI Reasoning"

export const MODELS = ['ChatGPT', 'Claude', 'DeepSeek', 'Gemini'];

export const STRATEGIES = [
  'Persuasion',
  'Role Prompting',
  'Emotional Framing',
  'Ethical Reminder',
  'Self-Consistency',
];

// Strategy type: inducer or stabilizer
export const STRATEGY_TYPE = {
  'Persuasion':        'inducer',
  'Role Prompting':    'inducer',
  'Emotional Framing': 'inducer',
  'Ethical Reminder':  'stabilizer',
  'Self-Consistency':  'stabilizer',
};

// Drift rates per model per strategy (source: Moral Shift Rates.xlsx)
// Value = proportion of 15 questions where the answer changed
export const driftRates = {
  ChatGPT:  [0.2667, 0.0667, 0.0000, 0.0667, 0.0000],
  Claude:   [0.2667, 0.3333, 0.0667, 0.4667, 0.1333],
  DeepSeek: [1.0000, 0.0000, 0.5333, 0.0667, 0.0000],
  Gemini:   [0.5333, 0.5333, 0.6000, 0.5333, 0.6000],
};

export const overallDrift = {
  ChatGPT:  0.0800,
  Claude:   0.2533,
  DeepSeek: 0.3200,
  Gemini:   0.5600,
};

// Weighted moral score (source: resulting scores.xlsx) - ChatGPT only
export const weightedScores = [
  { label: 'Baseline',          value: 18.52, type: 'baseline' },
  { label: 'Emotional Framing', value: 17.92, type: 'inducer'   },
  { label: 'Self-Consistency',  value: 17.88, type: 'stabilizer'},
  { label: 'Persuasion',        value: 17.72, type: 'inducer'   },
  { label: 'Role Prompting',    value: 17.72, type: 'inducer'   },
  { label: 'Ethical Reminder',  value: 17.72, type: 'stabilizer'},
];

// Key stats
export const keyStats = [
  { value: '4',   label: 'AI Models Tested',               note: 'ChatGPT, Claude, DeepSeek, Gemini' },
  { value: '15',  label: 'Moral Questions Per Model',       note: 'Each answered 6 ways: once baseline, once per strategy' },
  { value: '0',   label: 'Strategies That Caused No Shift', note: 'Every strategy triggered at least some reversals in at least one model' },
  { value: '56%', label: 'Gemini Reversed on More Than Half', note: 'The most inconsistent model across all five strategies' },
];

// Model descriptions
export const modelInfo = {
  ChatGPT: {
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
    logo: '/logos/chatgpt.svg',
    logoType: 'icon',      // square icon - render at fixed w/h
    tagline: 'Most stable overall',
    summary: 'The most consistent model we tested. ChatGPT reversed no answers at all under Emotional Framing and Self-Consistency. It did reverse 4 out of 15 answers when told that experts disagreed, suggesting it responds to authority more than emotion.',
  },
  Claude: {
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    logo: '/logos/claude.svg',
    logoType: 'wordmark',  // wide horizontal text logo
    tagline: 'Surprising instability',
    summary: 'Claude reversed 7 of 15 answers when asked to take on a specific expert role, and 7 of 15 when given an ethical reminder - the strategy meant to keep it consistent. Only 1 of 15 reversed under Emotional Framing. Its inconsistency is hard to predict.',
  },
  DeepSeek: {
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
    logo: '/logos/deepseek.svg',
    logoType: 'wordmark',
    tagline: 'Extreme persuasion sensitivity',
    summary: 'When we told DeepSeek that experts disagreed with it, it reversed all 15 of its answers - a 100% reversal rate. Yet it held firm under Role Prompting and Self-Consistency with 0 reversals. Its stability appears highly dependent on what kind of pressure is applied.',
  },
  Gemini: {
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    logo: '/logos/gemini.svg',
    logoType: 'wordmark',
    tagline: 'Most susceptible model',
    summary: 'Gemini reversed between 8 and 9 of its 15 answers under every single strategy, including both stabilizers. It was the only model where Self-Consistency produced no improvement at all. No strategy we tried produced a stable result.',
  },
};
