import React from 'react'
import ChooseProfilePage from '../ChooseProfile/ChooseProfilePage/ChooseProfilePage'
import MacthListPage from '../MatchListPage/MacthListPage'
import { MainCardContainer } from './StyleMainCard'


export default function MainCard() {
    return (
        <MainCardContainer>
            {/* <ChooseProfilePage/>   */}
            <MacthListPage/> 
              
        </MainCardContainer>
    )
}
