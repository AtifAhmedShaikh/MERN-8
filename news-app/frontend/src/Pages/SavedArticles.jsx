import React from 'react'
import BackBar from "../Navbars/BackBar"
import Container from "../Containers/Container"
import SavedArticle from '../Components/Cards/SavedArticle'
const SavedArticles = () => {
  return (
    <React.Fragment>
        <BackBar pageLabel={"saved articles"}/>
        <Container className={"flex flex-col justify-start items-center"}>
            <div className='lg:w-[45%] mt-5'>
                <SavedArticle/>
                <SavedArticle/>
                <SavedArticle/>
                <SavedArticle/>
                <SavedArticle/>
                <SavedArticle/>
                <SavedArticle/>
            </div>
        </Container>
    </React.Fragment>
  )
}

export default SavedArticles