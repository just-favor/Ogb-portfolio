import ScrollReveal from "./Scrollreveal";

const technicalSkills = [
    // { icon: 'fab fa-html5', name: 'HTML5' },
    // { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: null, name: 'Tailwind', svg: true },
    { icon: 'fab fa-react', name: 'Next.js' },
    { icon: 'fas fa-project-diagram', name: 'GraphQL' },
];

function SkillCard({ skill }) {
    return (
        <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4 text-[#4a6cf7]">
                {skill.svg ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0,0,256,256" className="mx-auto">
                        <g fill="#4a6cf7" fillRule="nonzero"><g transform="scale(5.33333,5.33333)"><path d="M24,9.604c-6.4,0 -10.4,3.199 -12,9.597c2.4,-3.199 5.2,-4.398 8.4,-3.599c1.826,0.456 3.131,1.781 4.576,3.247c2.352,2.387 5.075,5.151 11.024,5.151c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.6c-1.825,-0.456 -3.13,-1.781 -4.575,-3.247c-2.353,-2.388 -5.077,-5.151 -11.025,-5.151zM12,24c-6.4,0 -10.4,3.199 -12,9.598c2.4,-3.199 5.2,-4.399 8.4,-3.599c1.825,0.457 3.13,1.781 4.575,3.246c2.353,2.388 5.077,5.152 11.025,5.152c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.599c-1.826,-0.456 -3.131,-1.781 -4.576,-3.246c-2.352,-2.388 -5.075,-5.152 -11.024,-5.152z"></path></g></g>
                    </svg>
                ) : (
                    <i className={skill.icon}></i>
                )}
            </div>
            <h4 className="text-xl font-semibold text-[#2d3e50] dark:text-gray-200">{skill.name}</h4>
        </div>
    );
}

export default function Skills() {
    return (
        <div className="" id="skills">
        <ScrollReveal>
        <section  className="py-40 bg-gray-50 dark:bg-black">
            <div className="max-w-[1600px] mx-auto px-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#2d3e50] dark:text-gray-200">My Technical Skills</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">A showcase of my technical expertise and tools I excel at.</p>
                </div>
                <div className="mb-12">
                    {/* <h3 className="text-3xl font-semibold mb-8 text-[#2d3e50] dark:text-gray-200 text-center"> Skills</h3> */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-12">
                        {technicalSkills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
                    </div>
                </div>
            </div>
        </section>
        </ScrollReveal>
        </div>
    );
}
