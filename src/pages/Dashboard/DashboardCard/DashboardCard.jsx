import React from 'react';
import './dashboard-card.css';

const DashboardCard = (props) => {
    const {
        indicatorIcon,
        statNumbers,
        statSection,
        chartIcon
    } = props;
    return (
        <div className="dashboard-card-wrapper col-md-3">
            <div className="dashboard-card">
                <img src={indicatorIcon} className="py-3 px-4" alt="indicator" />
                <div className="stats py-1 px-4">
                    <h3 className="stat-number">
                        {statNumbers}
                    </h3>
                    <p className="stat-section">
                        {statSection}
                    </p>
                </div>
                <img src={chartIcon} alt="chart icon" />
            </div>
        </div>
    )
}

export default DashboardCard
