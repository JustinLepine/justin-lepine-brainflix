axios
.get('https://project-2-api.herokuapp.com/videos?api_key=e19b596e-2655-4a4f-9242-e96ab392744b')
.then(res => {
    this.setState({
        videoList: res.data
    });
    return api.getVideoId(this.props.params.id || res.data[0].id)
})
.then(res => {
    this.setState({
        selectedVideo: res.data
    });
});

}