import React from 'react'

const MostraAno = () => {
    const date = new Date();
    const ano = date.getFullYear();
    return ano;
}

const Footer = () => {
    const year = MostraAno();
    return (
        <>
            <div className='text-center bg-info p-4'>
                <footer>
                    <p className='fs-1'>&copy; {year} PAPOTALK<sup>&reg;</sup>, todos os direitos reservados.</p>
                </footer>
            </div>
        </>
    )
}

export default Footer