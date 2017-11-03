import styled from 'styled-components'

export const Container = styled.div`

    #about , #initiative,#openData
    ,#faq {
        height: 100vh;    
    }
    #about{
        padding-top: 100px;
    }
    #initiative{
        padding-top: 0px; 
    }
    #faq{
        padding-top: 0px; 
    }


    @media (max-width:570px){
        #about{
            padding-top: 15vh;
            height: 85vh;  
        }
          #openData
        ,#faq {
            height: auto;    
        }
      
    }

`

export const GoalContainer = styled.div `
    width: 100%;    
    height: auto;
    background-color: rgba(80,116,156,0.9);
    margin: 0 auto;
    padding-top: 30%;
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
            width: 90%;
            margin: 0 auto;
            font-size: 0.9em;
        }
        button{
            font-size: 1em;
            padding:5px 10px 5px 10px;
        }
    }
  
`

export const Title = styled.h1 `
    text-align: center;
    color: white;
    font-size: 4em;
    padding-top: 6%;
    @media (max-width: 800px) {
        padding-top: 10%;
        font-size: 3em;      
    }
    @media (max-width: 580px) {
        
        font-size: 1.6em;
        
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
    transition: all .2s;
    ${props=>props.showNav?`
    border-width: 0 2px 2px 0;
    height: 30px;
    width: 30px;
    `:`
    border-width: 0;
    height: 0px;
    width: 0px;
    `}
    position: relative;
    @media (max-width: 580px) {
        display:none;
        top:unset;
        bottom:unset;
    }
    ${props => props.top && `
   // top: 5%;
    `}
    ${props => props.bottom && `
   // bottom: -110px;
    @media (max-width: 580px) {
        bottom: 9%;
    }
    `}
   
    transform: ${props => `rotate(${props.angle}deg)`}
`

/**
 * Open Data Styles
 */

export const White = styled.div`
    // padding-top:70px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
    .cont-white{
        margin: auto;
        width: 80%;
        padding: 10px;
    }
    @media(max-width:570px){   
        padding-top: 0;
        position:unset;
        transform:unset;
        top:unset;
     }

`

export const WhiteWrapper = styled.div `
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: #ffffff;
        color: #50749c;        
       
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
            padding-top: 30px;
        }
        .content{
            margin-right: 0px;
            margin-left: 0px;
            margin-top: 30px;
        }
        @media (max-width: 580px) {
            height: auto;
            margin-top: 0;
            
            img{
                padding-top: 0px !important;
                width: 100px;
            }
            p{
                background: white;
                text-align: left;
                font-size: 1em;
                padding: 10px;
            }
            .content{                
                margin-top: 30px;
            }
          
        }
        
 `

 export const Pre = styled.div`
 background-color: rgba(80,116,156,0.9);
 padding:50px;
 padding-top:0;
 margin-top: 0;

 @media(max-width:570px){    
    padding: 25px;
    padding-top: 0;
    margin-top: 0;
    position: relative;
 }

 `

export const FaqContainer = styled.div `        
        width: 100%;
        height: auto;
        margin: 0 auto;        
        position: relative;
        left: 0;
        right: 0;
        color:white;
        text-align:left;
        padding-top: 40px;
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
                    font-size: 2em;   
                }
                h2{
                    font-size: 1.5em;   
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
            margin-top: 10px;
            height:auto;
            width:80%;            
            ${props => props.expanded === false && `
            max-height: 0;
            color: transparent;
            `}
            transition: 0.4s all;

        }      
        @media (max-width: 580px) {
                p{
                    padding-left: 5px;   
                    font-size: 0.8em;
                    width: 100%;
                    ${props => props.expanded === false && `
                    display:none;
                    `}
                }
                h5{
                    font-size: 1em;   
                }
             }
 `

export const IniContainer = styled.div `        
        width: 100%;
        height: 100%;
        background-color: rgba(80,116,156,0.9);
        margin: 0 auto;
        
        position: relative;
        left: 0;
        right: 0;
        color:white;
        text-align:left;
        // padding-top: 110px;

        section{
            max-width:700px;            
            text-align:left;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
            margin: 0 auto;
            right: 0;
            left: 0;
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
            padding-top: 20%;
            padding-left: 0px;
            
            section{
                padding-left: 33px;
                padding-right: 18px;
                padding-bottom: 60px;
            
                h1{
                    font-size: 1.6em;
                    margin: 0;
                    padding-top: 15px;
                }
                p{
                    font-size:15px;
                    padding-right: 0;
                    margin: 0;
                }
            }
        }
 
 `