new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
                  {
            name: "Adangaatha Asuran ",
            artist: " A.R.Rahman, Dhanush",
            cover: "https://c.saavncdn.com/275/Raayan-Tamil-2024-20240706124553-500x500.jpg",
            source: "https://audio.jukehost.co.uk/ACzmYQjlxVkwRkBmM2oSiTVukHcMumMi",
            url: "#",
            favorited: false
          },
          {
            name: " Theme Of Kalki",
            artist: "Santhosh Narayanan, Ananthu, Gowtham Bharadwaj",
            cover: "https://c.saavncdn.com/889/Kalki-2898-Ad-Tamil-Tamil-2024-20240719093754-500x500.jpg",
            source: "https://audio.jukehost.co.uk/uVwWb2jpzRQCPjxzuhVrDNgUkjaPU49x",
            url: "#",
            favorited: false
          },
          {
            name: "Whistle Podu ",
            artist: " Yuvan Shankar Raja, Vijay, Venkat Prabhu, Premgi AmarenBlackPink",
            cover: "https://c.saavncdn.com/874/Whistle-Podu-From-The-Greatest-Of-All-Time-Tamil-2024-20240416201003-500x500.jpg",
            source: "https://audio.jukehost.co.uk/CjQoIcHY5aaNWU3z6M1ZdrKPapNNkrCw",
            url: "https://www.youtube.com/watch?v=IHNzOHi8sJs&ab_channel=BLACKPINK",
            favorited: true
          },
  
          {
            name: "Play Date",
            artist: "BlackPink",
            cover: "https://c.saavncdn.com/352/Cry-Baby-Deluxe-English-2015-500x500.jpg",
            source: "https://audio.jukehost.co.uk/Dt77F2LSdCnkU8Pdiu1xW1tzy1Cm0eii",
            url: "#",
            favorited: false
          },
  
          {
            name: "Soodaana",
            artist: "Shreya Ghoshal, Devi Sri Prasad, Viveka",
            cover: "https://c.saavncdn.com/603/Soodaana-From-Pushpa-2-The-Rule-Tamil-2024-20240528221008-500x500.jpg",
            source: "https://audio.jukehost.co.uk/bdj4DzlBSzLPF4D8rX26B2HvCViNV0AM",
            url: "#",
            favorited: false
          },
          {
            name: "Kadharalz",
            artist: "Anirudh Ravichander",
            cover: "https://c.saavncdn.com/736/Indian-2-Original-Motion-Picture-Soundtrack-Tamil-2024-20240611104646-500x500.jpg",
            source: "https://audio.jukehost.co.uk/Hs61fig6yn0Zko2jgrM6d8uiJjVKw5Em",
            url: "#",
            favorited: true
          },
          {
            name: "Aasa Kooda",
            artist: "Sai Abhyankkar, Sai Smriti",
            cover: "https://c.saavncdn.com/772/Aasa-Kooda-from-Think-Indie-Tamil-2024-20240613052402-500x500.jpg",
            source: "https://audio.jukehost.co.uk/JzySixBnysIWMH8G240OxjLmXu0Kh1Qv",
            url: "#",
            favorited: false
          },
          {
            name: "Kanguva Glimpse ",
            artist: "Madhan Karky, Devi Sri Prasad, Arunraja Kamaraj",
            cover: "https://c.saavncdn.com/805/Kanguva-Glimpse-From-Kanguva-Tamil-Tamil-2024-20240427063451-500x500.jpg",
            source: "https://audio.jukehost.co.uk/f8ApMo0QhhTeOZjJoWiH55QcD5qixdHs",
            url: "#",
            favorited: true
          },
          {
            name: "DNA",
            artist: "BTS",
            cover: "https://iili.io/H1hGCAb.jpg",
            source: "https://audio.jukehost.co.uk/hhWaUJpcCrCCPi1S2wWup9uL1uVNjvOb",
            url: "https://www.youtube.com/watch?v=MBdVXkSdhwU&ab_channel=HYBELABELS",
            favorited: false
          },
          {
            name: "Butter",
            artist: "BTS",
            cover: "https://iili.io/H1hGBHu.jpg",
            source: "https://audio.jukehost.co.uk/X2kcaQZROQIikDD5P65ZetiaqdrZNX77",
            url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
            favorited: false
          }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
  