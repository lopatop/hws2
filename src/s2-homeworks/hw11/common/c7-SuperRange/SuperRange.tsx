import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
            width: 150,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#FFFF',
                    border: '1px solid #00CC22',
                    '&::before': {
                        top: '50%',
                        left: '50%',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
