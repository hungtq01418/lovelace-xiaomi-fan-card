class CustomFanCard extends Polymer.Element {

    static get template() {
        return Polymer.html`
            <style>
                hui-generic-entity-row{
                    box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
                    padding: 15px;
                }
                .speed {
                }
                .column {
                    float: left;
                    width: 100%;
                    padding: 10px;
                }
                .row{
                    width: 88%;
                    float: left;
                }
                .row:after {
                    content: "";
                    display: table;
                    clear: both;
                }
                ha-entity-toggle {
                    float: right;
                }

                .round-button {
                    width:30px;
                    float: left;
                    margin-left: 20px;
                }
                .round-button-circle {
                    width: 100%;
                    height:0;
                    padding-bottom: 100%;
                    border-radius: 50%;
                    border:5px solid #cfdcec;
                    overflow:hidden;
                    box-shadow: 0 0 3px gray;
                }
                .round-button button {
                    display:block;
                    float:left;
                    width:100%;
                    padding-top:50%;
                    padding-bottom:50%;
                    line-height:1em;
                    margin-top:-0.5em;
                    
                    text-align:center;
                    font-family:Verdana;
                    font-size:1.2em;
                    font-weight:bold;
                    text-decoration:none;
                    border-width: 0px;

                    background: #cfdcec;
                    color: #03a9f4;
                }
                .round-button button:hover:enabled {
                    background:#3bb9f3;
                    color: #fff;
                    cursor: pointer;
                }
                .round-button button:disabled{
                    background: #03a9f4; 
                    color:#e2eaf3;
                }
                .round-button button.twoCha {
                    font-size: 14px;
                }
                .round-button button.threeCha {
                    font-size: 13px;
                    padding: 15px 0px;
                }
            </style>
  
            <hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
                <div class='horizontal justified layout' on-click="stopPropagation">
                    <div class="row">
                        <div class="column">
                           <div class="speeds">
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            raised noink name="Level 1"
                                            on-click='setSpeed'
                                            disabled='[[_isLoneSpeed]]'>
                                            1
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            raised noink name="Level 2"
                                            on-click='setSpeed'
                                            disabled='[[_isLtwoSpeed]]'>
                                            2
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            raised noink name="Level 3"
                                            on-click='setSpeed'
                                            disabled='[[_isLthreeSpeed]]'>
                                            3
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            raised noink name="Level 4"
                                            on-click='setSpeed'
                                            disabled='[[_isLfourSpeed]]'>
                                            4
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            class="twoCha"
                                            raised noink name="[[_mode]]"
                                            on-click='setMode'>
                                            [[_mode]]
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="oscillates">
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            class="twoCha"
                                            toggles name="30"
                                            on-click='setOscillation'
                                            disabled='[[_is30Angle]]'>
                                            <span class="mdc-button__label">30</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            class="twoCha"
                                            toggles name="60"
                                            on-click='setOscillation'
                                            disabled='[[_is60Angle]]'>
                                            <span class="mdc-button__label">60</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            class="twoCha"
                                            toggles name="90"
                                            on-click='setOscillation'
                                            disabled='[[_is90Angle]]'>
                                            <span class="mdc-button__label">90</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            class="threeCha"
                                            toggles name="120"
                                            on-click='setOscillation'
                                            disabled='[[_is120Angle]]'>
                                            <span class="mdc-button__label">120</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="round-button">
                                    <div class="round-button-circle">
                                        <button
                                            class="threeCha"
                                            on-click='fanOscillating'
                                            <span class="mdc-button__label">[[_textSwitchAngle]]</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ha-entity-toggle hass="[[hass]]" state-obj="[[_stateObj]]"></ha-entity-toggle>
            </hui-generic-entity-row>
        `;
    }

    static get properties() {
        return {
            hass: {
                type: Object,
                observer: 'hassChanged'
            },
            _config: Object,
            _stateObj: Object,
            _isOff: Boolean,
            _isLoneSpeed: Boolean,
            _isLtwoSpeed: Boolean,
            _isLthreeSpeed: Boolean,
            _isLfourSpeed: Boolean,
            _is30Angle: Boolean,
            _is60Angle: Boolean,
            _is90Angle: Boolean,
            _is120Angle: Boolean,
            _textSwitchAngle: String,
            _mode: String
        }
    }

    setConfig(config) {
        this._config = config;
    }

    hassChanged(hass) {

        const config = this._config;
        const stateObj = hass.states[config.entity];

        let speed;
        if (stateObj && stateObj.attributes) {
            speed = stateObj.attributes.speed_level || 'off';
        }
        let angle;
        if (stateObj && stateObj.attributes) {
            angle = stateObj.attributes.angle || 'off';
        }

        let textSwitchAngle ;
        if (stateObj && stateObj.attributes) {
            textSwitchAngle = stateObj.attributes.oscillate ? "Off" : "On";
        }

        let mode;
        if (stateObj && stateObj.attributes) {
            mode = stateObj.attributes.natural_speed === 0 ? "St" : "Na";
        }

        this.setProperties({
            _stateObj: stateObj,
            _isOff: stateObj.state  === 'off',
            _isLoneSpeed: speed === 'Level 1' && stateObj.state === 'on',
            _isLtwoSpeed: speed === 'Level 2' && stateObj.state === 'on',
            _isLthreeSpeed: speed === 'Level 3' && stateObj.state === 'on',
            _isLfourSpeed: speed == 'Level 4' && stateObj.state === 'on',
            _is30Angle: angle == '30' && stateObj.state === 'on' && stateObj.attributes.oscillate,
            _is60Angle: angle == '60' && stateObj.state === 'on' && stateObj.attributes.oscillate,
            _is90Angle: angle == '90' && stateObj.state === 'on' && stateObj.attributes.oscillate,
            _is120Angle: angle == '120' && stateObj.state === 'on' && stateObj.attributes.oscillate,
            _textSwitchAngle: textSwitchAngle,
            _mode: mode
        });
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    setSpeed(e) {
        var vm = this;
        const speed = e.currentTarget.getAttribute('name');

        vm._isLoneSpeed = false;
        vm._isLtwoSpeed = false;
        vm._isLthreeSpeed = false;
        vm._isLfourSpeed = false;
        switch(speed){
            case "Level 1":
                vm._isLoneSpeed = true;
                break;
            case "Level 2":
                vm._isLtwoSpeed = true;
                break;
            case "Level 3":
                vm._isLthreeSpeed = true;
                break;
            case "Level 4":
                vm._isLfourSpeed = true;
                break;
        }

        if(this._isOff){
            vm.setOn();
            setTimeout(function(){
                vm._setSpeed(speed);
            }, 2000);
        }else{
            vm._setSpeed(speed);
        }
    }
    _setSpeed(speed) {
        this.hass.callService('fan', 'set_speed', {
            entity_id: this._config.entity, speed: speed
        });
    }

    setOscillation(e){
        var vm = this;
        const angle = e.currentTarget.getAttribute('name');

        vm._is30Angle = false;
        vm._is60Angle = false;
        vm._is90Angle = false;
        vm._is120Angle = false;
        switch(angle){
            case "30":
                vm._is30Angle = true;
                break;
            case "60":
                vm._is60Angle = true;
                break;
            case "90":
                vm._is90Angle = true;
                break;
            case "120":
                vm._is120Angle = true;
                break;
        }

        if(this._isOff){
            vm.setOn();
            setTimeout(function(){
                vm._setOscillation(angle);
            }, 2000);
        }else{
            vm._setOscillation(angle);
        }
    }
    _setOscillation(angle){
        this.hass.callService('fan', 'xiaomi_miio_set_oscillation_angle', {
            entity_id: this._config.entity, angle: angle
        });
    }

    fanOscillating(e){
        var setOscillate = !this._stateObj.attributes.oscillate;

        this._textSwitchAngle = setOscillate ? "Off" : "On";

        this.hass.callService('fan', 'oscillate', {
            entity_id: this._config.entity, oscillating: setOscillate
        });
    }

    setMode(e){
        var vm = this;
        const mode = e.currentTarget.getAttribute('name');

        if(this._isOff){
            vm.setOn();
            setTimeout(function(){
                vm._setMode(mode);
            }, 2000);
        }else{
            vm._setMode(mode);
        }
    }
    _setMode(mode){
        if(mode === "St"){
            this.hass.callService('fan', 'xiaomi_miio_set_natural_mode_on', {
                entity_id: this._config.entity
            });
        }else{
            this.hass.callService('fan', 'xiaomi_miio_set_natural_mode_off', {
                entity_id: this._config.entity
            });
        }
    }
    setOn(){
        this.hass.callService('fan', 'turn_on', {
            entity_id: this._config.entity
        });
    }
}

customElements.define('custom-fan-card', CustomFanCard);