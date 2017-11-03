import styled from 'styled-components'

export const HeaderTitle = styled.div `
    padding-top: 130px;
    img{
        width: 64px;
        display: inline-block;
        padding: 9px 25px 13px 0px;       
    }

   div{
    display: inline-block;
    h1{
        margin:0;
        font-size: 50px;
        font-weight: 100;
        text-align: left;
        color: #ffffff;
    }
    p{
        margin:0;
        font-size: 20px;
        font-weight: 100;
        text-align: left;
        color: #ffffff;
    }

   }

   @media (max-width: 992px) {
        img{
            width: 48px;         
            padding: 0px 15px 0px 0px;
        }
        div{ 
            h1{
                font-size: 30px;
            }
        }
    }


    @media (max-width: 570px) {
        padding-top:50px;
      img{
          width:30px;
          padding: 0 8px 0px 0px;
      }
     div{
        h1{
            font-size: 18px;
            text-align:left;
        }
        p{
            font-size:12px;
            text-align:left;
        }
     }
      
       }
    }



`

export const Button = styled.button `
            color: #ffffff;
            cursor:pointer;
            width: auto;
            font-size: 1.2em;
            border: solid #fff 1px;
            border-radius: 5px;
            background: transparent;
            font-weight: 100;
            padding: 5px 15px 5px 15px;
            position: absolute;
            right: 100px;
            @media(max-width:320px){
                right: 75px;
                
            }
            ${props => props.top
    ? `
                top: 50px;
                        `
    : `bottom: 50px;
            @media (max-width: 921px) {
                top: 50px;
                left:98px;
                bottom: auto;
                right:auto;
            }
            @media(max-width:320px){
                left: 67px;
            }
            @media(max-width:570px){
                margin: unset !important;
            }
            `}

    a{
        text-decoration: none;
        color: white;
    }

    @media(max-width:570px){
        font-size: 12px;
        padding: 5px 10px 5px 10px;
        position: relative;
        margin-left: 58px ;
        border-radius: 3px;
        top: 10px;
        left: unset;
        display: inline-block;
        right: unset;
    }
            
`

export const Oval = styled.div `
        width: 100%;
        max-width: 663px;
        height: 350px;
        margin: 0 auto;
        bottom: 0;
        left: 0;
        right: 0;
        border: solid 2px rgb(255,255,255);
        border-top-left-radius: 332px;
        border-top-right-radius: 332px;
        border-bottom: 0;
        position: absolute;
        h6{
            font-size: 27px;
            font-weight: 100;
            text-align: center;
            color: #ffffff;
            margin: 0 auto;
            width: auto;
            padding-top: 132px;
        }
        img{
            max-width: 50px;
            cursor:pointer;
        }
        p{
            padding: 70px 56px 10px 56px;
            margin: 0;
            font-size: 14px;
            font-weight: 100;
            text-align: center;
            color: #ffffff;
        }
        @media (max-width: 570px) {
            
           h6{
            font-size: 20px;
            padding-top: 105px;
           }
           p{
            padding:30px 56px 10px 56px;
           }
        }
        @media (max-width: 442px) {            
            height: 170px;
            border: solid 2px rgb(255,255,255);
            max-width: 300px;
            border-top-left-radius: 150px;
            border-top-right-radius: 150px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-width: 0;
            bottom: 0;
            margin: 0 auto;
            h6{ 
                
                max-width: 250px;
                padding-bottom: 11px;
                font-size: 13px;
                padding-top: 60px;
            }

            img{
                max-width: 30px;
            }
          
           p{
            padding:2px 11px 4px 11px;
            font-size: 13px;
           }
        }
`

export const SocialMedia = styled.div `
        bottom: 0;
        width: auto;
        position: absolute;
        padding: 20px;
        left: 0;
        img{            
            padding-right: 12px;
            max-height: 18px;
            width: 18px;
            cursor:pointer;
        }

        @media (max-width: 570px) {
            right:0;
            top:0;
            left: unset;
            bottom:unset;
            .tw{
                display:none;
            }
        }

`