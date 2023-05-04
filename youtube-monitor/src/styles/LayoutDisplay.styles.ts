import { css } from '@emotion/react'
import { Constants } from '../lib/constants'

export const roomLayout = css`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: ${Constants.screenHeight - Constants.messageBarHeight}px;
    box-sizing: border-box;
    margin: auto;
    /* border: solid 6px #303030; */
    background-size: contain;
`

export const seat = css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-origin: top left;
    font-family: ${Constants.seatFontFamily};
`

export const partition = css`
    position: absolute;
    background-color: #2d2b41;
`

export const seatId = css`
    margin: 0;
    position: relative;
    top: 0;
    left: 0;
    color: #414141;
`
export const seatIdContainerMember = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 1.7rem;
    height: 1rem;
    border-right: solid black 0.06rem;
    border-bottom: solid black 0.06rem;
    border-bottom-right-radius: 0.4rem;
`
export const seatIdMember = css`
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #414141;
`

export const emptySeatNum = css`
    margin: 0;
    color: #414141;
`
export const usedSeatNum = css``

export const workName = css`
    margin: 0;
    color: #24317e;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bolder;
`
export const workNameMember = css`
    text-overflow: ellipsis;
    word-wrap: break-word;
    line-height: 1.1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    position: absolute;
    bottom: 42%;
    left: 22%;
    text-align: center;
    min-width: 3rem;
    max-width: 4.5rem;
    max-height: 1.4rem;
    margin-left: 0.5rem;
    padding: 0.1rem 0.2rem;
    border: 0.05rem solid #000000;
    border-radius: 0.3rem;
    background-color: #fff;
    color: #24317e;
    font-weight: bolder;

    &::before,
    &::after {
        position: absolute;
        bottom: 20%;
        left: -0.5rem;
        width: 0.5rem;
        height: 0.4rem;
        clip-path: polygon(0 50%, 100% 0, 100% 100%);
        content: '';
    }
    &::before {
        background-color: #000000;
    }
    &::after {
        left: -0.35rem;
        background-color: #ffffff;
    }
`

export const userDisplayName = css`
    margin: 0;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #202020;
`

export const userDisplayNameMember = css`
    position: absolute;
    margin: 0;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #202020;
    right: 0;
    bottom: 17%;
    text-align: center;
`

export const breakBadge = css`
    color: black;
    background-color: #5af87fe7;
    z-index: ${Constants.breakBadgeZIndex};
    position: absolute;
    font-weight: bold;
    border: solid;
`

export const starsBadge = css`
    color: black;
    position: absolute;
    top: 0;
    right: 0;
    overflow-wrap: anywhere;
`

export const profileImageMemberWithWorkName = css`
    margin: 0;
    position: absolute;
    top: 30%;
    left: 15%;
    width: 1.2rem;
    height: 1.2rem;
    transform: translate(-50%, 0);
    border-radius: 50%;
`
export const profileImageMemberNoWorkName = css`
    margin: 0;
    position: absolute;
    top: 8%;
    left: 50%;
    width: 1.9rem;
    height: 1.9rem;
    transform: translate(-50%, 0);
    border-radius: 50%;
`

export const timeElapsed = css`
    color: #000;
    position: absolute;
    bottom: 1%;
    left: 2%;
`

export const timeRemaining = css`
    color: black;
    position: absolute;
    bottom: 1%;
    right: 2%;
`
