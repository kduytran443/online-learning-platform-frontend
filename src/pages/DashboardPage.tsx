import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { EnrolledClassList } from '@/components/class/EnrolledClassList';
import { EnrolledClass } from '@/models/EnrolledClass';
import { EnrolledClassCard } from '@/components/class/EnrolledClassCard';

export const enrolledClasses: EnrolledClass[] = [
  {
    id: 'cls-001',
    name: 'Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript and build responsive websites from scratch.',
    instructor: {
      name: 'Alice Nguyen',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    thumbnailUrl: 'https://cdn.hackr.io/uploads/posts/large/16740391159XHYBw4Oab.png',
    joinedDate: '2025-07-01',
    progress: 80,
    numberOfLessons: 25,
    status: 'ongoing',
    totalStudents: 1200,
    reviewRating: 4.7,
  },
  {
    id: 'cls-002',
    name: 'Java Programming Mastery',
    description: 'Comprehensive Java course covering OOP, Streams, and Spring Boot.',
    instructor: {
      name: 'Bob Tran',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    thumbnailUrl: 'https://cdn.hackr.io/uploads/posts/large/16740391159XHYBw4Oab.png',
    joinedDate: '2025-06-20',
    progress: 100,
    numberOfLessons: 30,
    status: 'completed',
    totalStudents: 890,
    reviewRating: 4.5,
  },
  {
    id: 'cls-003',
    name: 'UI/UX Design Fundamentals',
    description: 'Understand user experience principles and modern UI tools like Figma.',
    instructor: {
      name: 'Catherine Le',
      avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    thumbnailUrl: 'https://cdn.hackr.io/uploads/posts/large/16740391159XHYBw4Oab.png',
    joinedDate: '2025-05-10',
    progress: 65,
    numberOfLessons: 18,
    status: 'ongoing',
    totalStudents: 560,
    reviewRating: 4.3,
  },
  {
    id: 'cls-004',
    name: 'Python for Data Analysis',
    description: 'Use Python to explore, clean, and visualize data with Pandas and Matplotlib.',
    instructor: {
      name: 'David Hoang',
      avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    thumbnailUrl: 'https://cdn.hackr.io/uploads/posts/large/16740391159XHYBw4Oab.png',
    joinedDate: '2025-04-25',
    progress: 100,
    numberOfLessons: 22,
    status: 'completed',
    totalStudents: 1340,
    reviewRating: 4.8,
  },
  {
    id: 'cls-005',
    name: 'Mobile App Development with Flutter',
    description: 'Build beautiful and fast mobile apps for both iOS and Android using Flutter.',
    instructor: {
      name: 'Emily Pham',
      avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    thumbnailUrl: 'https://cdn.hackr.io/uploads/posts/large/16740391159XHYBw4Oab.png',
    joinedDate: '2025-07-10',
    progress: 35,
    numberOfLessons: 20,
    status: 'ongoing',
    totalStudents: 980,
    reviewRating: 4.6,
  },
];

export default function DashboardPage() {
  return (
    <Box sx={{ p: 4 }}>
      <div style={{ padding: 16 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography gutterBottom>Joining Classes:</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="bg-red-200">
            <EnrolledClassCard cls={enrolledClasses[0]} />
          </div>
          <div className="bg-blue-200">
            <EnrolledClassCard cls={enrolledClasses[0]} />
          </div>
          <div className="bg-green-200">
            <EnrolledClassCard cls={enrolledClasses[0]} />
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>1</Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>2</Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>3</Card>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
