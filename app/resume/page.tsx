import type { Metadata } from "next";
import ResumeClientView from "./resume-client";

export const metadata: Metadata = {
  title: "Resume | Jayesh Patil — Full-Stack Developer",
  description:
    "View the complete professional resume of Jayesh Patil — B.Tech Computer Science (AI & ML) undergraduate at VIT Bhopal, Full-Stack MERN Developer, and LeetCode problem solver.",
};

export default function ResumePage() {
  return <ResumeClientView />;
}
