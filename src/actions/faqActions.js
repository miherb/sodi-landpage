import {GET_FAQ} from './constants'


export function fetchFaq(){

    return function (dispatch){
        dispatch({
            type:GET_FAQ,
            payload:[
                {
                    id:100,
                    section:'1. Project overview',
                    questions:[
                        {
                            id:101,
                            title:'1.1 What is the Science Open Data Initiative?',
                            content:`The Science Open Data Initiative (SODI) is a decentralized global effort led by data scientists to build a semantic dataweb of connected open access scientific knowledge. This network aims to bridge the divide between existing disciplines, unify entities from all extant databases and repositories in one centralised repository of open data, and enable greater interdisciplinary communication and collaboration between scientific stakeholders worldwide.
                            
                           The framework for this Scientific information commons is our foundational ontology, a lean knowledge classification standard developed to meet the European Commission’s FAIR criteria of Findable, Accessible, Interoperable and Reusable data.
                           
                           By defining and constructing the infrastructure for a community-based initiative to interlink all entities and processes in our universe to relevant scientific disciplines, technologies, public organisations (universities, research centers, scientists) and research initiatives in one graph repository, SODI aims to map the space of scientific and technological progress, uncover meaningful connections, provide guidance and accelerate innovation across all fields of research, and ultimately push the very boundaries of human knowledge.
                           
                           SODI draws inspiration from the greatest multinational scientific megaprojects in the history of humankind, such as CERN’s high-energy physics research program, ITER’s experimental studies to produce fusion power, the Human Genome Project, Galaxy Zoo’s universe-spanning citizen science initiative, and of course, Wikipedia.
                           
                           `
                        },
                        {
                            id:102,
                            title:'1.2 Why build the Science Dataweb?',
                            content:`The online tools at the disposal of scientists worldwide are not up to the task of current interdisciplinary research efforts to solve the defining problems of the Anthropocene age - complex, discipline-spanning challenges requiring urgent cross-boundary action, e.g., climate change, global energy demand, global resource depletion, the sixth mass extinction, global pandemics, water resource management, pollution, deforestation and desertification, ending world hunger, eliminating the wealth gap, and eliminating poverty. 
                            Furthermore, the current research paradigm, which favours deep over broad research, does not adequately support great interdisciplinary opportunities, from bioinformatic methods map metabolic pathways (Maudsley et al.), to CRISPR-Cas9 genome engineering in molecular and preventive medicine (Moreno and Mali), from the artificial intelligence research to the internet of everything, from particle physics research into dark energy (Amendola and Tsujikawa) to the race for unlimited fusion energy (Evans).
                            
                            Although the division of scientific labour along disciplinary lines has historically helped to reduce the complexity of organizing knowledge, it has lead to the proliferation of knowledge silos, overspecialized scientists conducting deep research at the expense of broad research (Bateman), and widely divergent research goals across disciplines. 
                            
                            As the internet remains largely non-semantic (Schwartz), online search as it stands cannot yet execute complex scientific search queries; disciplinary repositories of scientific data are by and large protocol idiosyncratic, highly reductive, and non-interoperable, and institutions that favour low-risk iterative research drive the fragmentation of science into competing silos.
                            
                            Such knowledge silos reduce peripheral vision of science practitioners, lower the efficacy of decision-making, promote unidimensional thinking and hinder scientific revolutions from taking place (Kuhn). The lack of channels of communication between various disciplines is an obstruction to concerted holistic scientific efforts to map newer interdisciplinary domains such as artificial intelligence, nanoscience, atomic-scale engineering, space science, and genomics and bioinformatics, for instance.
                            
                            The science dataweb would radically alter the scientific landscape and existing search paradigm, allowing for dramatically faster and more precise search queries and filter and sorting capabilities, enabling a cross-pollination of ideas and concepts, dissolving knowledge silos, and providing stakeholders across the world with a powerful tool with which to more effectively and efficiently conduct scientific research.
                                                        
                           `
                        },
                        {
                            id:103,
                            title:'1.3 What is our mission',
                            content:`Our mission is to help solve the world’s greatest interdisciplinary problems while spurring ambitious research efforts into long-neglected interdisciplinary fields. To do this, we want to create a common reference framework for a collective knowledge system. In so doing, we hope to contribute to the de-risking and revaluation of interdisciplinary research, help transition all of academic publishing toward open science and open data models, set the stage for frictionless knowledge dissemination across all of science, and encourage more effective science communication and widespread evidence-based policy making around the world.
                            With such an interoperable and iteratively improving database in place drawing on the consistent collective efforts of scientists around the world, the scientific community would reverse decades of fragmentation, and be in a better position to achieve a consilience of all scientific knowledge under one vast umbrella dataweb.
                            
                           `
                        },
                        {
                            id:104,
                            title:'1.4 What are some of the scientific applications of SODI’s dataweb',
                            content:`1.4.1 Medicine:
                            A doctor seeking unknown extant non-invasive treatments for symptoms similar to those she has diagnosed in her patient could conduct an exhaustive search of homologous symptoms, and find the shortest path across disciplinary boundaries to potentially relevant treatments.
                            
                            1.4.2 Genetics:
                            A bioinformatician seeking new haplotype mapping methods to apply to his research on gene-gene interactions for Tay-Sachs disease could filter the intersection of two genes for an exhaustive list of all related existing methods.
                            
                            1.4.3 Space science:
                                A cosmologist seeking cognate particle physics theories to his own cosmological model, with a particular range of predictions for the cosmological constant, may more rapidly pinpoint these theories and their associated properties, and assess any discrepancies in the data.
                            `
                        },{
                            id:105,
                            title:'1.5 How do we envision the future?',
                            content:`SODI envisions a more densely interconnected, machine-readable research landscape linking all entities in Nature, Science, Technology and various public institutions in one Open Science Graph, improving data discovery and integration across all of Science.
                            
                            For instance, using available natural language processing and topic modeling techniques, the science dataweb would causally link molecules to genes, to life forms, to existing theories and conceptual models studying their social behaviour, to past and present research techniques employed by specific research laboratories around the world. This dataset would act as an index for the global body of scientific literature, exposing scientists to wider and more easily searchable arrays of research papers than the current paradigm allows.
                            
                            Subjecting such a holistic dataset to systematic analysis of the various causal interconnections would provide a crucial overview of multivariable systems, uncover new patterns in the data, bridge gaps in scientific perspective reinforced by existing search paradigms and increase interdisciplinary communication.
                            `
                        },{
                            id:106,
                            title:'1.6 What is the timeline for the Science Open Data Initiative?',
                            content:`As the web hosts innumerable open data repositories comprised of both structured (machine-readable) and unstructured data, and as these datasets are continually being updated and supplemented with exponential stores of data of ever-increasing descriptive richness, the initiative will be an ongoing effort, requiring the concerted and sustained participation of scientists and data scientists the world over to canvas the vast available body of research data and the associated corpus of literature.
                            
                                SODI is making its resources immediately available to interested stakeholders. With widespread support, and donations from the scientific and international communities, SODI hopes to scale its operations and make this project a truly global effort.`
                        },{
                            id:107,
                            title:'1.7 Who is leading the Science Open Data Initiative?',
                            content:`SODI is an open-source and decentralised initiative led by the global scientific community, empowering individual scientists and organisations around the world to help overcome institutional inertia and accelerate the shift to an era of networked science.`
                        }
                        
                    ]
                },
                {
                    id:200,
                    section:'2. Community',
                    questions:[
                        {
                            id:201,
                            title:'2.1 Who can get involved?',
                            content:`SODI is calling on the entire scientific community, as well as anyone desiring to play a critical role in a massive, world changing, and paradigm shifting project, to come forward, share disciplinary data, and make the science dataweb a reality.
                            
                            SODI needs information scientists with expertise in knowledge classification, semantic web ontologists and epistemologists with experience in ontology defining and mapping, to help validate and implement our knowledge classification strategy.
                            
                            Finally, to make sense of the gathered data, SODI requires data scientists specialising in natural language processing (NLP) and deep learning in order to leverage data analysis techniques and classify this knowledge.
                            `
                        },
                        {
                            id:202,
                            title:'2.2 Why would the scientific community share their data to the initiative?',
                            content:`Above all else, we believe that all scientists in the world share a vision where science is open, accessible and free for all to participate in and improve. SODI wants any and all scientists of the world to contribute to building the largest collaborative science repository and making this knowledge truly interoperable and accessible to all. By sharing and helping to categorise their disciplinary data, scientists will be taking an active step to accelerate the rate of interdisciplinary research.
                            `
                        },
                        {
                            id:203,
                            title:'2.3 How does SODI validate the quality and accuracy of data sets?',
                            content:`The SODI data-gathering process is always evolving. We are open to discussing quality control criteria and the means by which they are implemented. If you’d like more information on the way we validate the quality of incoming data, please join the discussion on our Slack team.`
                        },
                        {
                            id:204,
                            title:'2.4 How does SODI differ from existing solutions',
                            content:`SODI stands apart in that its mission is an immensely larger challenge. We are endeavoring to gather all Open Access data from every field of science, while most existing repositories specialize in narrow knowledge silos for a single or handful of fields. SODI is focused exclusively on gathering Open Access scientific data stored in online repositories, aligning with our shared values of the free and frictionless distribution and dissemination of knowledge.
                            
                            We differ in that we are mapping data sets to a more foundational and interdisciplinary ontology to counteract the lack of interoperability that comes from the depth of and difference of descriptive richness in separate models. The interconnection achieved from this singular ontology will grant SODI the ability to uncover meaningful patterns, gaps, and connections across all fields and ultimately accelerate scientific and technological innovation and discovery.`
                        }
                        
                    ]
                },
                {
                    id:300,
                    section:'3. Data',
                    questions:[
                        {
                            id:301,
                            title:'3.1 What is SODI’s data gathering strategy?',
                            content:`Because interoperability standards have not yet been agreed upon and widely adopted across semantically heterogeneous scientific databases, mapping and merging the latter is an extraordinary challenge.
                            
                            This challenge is compounded by the fact that the greater the descriptive richness of a metadata model, the more difficult it becomes for interoperability to be achieved with other models (i.e., descriptive richness of ontologies is inversely proportional to their interoperability). A strategy of making semantically rich ontologies interoperable thus becomes exponentially more difficult given the sheer number of classes and subclasses that must be mapped between ontologies, coupled with the amount of heterogeneous datasets available online.
                            
                            SODI’s strategy is thus to provide a more foundational and interdisciplinary exchange layer ontology, with higher level index terms acting as semantic mediators between ontologies, to simplify building a scalable environment while maximizing interoperability. In this way concept mapping is facilitated, and the effort to centralise and interconnect all scientific data is accelerated. It is our aim to make use of existing semantic methodologies and ensure interoperability with existing ontology packages. For more information on our process, please visit our Github.
                            `
                        },
                        {
                            id:302,
                            title:'3.2 What kind of data will be gathered?',
                            content:`SODI will focus exclusively on gathering and categorizing Open Access scientific data stored in online repositories. Data will be gathered from all major scientific domains, i.e., Natural, Physical, Formal, Applied, and Social sciences. For more information on our knowledge classification system, and how it covers all scientific disciplines, please join our Slack channel. 
                            
                            Target repositories may be both structured (i.e., highly organized, such as on Pubchem). or unstructured (contained within scientific journal articles and other textual artifacts). Unstructured data will require the use of natural language processing and deep learning techniques to accurately text-mine, cluster and categorise data in preparation for merging with SODI’s database.
                            `
                        },
                        {
                            id:303,
                            title:'3.3 How will the data be licensed?',
                            content:`The data will be sourced exclusively from Open Access repositories, and will be made freely available for non-commercial use under a CC BY-NC 4.0 license. It is our hope that such a database will help to foster scientific progress all across the globe and spur the onset of an era of Science 2.0.
                            `
                        },
                        {
                            id:304,
                            title:'3.4 What can be done with the data?',
                            content:`There are several ways in which this data may be of use to the wider scientific community: It may be used to map the interconnectivity of scientific disciplines, explore shortest paths between datasets to reveal uncover novel linkage patterns between vertices, analyse causality via assignation of weight to vertices to form bayesian networks, for example. Ultimately, SODI leaves it up to the community to decide how best to make use of this data resource to extend the frontiers of human knowledge.
                            `
                        },
                        {
                            id:305,
                            title:'3.5 Is our code open source?',
                            content:`Yes.  Get it in our GitHub`
                        },
                        {
                            id:306,
                            title:'3.6 How do I enlist?',
                            content:`If you are an interested data scientist, we invite you to take a look at our Github, and  join the discussion on our Slack channel. We’re excited to have the opportunity to learn any insights you may have into this challenge, to collaborate with you in making the dream of the scientific dataweb a reality for all, and to enact real, lasting change in the world!`
                        }
                    ]
                },
                {
                    id:400,
                    section:'4. Organisation',
                    questions:[
                        {
                            id:401,
                            title:'4.1 How we’re organized',
                            content:`Our non-profit is a diverse team working remotely across the globe and collaborating in a fast-paced, open-source community on Slack and GitHub. The project was conceived and founded by The Brane, a graph-based search and visualization platform promoting collaborative scientific research and giving Science 2.0 approaches to knowledge sharing pride of place.`
                        },
                        {
                            id:402,
                            title:'4.2 Funding',
                            content:`Although our collaborative project is currently unfunded, our goal is to become self-sustaining through donations from parties with a shared belief in our mission. We seek donations from foundations, universities, research laboratories, and other public and parapublic organizations who wish to make our dream of a massive, interconnected science dataweb a reality. We seek support from groups wanting to aid our initiative in pushing innovation to tackle humanity’s most urgent issues. 
                            
                            Click to discover how your contribution will support SODI or email us at info@sodi.org. (If we can determine exactly how a few set amounts will be used for SODI and articulate them like CERN, charity: water, and Kiva, I believe this could help ease concerns of donors.)`
                        },
                        {
                            id:403,
                            title:'4.3 How to join',
                            content:`We are science advocates, specialists, and generalists. We are artificial intelligence experts, physicists, mechanical and bioengineers. We are developers, cognitive and data scientists, geographers, and designers. We hail from institutions like McGill University, UC Berkeley, Boston University, University of Honduras, and others.
                            
                            Our team envisions a world that flourishes with open and interconnected science. Driving our community is a passion for interdisciplinary collaboration and innovation - the type that solves humanity’s most urgent problems. We’re steadfast supporters of evidence-based policy making and citizen science.
                            
                            Current research and collaboration tools for scientists are wholly inadequate for the discipline-spanning challenges humanity must tackle. The present paradigm hinders innovative progress and the cross-pollination of ideas and concepts. We are looking for the visionaries who are not deterred, but excited by this massive undertaking. Join our Slack team and discover how you can contribute to the Initiative.`
                        },
                        {
                            id:404,
                            title:'4.4 Where are we located',
                            content:`SODI does not yet have offices. We are digital natives working globally and remotely from homes, workspaces, and expensive cafés.`
                        }
                    ]
                }
            ]
        })
    }
}
