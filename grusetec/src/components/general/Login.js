import React from 'react'

const Login = () => {
    return (

        <div uk-height-viewport className="uk-flex uk-flex-middle login-height" >
            <div className="uk-width-2-3@m uk-width-1-2@s m-auto rounded">
                <div className="uk-child-width-1-2@m uk-grid-collapse bg-gradient-grey uk-grid">
    

                    <div className="uk-margin-auto-vertical uk-text-center uk-animation-scale-up p-3 uk-light">
                        <i className=" uil-graduation-hat icon-large"></i>
                        <h3 className="mb-4"> Grusetec</h3>
                        <p>El lugar donde nunca dejaras de aprender. </p>
                    </div>
    

                    <div className="uk-card-default p-5 rounded">
                        <div className="mb-4 uk-text-center">
                            <h3 className="mb-0"> Bienvenido a GrusLMS</h3>
                            <p className="my-2">Ingrese sus datos para iniciar sesión</p>
                        </div>
                        <form>
    
                            <div className="uk-form-group">
                                <label className="uk-form-label"> Usuario</label>
    
                                <div className="uk-position-relative w-100">
                                    <span className="uk-form-icon">
                                        <i className="icon-feather-mail"></i>
                                    </span>
                                    <input className="uk-input" type="email" placeholder="Ingrese un Usuario"/>
                                </div>
    
                            </div>
    
                            <div className="uk-form-group">
                                <label className="uk-form-label"> Contraseña </label>
    
                                <div className="uk-position-relative w-100">
                                    <span className="uk-form-icon">
                                        <i className="icon-feather-lock"></i>
                                    </span>
                                    <input className="uk-input" type="password" placeholder="********"/>
                                </div>
    
                            </div>
    
                            <div className="mt-4  uk-flex-center uk-grid-small uk-grid" >
                                <div className="uk-width-auto@s ">
                                    <button type="submit" className="btn btn-default">Iniciar Sesión</button>
                                </div>
                            </div>
    
                        </form>
                    </div>
    
                </div>
            </div>
        </div>
    
    )
}

export default Login
