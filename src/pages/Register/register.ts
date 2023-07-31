import styled from "styled-components";

export const StyledRegister = styled.main`
    max-width: 296px;
    padding-top: 30px;
    margin: 0 auto;
    color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 19px;
    width: 100%;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 296px;

        h1{
            font-size: 18px;
            font-weight: bolder;
            color: var(--color-primary);
        }

        a{
            text-decoration: none;

                p{
                width: 79px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--border-radius);
                background-color: var(--color-grey-3);
                font-size: 12px;
                color: #ffff;
                }
        }

        
    }

        
    
    nav{
        display: flex;
        flex-direction: column;
        gap: 18px;
        background-color: var(--color-grey-3);
        border-radius: var(--border-radius);
        width: 296px;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
        margin-bottom: 50px;

        h3{
            font-size: 14px;
            font-weight: bold;
            color: var(--color-grey-0);
            margin: 0 auto;
        }

        p{
            font-size: 12px;
            margin: 0 auto;
            color: var(--color-grey-1);
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 18px;
            width: 264px;

            section{
                display: flex;
                flex-direction: column;
                display: flex;
                flex-direction: column;
                gap: 8px;

                    label{
                        font-size: 12px;
                    }


                    input{
                        height: 38px;
                        border-radius: var(--border-radius);
                        color: var(--color-grey-0);
                        background-color: var(--color-grey-2);
                        border: none;
                        padding-left: 20px;
                        outline: none;
                    }
            }

            section{


                select{
                    height: 38px;
                    border-radius: var(--border-radius);
                    color: var(--color-grey-0);
                    background-color: var(--color-grey-2);
                    border: none;
                    padding-left: 20px;
                    outline: none;


                    option{
                        color: var(--color-grey-0);
                    }
                }
            }

            button{
                height: 38px;
                border-radius: var(--border-radius);
                border: none;
                background-color: var(--color-primary-negative);
                color: var(--color-grey-0);
                width: 100%;
            }

        }

        
            
        
    }
`