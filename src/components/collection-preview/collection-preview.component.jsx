import React from "react";
import './collection-preview.styles.scss';
import {CollectionItem} from "../collection-item/collection-item-component";

export const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            { items
                .filter( (item, idx) => idx < 4 )
                .map( ({ id, ...otherCollectionPreviewProps }) => (
                    <CollectionItem key={id} {...otherCollectionPreviewProps} />
            )) }
        </div>
    </div>
);