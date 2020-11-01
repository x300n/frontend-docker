import React from 'react'

import ExerciseAmIRunning from './ExerciseAmIRunning'
import ExerciseBackendConnection from './ExerciseBackendConnection'
import ExerciseNginxSetup from './ExerciseNginxSetup'
import ExerciseRedisSetup from './ExerciseRedisSetup'
import ExerciseDBConnection from './ExerciseDBConnection'

const ExerciseList = () => (
    <div style={{ paddingTop: '1em' }}>
        <ExerciseAmIRunning exerciseNumber="5.1" />
        <hr />
        <ExerciseBackendConnection exerciseNumber="5.2" />
        <hr />
        <ExerciseRedisSetup exerciseNumber="5.3" />
        <hr />
        <ExerciseDBConnection exerciseNumber="5.4" />
        <hr />
        <ExerciseNginxSetup exerciseNumber="5.5" />
        <hr />
    </div>
)

export default ExerciseList
