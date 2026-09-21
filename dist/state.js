export function next(state,scenes){const s=scenes[state.scene];return state.step<s.steps-1?{...state,step:state.step+1}:state.scene<scenes.length-1?{...state,scene:state.scene+1,step:0}:state;}
export function prev(state,scenes){return state.step>0?{...state,step:state.step-1}:state.scene>0?{...state,scene:state.scene-1,step:scenes[state.scene-1].steps-1}:state;}
export function jump(state,scene,scenes,full=false){const i=Math.max(0,Math.min(scenes.length-1,Math.trunc(Number(scene)||0)));return {...state,scene:i,step:full?scenes[i].steps-1:0};}
export function fromHash(hash,scenes){const m=hash.match(/^#(?:s)?(\d+)(?:\/(\d+))?$/);const scene=m?Math.max(0,Math.min(scenes.length-1,Number(m[1])-1)):0;const step=Math.max(0,Math.min(scenes[scene].steps-1,Number(m?.[2])||0));return {scene,step};}
export function elapsed(timer,now=Date.now()){return timer.elapsed+(timer.running?Math.max(0,now-timer.startedAt):0);}
export function toggleTimer(timer,now=Date.now()){return timer.running?{elapsed:elapsed(timer,now),startedAt:now,running:false}:{...timer,startedAt:now,running:true};}
export function acceptsMessage(message,session,own){return !!message&&message.session===session&&message.sender!==own&&['request','state','action'].includes(message.type);}
