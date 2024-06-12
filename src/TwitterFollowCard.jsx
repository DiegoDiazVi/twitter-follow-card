import { useState } from "react";
export const TwitterFollowCard = ({ userName, name, initialIsFollowing}) => {

    const [isFollow, setIsFollow] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollow(!isFollow);
    }

    const text = isFollow ? 'Siguiendo' : 'Seguir';
    const imageSrc = `https://unavatar.io/${userName}`
    const buttonClass = isFollow ? 'tw-follow-card-button tw-follow-card-button-following' : 'tw-follow-card-button';

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-image' src={imageSrc} alt="Profile Avatar" />
                <div className='tw-follow-card-text'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-user'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className='tw-follow-card-follow-text'>{text}</span>
                    <span className='tw-follow-card-stop-follow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
