
import React from "react";
import { NewsCard } from "../shareable/NewsCard";
import news01 from './../../../assets/images/news-01.jpg'
import team from './../../../assets/images/team-member-04.jpg'

export function NewsSection() {

    return (
        <div className="w-full flex flex-col items-center pt-0 pb-14">
            <div className="content w-11/12 flex flex-col mb-16">
                <h1 className="text-4xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-16">Refreshing news for developers and designers</h1>

                <div className="box flex justify-center">                   
                    <NewsCard 
                        title="Should You Get Online Education?"
                        description="It is difficult to believe that we have become so used to having instant access to information at..."
                        image={news01}
                        author={{name: "Jean Marc", image: team, job: "CTO of Supercars"}}
                        tags={["#online", "#internet", "#education"]}
                    />
                    <NewsCard 
                        title="Should You Get Online Education?"
                        description="It is difficult to believe that we have become so used to having instant access to information at..."
                        image={news01}
                        author={{name: "Jean Marc", image: team, job: "CTO of Supercars"}}
                        tags={["#online", "#internet", "#education"]}
                    />
                    <NewsCard 
                        title="Should You Get Online Education?"
                        description="It is difficult to believe that we have become so used to having instant access to information at..."
                        image={news01}
                        author={{name: "Jean Marc", image: team, job: "CTO of Supercars"}}
                        tags={["#online", "#internet", "#education"]}
                    />
                </div>
            </div>
        </div>
    )
}