import React, {Component} from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <p>Trang web được viết bằng 
                    <a href="https://facebook.github.io/react/">ReactJS</a>
                    <br/>
                    <a href="https://www.facebook.com/vanphoUEL">Lập trình viên: Nguyễn Văn Phố</a>
                    <br/>
                Server được xây dựng bằng NodeJS API lấy từ web
                    <a href="http://openweathermap.org">openweathermap.org</a>
                </p>
            </div>
        );
    }
}

module.exports = About;
