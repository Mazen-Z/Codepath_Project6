import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ACCESS_KEY = '3539b9add5a94ce3ac88172837958cf2';

const RecipeDetail = () => {
    const params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const callAPI = async () => { 
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=false&apiKey=${ACCESS_KEY}`
            );
            const data = await response.json();
            setFullDetails(data);
            console.log(data); // Logging data fetched from the API
        };

        callAPI().catch(console.error);
    }, [params.id]); // Add params.id to dependency array to re-fetch data when ID changes
    
    return (
        <>
            {fullDetails && (
                <>
                    <h1>{fullDetails.title}</h1>
                    <img src={fullDetails.image} alt={fullDetails.title} />
                    {fullDetails.veryPopular ? (
                        <div>This Dish is Popular</div>
                    ) : (
                        <div>This Dish is not Popular</div>
                    )}
                    {fullDetails.glutenFree ? (
                        <div>This Dish is not gluten Free</div>
                    ) : (
                        <div>This Dish is gluten Free</div>
                    )}
                    <div>Health Score: {fullDetails.healthScore}</div>
                    <div>{fullDetails.summary}</div>
                </>
            )}
        </>
    );
};

export default RecipeDetail;
