/**
 * Academic metrics for student progress
 */
export interface AcademicMetrics {
  /** Grade Point Average */
  gpa: number;
  /** Number of Advanced Placement courses */
  advancedPlacements: number;
  /** SAT score */
  sat: number;
  /** ACT score - can be null if not taken */
  act: number | null;
}

/**
 * Progress tracking for activities and honors
 */
export interface ProgressMetrics {
  /** Current count */
  current: number;
  /** Maximum/target count */
  total: number;
}

/**
 * Overall student progress data
 */
export interface OverallProgress {
  /** Completion percentage (0-100) */
  completeness: number;
  /** Academic metrics */
  academics: AcademicMetrics;
  /** Activities progress */
  activities: ProgressMetrics;
  /** Honors progress */
  honors: ProgressMetrics;
}

/**
 * Radar chart data point for admissions strength
 */
export interface RadarDataPoint {
  /** Category name */
  category: string;
  /** Score value */
  value: number;
  /** Maximum possible value */
  max: number;
}

/**
 * College application types
 */
export type CollegeType = 'reach' | 'target' | 'safety';

/**
 * Who recommended the college
 */
export type RecommendedBy = 'student' | 'counselor';

/**
 * Individual college in the curated list
 */
export interface College {
  /** College ID */
  id: string;
  /** College name */
  name: string;
  /** Location (city, state) */
  location: string;
  /** Application difficulty type */
  type: CollegeType;
  /** Who recommended this college */
  recommendedBy: RecommendedBy;
  /** College logo/icon URL */
  logoUrl?: string;
}

/**
 * Session recap information
 */
export interface SessionRecap {
  /** Counselor name */
  counselorName: string;
  /** Session date */
  date: string;
  /** Main topic discussed */
  topic: string;
  /** Key points from the session */
  keyPoints: string[];
  /** Next action item */
  nextAction: string;
}

/**
 * Upcoming deadline item
 */
export interface Deadline {
  /** Deadline ID */
  id: string;
  /** College name */
  college: string;
  /** Type of deadline */
  type: string;
  /** Days remaining */
  daysLeft: number;
  /** Is it urgent (less than 7 days) */
  isUrgent: boolean;
}

/**
 * Complete dashboard data structure
 */
export interface DashboardData {
  /** Student name for greeting */
  studentName: string;
  /** Overall progress metrics */
  overallProgress: OverallProgress;
  /** Admissions strength radar data */
  admissionsStrength: RadarDataPoint[];
  /** Curated college list */
  colleges: College[];
  /** Latest session recap */
  sessionRecap: SessionRecap;
  /** Upcoming deadlines */
  upcomingDeadlines: Deadline[];
}
