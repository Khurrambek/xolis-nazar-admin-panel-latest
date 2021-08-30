import React from 'react';
import './dashboard.css';
import DashboardCard from './DashboardCard/DashboardCard';
import LineChart from '../../components/LineChart/LineChart';
import TodoList from '../../components/TodoList/TodoList';
import LatestNews from './LatestNews/LatestNews';
import FooterDashboard from './FooterDashboard/FooterDashboard';

const Dashboard = () => {
    return (
        <div className="page-container">
            <section className="dashboard-content">
                <div className="dashboard-card-section row ">
                    <DashboardCard
                        indicatorIcon="assets/dashboard/people.png"
                        statNumbers="97.5"
                        statSection="Ko'rilganlar Soni"
                        chartIcon="assets/dashboard/viewsRate.png"
                    />
                    <DashboardCard
                        indicatorIcon="assets/dashboard/bag.png"
                        statNumbers="47.7"
                        statSection="Yangiliklar Soni"
                        chartIcon="assets/dashboard/newsRate.png"
                    />
                    <DashboardCard
                        indicatorIcon="assets/dashboard/cart.png"
                        statNumbers="107.1"
                        statSection="Obunachilar Soni"
                        chartIcon="assets/dashboard/subscribeRate.png"
                    />
                    <DashboardCard
                        indicatorIcon="assets/dashboard/dollar.png"
                        statNumbers="87.9"
                        statSection="Daromad Miqdori"
                        chartIcon="assets/dashboard/revenueRate.png"
                    />
                </div>
            </section>
            <section className="row statistics-section">
                <div className="col-md-7 chart-wrapper">
                    <LineChart />
                </div>
                <div className="col-md-5 todo-wrapper">
                    <TodoList />
                </div>
            </section>
            <section className="row latest-news-section">
                <LatestNews />
            </section>
            <footer className="dashboard-footer">
                <FooterDashboard />
            </footer>
        </div>

    )
}

export default Dashboard
