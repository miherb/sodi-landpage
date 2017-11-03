import styled from 'styled-components'

export const Container = styled.div `


`

export const LeftPanel = styled.div `
    width: 100%;
    max-width: 550px;
    height: 550px;
    top: 16%;
    background-color: rgba(80, 116, 156, 0.9);
    border-radius: 50%;
    position: absolute;
    float: right;
    left: 15%;
    p{
        font-size: 2em;
        font-weight: 100;
        padding: 64px 73px 0px 60px;
        text-align: center;
        color: white;
        
    }
    button{
        display:none;
    }

    @media (max-width: 1200px) {
        left: 5%;
    }
    @media (max-width: 1800px) {
        max-width: 450px;
        height: 450px;
        top: 20%;
        p{
            font-size:1.5em;
            padding: 79px 73px 0px 60px;
        }
    }

    @media (max-width: 910px) {
        ${props => props.showForm
    ? `
    display:none;    
        `
    : `
    display:inline;
        `}
        right: 0;
        left: 0;
        margin: 0 auto;
        p{
            padding: 65px 38px 0px 33px;
        }
        button{
            display:inline;
            margin: 0px 38%;
        }
    }

    @media (max-width: 456px) {
        max-width: 100vw;
        height: auto;
        padding-bottom: 53px;
        border: 0;
        border-radius: 0;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        margin: 0 auto;
        right: 0;
        left: 0;
        p {
            padding: 55px 20px 9px 20px;
            font-size: 1em;
        }
        button{
            margin:0 auto;
        }
    }


`

export const Circle = styled.div `
        width: 100%;
        max-width: 550px;
        height: 550px;
        top: 16%;
        border: solid 2px rgb(255,255,255);
        border-radius: 50%;
        position: absolute;
        float: right;
        right: 15%;
        @media (max-width: 1200px) {
            right: 5%;
        }
        h2{
            text-align: center;
            padding: 35px 41px 0px 0px;
            color: white;
        }
        p{            
            text-align: left;
            font-size: 20px;                       
            color: #ffffff;
        }
        section{
            padding-left: 60px;
        }
       
        input{
            padding: 9px;
            border-radius: 5px;
            border: 0;
            font-size: 1em;
            margin-right: 5px;
            :focus {
                outline: none;
            }
        }
        @media (max-width: 1800px) {
            max-width: 450px;
            height: 450px;
            top: 20%;
    
        }
        @media (max-width: 456px) {
            max-width: 100%;
            height: 100%;
            top: 17%;
            border: 0;
            h2{
                text-align: center;
                padding: 0px !important;
                color: white;
            }
            .rccs,
            .rccs__card {
                margin: 0 auto;
                
            }
            table{
                margin: 0;
            }
            button{
                margin: 0px 5px 0px 5px;
                padding:5px;
            }
            input{
                margin: 5px auto;
                width: 80%;
                padding: 9px;
                border-radius: 5px;
                border: 0;
                font-size: 1em;
            }
            section{
                padding-left:20px;
                form{
                    text-align: center;
                }
            }
        }
        @media (max-width: 910px) {
            right: 0;
            left: 0;
            margin: 0 auto;
        ${props => props.showForm
    ? `
        display:inline;
        `
    : `
        display:none;
        `}
           
        }
       
`

export const Button = styled.button `
        color: #ffffff;
        cursor:pointer;
        width: auto;
        font-size: 1.2em;
        border: solid #fff 1px;
        border-radius: 5px;
        @media (max-width: 456px) {
            font-size: 1em;
        }
        background: ${props => props.selected
    ? '#50749c'
    : 'transparent'};
        font-weight: 100;
        padding: 5px 15px 5px 15px;        
        right: 40px;
        :focus {
            outline: none;
        }
        ${props => props.center && `
        margin: 0px 15px 0px 15px;
        `}
`

export const nav = styled.div `
    padding-top:18px;
    table{
        margin: 0 auto;
    }
    button{
        padding: 7px;
        margin-right:16px;
        width: 28px;
        font-size: 0.5em;
        border-radius: 50%;
        font-weight: 100;                     
    }
    span{
        color:white;
        display:inline-block;
        font-size:10px;
    }
    li{
        width: 19px;
        display: block;
        height: 0px;
        border: solid 1px #fcfafa;
        position: absolute;
        margin: -6px 0px 0px 19px;
    }
   
    @media (max-width: 456px) {
        li{
            width: 24px;
            margin: -6px 0px 0px 19px;
        }
    }
`
