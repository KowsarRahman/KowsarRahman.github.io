import React, { Component } from "react";
import Image from 'next/image'
class Skills extends Component {


    render() {

        const features = [
            { name: '🌐FrontEnd', description: 'React.JS, Next.JS, HTML/CSS' },
            { name: '⚒️BackEnd', description: 'Flask, Spring Boot, Express' },
            { name: '📘Database', description: 'MongoDB, SQL' },
            { name: '🖥️Programming', description: 'Java, Python, C++' },
            { name: '🧰Tools', description: 'Git, CircleCI, BitBucket' },
            { name: '☁️Deployment', description: 'AWS RDS, AWS ElasticBeanStalk, AWS Amplify, AWS EC2, Firebase' },
        ]

        return (
            <>
            {/* Skills Section */}
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2" >
                <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">My Skills</h2>
                <p className="mt-4 text-gray-500">
                    I call myself a <strong>full-stack developer</strong> with knowledge ranging from Java to JavaScript, React to Next, SQL to MongoDB, Python to Flask. I have worked with various personal projects of mine and deployed them on AWS and Firebase platforms. I am deeply passionate about mobile web development and cyber security. Hoping to make a career out of Software Engineer as I gradute with a degree in Computer Science from RMIT University at 2022. <strong>Want to hire me?</strong> Please do so!
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <Image
                    src="/react.png"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="bg-gray-100 rounded-lg"
                    width={500}
                    height={500}
                />
                <Image
                    src="/springboot.jfif"
                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                    className="bg-gray-100 rounded-lg"
                    width={500}
                    height={500}
                />
                <Image
                    src="/mongodb.png"
                    alt="Side of walnut card tray with card groove and recessed card area."
                    className="bg-gray-100 rounded-lg"
                    width={500}
                    height={500}
                />
                <Image
                    src="/github.png"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="bg-gray-100 rounded-lg"
                    width={500}
                    height={500}
                />
                </div>
            </div>
            </div>
            {/* The End of it */}
            </>
        );
    }
}

export default Skills;