import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from '../../assets/img/preloader.gif'


function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()
    // useSelector, useDispatch
    // const loading = false

    const setLoading = () => {

        dispatch(loadingAC(true))
       setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader} alt={'loading ...'} style={{
                            width: '42px',
                            height: '42px'
                        }}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
