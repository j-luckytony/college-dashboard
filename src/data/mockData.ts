import type { DashboardData } from '@/types/dashboard';

/**
 * Mock data for the college dashboard
 * Based on the values shown in the UI mockup
 */
export const mockDashboardData: DashboardData = {
  studentName: 'Angela',

  overallProgress: {
    completeness: 80,
    academics: {
      gpa: 3.7,
      advancedPlacements: 2,
      sat: 1510,
      act: null, // Shown as "N/A" in the UI
    },
    activities: {
      current: 7,
      total: 10,
    },
    honors: {
      current: 3,
      total: 5,
    },
  },

  admissionsStrength: [
    { category: 'GPA', value: 95, max: 100 },
    { category: 'Honors', value: 75, max: 100 },
    { category: 'Activities', value: 60, max: 100 },
    { category: 'Essays', value: 90, max: 100 },
    { category: 'Curricular Rigor', value: 40, max: 100 },
    { category: 'SAT/ACT', value: 100, max: 100 },
  ],

  colleges: [
    {
      id: 'stanford',
      name: 'Stanford University',
      location: 'Palo Alto, CA',
      type: 'reach',
      recommendedBy: 'student',
      logoUrl: '/logos/stanford.svg',
    },
    {
      id: 'uc-berkeley',
      name: 'University of California, Berkeley',
      location: 'San Francisco, CA',
      type: 'target',
      recommendedBy: 'counselor',
      logoUrl: '/logos/uc-berkeley.svg',
    },
    {
      id: 'columbia',
      name: 'Columbia University',
      location: 'New York, NY',
      type: 'target',
      recommendedBy: 'counselor',
      logoUrl: '/logos/columbia.svg',
    },
  ],

  sessionRecap: {
    counselorName: 'Eddie',
    date: 'Nov 10th, 2024',
    topic: 'Essay Brainstorm',
    keyPoints: [
      'You talked about volunteering at the animal shelter.',
      'Eddie suggested linking it to leadership and personal growth.',
      'You liked the topic "What Caring for Animals Taught Me About People."',
    ],
    nextAction:
      'Start your first draft! Ask Eddie to help revise or expand it tomorrow',
  },

  upcomingDeadlines: [
    {
      id: 'stanford-1',
      college: 'Stanford Essay',
      type: 'Essay',
      daysLeft: 3,
      isUrgent: true,
    },
    {
      id: 'stanford-2',
      college: 'Stanford Essay',
      type: 'Essay',
      daysLeft: 3,
      isUrgent: true,
    },
    {
      id: 'stanford-3',
      college: 'Stanford Essay',
      type: 'Essay',
      daysLeft: 3,
      isUrgent: true,
    },
    {
      id: 'stanford-4',
      college: 'Stanford Essay',
      type: 'Essay',
      daysLeft: 3,
      isUrgent: true,
    },
    {
      id: 'stanford-5',
      college: 'Stanford Essay',
      type: 'Essay',
      daysLeft: 3,
      isUrgent: true,
    },
    {
      id: 'stanford-6',
      college: 'Stanford Essay',
      type: 'Essay',
      daysLeft: 3,
      isUrgent: true,
    },
  ],
};
