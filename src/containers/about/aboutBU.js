import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'
import {Link} from 'react-router-dom'
import OpenAccessLogo from '../../assets/icons/Open_Access_logo_PLoS_transparent.svg'
import {Grid, Row, Col} from 'react-flexbox-grid-aphrodite';
import {connect} from 'react-redux'

class AboutPage extends Component {

    constructor(){
        super()
        this.state={
            expandedItem:-1
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    getExpandedState(key) {
        return this.state.expandedItem === -1
            ? false
            : this.state.expandedItem === key
    }
    setExpandedState(key){
        this.state.expandedItem === key
        ?this.setState({expandedItem:-1})   
        :
        this.setState({expandedItem:key})        
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      /**
       * left = 37
            up = 38
            right = 39
            down = 40
       * @param {*} e 
       */
      handleKeyDown(e) {
        console.log('Key',e)
      }

    render() {
       
        const {match, history,faqs} = this.props
        return (
            <div>
                {match.url === '/about' && <div>
                    <e.Title>Our Goal</e.Title>
                    <e.GoalContainer>                        
                        <p>Our goal is to bring all scientific data under one open repository, to build
                            the science dataweb and solve the world's greatest interdisciplinary challenges</p>
                            <button>
                            <Link to='/about/initiative'>
                                Learn More
                            </Link>
                            </button>
                    </e.GoalContainer>
                    <Link to='/about/openData'>
                        <e.Arrow bottom color={'ffffff'} angle={45}></e.Arrow>
                    </Link>
                    <Header/>
                </div>
            }
            {match.params.section  === 'initiative' && <div style={{marginTop: '11%'}} >
                    
                    <e.IniContainer>                        
                        <section>
                            <h1>About the initiative</h1>
                            <p>Scientific data is locked in knowledge silos, spread across countless disconnected databases on the web. Creating a high-level layer of interconnected concepts would build a bridge between these fragmented databases and dissolve knowledge silos. But there’s so much data out there that one team cannot build such a layer alone.
                            <br/><br/>
                            Founded by The Brane, SODI seeks to build a concept layer of high-level index terms and make it available to the whole world as the first-ever general purpose science dataweb. To do so, your help is needed. Which is why this project will be an entirely open-source collaborative effort, and the data will stay open to everyone.
                            </p> 
                        </section>                          
                    </e.IniContainer>
                    <Link to='/about/openData'>
                        <e.Arrow bottom color={'ffffff'} angle={45}></e.Arrow>
                    </Link>
                    <Header/>
                </div>
            }
            {
                match.params.section === 'openData' && <e.WhiteWrapper>
                    <e.Arrow onClick={() => history.goBack()} color={'50749c'} top angle={-135}></e.Arrow>

                    <Grid>
                        <Row center="xs">
                            <Col xs={12}>
                                <h2>Why Open Science Data Access?</h2>
                                <span/>
                            </Col>
                        </Row>
                        <Row
                            style={{
                            paddingTop: '31px'
                        }}
                            center="xs">
                            <Col xs={12} md={5} sm={5} >
                                <img width={'40%'} src={OpenAccessLogo} alt='OpenAccessLogo'/>
                            </Col>
                            <Col xs={12} md={4} sm={4}>
                                <p>
                                    With datasets growing larger and larger, researchers are finding that the
                                    bottleneck to discovery is no longer a lack of data but an inability to manage,
                                    analyze, and share their large datasets. Individual researchers can no longer
                                    download and analyze the important datasets in their scientific fields on their
                                    own computers.<br/>
                                    <br/>
                                    Cross-disciplinary analysis is even more difficult. The goal of the Science Open
                                    Data Initiative is to remove the bottleneck to discovery by providing
                                    researchers with access to a variety of key datasets across scientific
                                    disciplines and the computing infrastructure to allow scientists to easily
                                    manage and share their data and analysis.
                                </p>
                            </Col>
                        </Row>
                    </Grid>

                    <Link to='/about/faq'>
                        <e.Arrow
                            style={{
                            marginTop: '45px'
                        }}
                            color={'50749c'}
                            angle={45}></e.Arrow>
                    </Link>
                </e.WhiteWrapper>
            }

            {
                match.params.section === 'faq' && <div>                    
                <e.Arrow onClick={() => history.goBack()} style={{top: '100px',zIndex: 2}} color={'fff'} top angle={-135}></e.Arrow>
                    <e.FaqContainer>
                        
                        <h1>FAQ</h1>
                        {faqs.map(faq=>{
                        return(
                            <div key={faq.id} >
                                <h2>
                                    {faq.section}
                                </h2>
                                {faq.questions.map(question=>{
                                    return(
                                        <div key={question.id} >
                                            <e.CollapseItem expanded={this.getExpandedState(question.id)||false} onClick={()=>this.setExpandedState(question.id)} >
                                                <h5>{question.title}</h5>
                                                <p>
                                                    {question.content}
                                                </p>
                                            </e.CollapseItem>                                            
                                        </div>
                                    )
                                })}
                            </div>
                        )                        
                        })}
                    </e.FaqContainer>

                    <Header/>
                </div>}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {faqs: state.faqs.faq}
}

export default connect(mapStateToProps)(AboutPage)



/**
 * Elements
 * 
 * 
 * import styled from 'styled-components'

            export const GoalContainer = styled.div `
                width: 100%;    
                height: auto;
                background-color: rgba(80,116,156,0.9);
                margin: 0 auto;
                top: 30%;
                padding:50px 0;
                left: 0;
                right: 0;
                color:white;
                text-align:center;
                h2{
                    padding: 61px 0px 0px 0px;
                    font-size: 2em;
                }
                span{
                    width: 76px;
                    display: block;
                    height: 0px;
                    border: solid 2px #fcfafa;
                    margin: 0 auto;        
                }

                button{
                    color: #ffffff;
                    cursor: pointer;
                    width: auto;
                    font-size: 1.2em;
                    border: solid #fff 1px;
                    border-radius: 5px;
                    background: transparent;
                    font-weight: 100;
                    padding: 5px 15px 5px 15px;
                    position: relative;
                    margin-top: 27px;
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }
                
                p{
                    width: 784px;
                    margin: 0 auto;
                    font-size: 1.5em;
                }
                @media (max-width: 800px) {
                    p{
                        width: 600px;
                        margin: 0 auto;
                        font-size: 1.5em;
                    }
                }
                @media (max-width: 580px) {
                    p{
                        width: 100%;
                        margin: 0 auto;
                        font-size: 1.1em;
                    }
                }
            
            `

            export const Title = styled.h1 `
                text-align: center;
                color: white;
                font-size: 4em;
                padding-top: 6%;
                @media (max-width: 800px) {
                    padding-top: 20%;
                    font-size: 3em;      
                }
                @media (max-width: 580px) {
                    
                    font-size: 2em;      
                }
            `

            export const Arrow = styled.i `
                border: solid ${props => `#${props.color}`};
                box-sizing: border-box;
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 0px;
                outline: none;
                cursor: pointer;
                height: 30px;
                width: 30px;
                left: 50%;
                @media (max-width: 580px) {
                    
                    left: 46%;  
                }
                ${props => props.top && `
                top: 5%;
                `}
                ${props => props.bottom && `
                bottom: 5%;
                @media (max-width: 580px) {
                    bottom: 9%;
                }
                `}
                
                position: absolute;
                transform: ${props => `rotate(${props.angle}deg)`}
            `

            export const WhiteWrapper = styled.div `
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #ffffff;
            color: #50749c;
            padding-top: 150px;

            span{
                width: 76px;
                display: block;
                height: 0px;
                border: solid 2px #50749c;
                margin: 0 auto;        
            }
            p{
                text-align: left;
                font-size: 1.2em;
            }
            img{
                padding-top: 66px;
            }
            @media (max-width: 580px) {
                padding-top: 50px;
                height: 800px;
                img{
                    padding-top: 0px !important;
                }
                p{
                    background: white;
                    text-align: left;
                    font-size: 1em;
                    padding: 10px;
                }
            
            }

            `

            export const FaqContainer = styled.div `
            overflow-y: scroll;
            width: 100%;
            padding-left: 5%;
            height: 616px;
            background-color: rgba(80,116,156,0.9);
            margin: 0 auto;
            top: 15%;
            position: absolute;
            left: 0;
            right: 0;
            color:white;
            text-align:left;
            padding-top: 61px;
            h1{
                text-align: left;
                color: white;
                font-size: 4em;                
            }
            h2{
                
                font-size: 1.8em;
            }
            span{
                width: 76px;
                display: block;
                height: 0px;
                border: solid 2px #fcfafa;
                margin: 0 auto;        
            }
            @media (max-width: 580px) {

                
                    h1{
                        font-size: 2.3em;   
                    }
                    
                
            }


            `

            export const CollapseItem = styled.div `
            h5{
                font-size: 1.2em;
                margin: 0;
                padding-top: 13px;
                cursor:pointer;
            }



            p{
                font-size: 1em;
                
                padding-left: 25px;
                margin-top: 10px;
                height:auto;
                width:80%;
                // max-height: 250px;
                transition: 0.5s all;
                ${props => props.expanded === false && `
                max-height: 0;
                color: transparent;
                `}

            }      
            @media (max-width: 580px) {
                    p{
                        padding-left: 5px;   
                    }
                }
            `

            export const IniContainer = styled.div `
            overflow-y: scroll;
            width: 100%;
            padding-left: 20px;
            height: 100%;
            background-color: rgba(80,116,156,0.9);
            margin: 0 auto;
            top: 10%;
            position: absolute;
            left: 0;
            right: 0;
            color:white;
            text-align:left;
            padding-top: 61px;

            section{
                max-width:700px;
                margin:0 auto;
                text-align:left;
                    h1{
                        padding-right: 60px;
                        text-align: left;
                        color: white;
                        font-size: 3.2em;                
                    }
                    p{

                        padding-right: 60px;
                        font-size: 21px;
                        font-weight: 100;
                    }
                
            }

            @media (max-width: 580px) {            
                top: 16%;
                padding-top:0px;
                padding-left: 0px;
                
                section{
                    padding-left: 10px;
                    padding-right: 10px;
                        padding-bottom: 60px;
                
                    h1{
                        font-size:2em;
                    }
                    p{
                        font-size:15px;
                    }
                }
            }

            `
 */