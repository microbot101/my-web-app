import React from "react";
import './case.css'

const Card = ()=> {
    return(
        <>
            <div className="service">
                <div className="card">
                    <h1>Weekly News Updates</h1>
                    <p>
                    Get custom-branded video updates featuring your project, market news, roadmap breakdowns, and Twitter-ready content.
                    </p>
                </div>
                <div className="card">
                    <h1>Charity Campaign Management</h1>
                    <p>
                    We organize and promote on-chain giving events—clean water, food, education—building trust while doing good.
                    </p>
                </div>
                <div className="card">
                    <h1> Billboard & PR Campaigns</h1>
                    <p>
                    Secure a slot in top-tier cities like London or Tokyo. High-impact visuals and community-driven messaging.
                    </p>
                </div>
                <div className="card">
                    <h1>Podcast & Live AMAs</h1>
                    <p>
                    Get featured on The Buzz Podcast or host a live AMA to connect with investors directly.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card