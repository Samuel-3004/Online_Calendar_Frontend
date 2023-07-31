import styled from "styled-components";

export const StyledDashboard = styled.div`
    position: relative;
    width: 100%;

       header{
            border-bottom: 1px solid var(--color-grey-3);

        .container-header{
            
            width: 100%;
            max-width: 780px;
            margin: 0 auto;
           display: flex;
           align-items: center;
           justify-content: space-between;
           height: 70px;
           padding: 0px 10px;


           h1{
               font-size: 18px;
               font-weight: bolder;
               color: var(--color-primary);
           }
    
           p{
               width: 79px;
               height: 32px;
               display: flex;
               align-items: center;
               justify-content: center;
               border-radius: var(--border-radius);
               background-color: var(--color-grey-3);
               font-size: 12px;
               color: var(--color-grey-0);
               cursor: pointer;

               :hover{
                background-color: var(--color-grey-2);
                color: var(--color-grey-0);
            }
           }
        }
       } 


        main{

           .information-dashboard{
               
            border-bottom: 1px solid var(--color-grey-3);

               .container-main{
                        padding: 30px  10px;
                        width: 100%;
                        max-width: 780px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 10px;
                        height: 131px;
                        align-items: center;
                        



                        h2{
                            color: var(--color-grey-0);
                            font-size: var(--font-title-1);
                        }
        
                        p{
                            color: var(--color-grey-1);
                            font-size: var(--font-headline);
                        }
                    }
   
            }

            .information-maintenance{
                display: none;
                padding: 30px  10px;
                flex-direction: column;
                justify-content: center;
                gap: 10px;
                
                h2{
                       color: var(--color-grey-0);
                       font-size: var(--font-title-1);
                   }
   
                   p{
                       color: var(--color-grey-1);
                       font-size: var(--font-headline);
                   }
            }
   
        }
    @media (min-width: 426px){
        header{
            justify-content: space-between;
        }

        main{
            display: flex;
            flex-direction: column;
            gap: 50px;

            .information-dashboard{
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
            }
    
            .information-maintenance{
                display: flex;
                align-items: baseline;
                gap: 20px;
                padding: 0px 30%;
            }
        }
    }

`