import { useState } from "react";

const App1 = () => {
    console.log('Works')
    return (
        <>
            <div className="container-app1">
                <div className="input_data">
                    <form action="/upload" method="post" enctype="multipart/form-data">
                        <label for="image">Select an image:</label>
                        <input type="file" name="image" id="image" accept="image/*" required /><br /><br />
                        <input type="submit" value="Upload" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default App1;