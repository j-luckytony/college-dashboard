import React from "react";

import Image from "next/image";

import { mockDashboardData } from "@/data/mockData";

import { AdmissionsStrength } from "./admissions-strength/AdmissionsStrength";
import { CollegeList } from "./college-list/CollegeList";
import { OverallProgressRC } from "./overall-progress/OverallProgress";
import { RecapSession } from "./recap-session/RecapSession";
import { Sidebar } from "./sidebar/Sidebar";
import { UpcomingDeadlines } from "./upcoming-deadlines/UpcomingDeadlines";

export interface DashboardProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Main Dashboard component
 * Displays the complete college admissions dashboard with sidebar and all sections
 */
export const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const [activeSidebarIndex, setActiveSidebarIndex] = React.useState(0);

  const handleSidebarItemClick = (index: number) => {
    setActiveSidebarIndex(index);
    // Handle navigation logic here if needed
  };

  return (
    <div className={`flex h-screen bg-gray-soft ${className || ""}`}>
      {/* Sidebar */}
      <Sidebar
        activeIndex={activeSidebarIndex}
        onItemClick={handleSidebarItemClick}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto px-6 pt-12.5 pb-9.25">
        <div className="mx-auto max-w-8xl">
          {/* Header */}
          <div className="mb-6">
            <div className="dashboard-row-1 items-center">
              <div>
                <h1 className="text-10 font-bold text-dark-gray leading-10 tracking-[-0.11px]">
                  Good morning, {mockDashboardData.studentName}!
                </h1>
              </div>

              {/* Bell Icon for Notifications */}
              <div className="flex justify-end">
                <button className="flex h-12.25 w-12.25 items-center justify-center bg-white rounded-full">
                  <Image
                    src="/icons/bell.svg"
                    alt="Notifications"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="space-y-6">
            {/* First Row - Pixel Perfect Grid */}
            <div className="dashboard-row-1">
              <OverallProgressRC data={mockDashboardData.overallProgress} />
              <AdmissionsStrength data={mockDashboardData.admissionsStrength} />
            </div>

            {/* Second Row - Pixel Perfect Grid */}
            <div className="dashboard-row-2">
              <CollegeList colleges={mockDashboardData.colleges} />
              <RecapSession data={mockDashboardData.sessionRecap} />
              <UpcomingDeadlines
                deadlines={mockDashboardData.upcomingDeadlines}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
