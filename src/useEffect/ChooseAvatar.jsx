import React, { useEffect, useState } from 'react';

const ChooseAvatar = () => {

    const [avatar, setAvatar] = useState();

    useEffect(() => {

        // Clean function
        return () => {
            // avatar && URL.revokeObjectURL(avatar.preview);
            if (avatar) {
                URL.revokeObjectURL(avatar.preview);
            }
        }
    })

    const handleChoose = (e) => {
        const file = e.target.files[0];
        console.log(file); // Object

        // File là 1 object nên có thể tùy ý thêm một properties
        file.preview = URL.createObjectURL(file);

        setAvatar(file);

    }
    return (
        <div>
            <input type="file" onChange={handleChoose} />

            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    );
};

export default ChooseAvatar;