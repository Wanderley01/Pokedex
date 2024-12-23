import axios from 'axios';
import '../css/pesq.css';

function Pesquisa() {

    return(
        <>
            <div className='Bar'>
                <div className='pesq'>
                    <input 
                    type="text" 
                    placeholder='Nome do Pokemon'
                    
                    />
                </div>

                <div className='btn'>   
                    <button>
                        Buscar
                    </button>
                </div>
            </div>
        </>
    );
};

export default Pesquisa;