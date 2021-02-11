import React from 'react'

export const Button = (props) => {
    return (
        <article className=" d-flex ma5 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 " >
            <main>
                <div>
                    <button type="button" className="btn btn-primary btn-lg ma4">Sign_up to drive</button>
                    <button type="button" className="btn btn-primary btn-lg ma4">Sign_up to ride</button>

                </div>
            </main>
        </article>

    ) 
}
export default Button;