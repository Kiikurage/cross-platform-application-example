package com.kiikurage.crossplatformtodo.common

expect fun platformName(): String

fun createApplicationScreenMessage() : String {
    return "Hello Kotlin-Native on ${platformName()}!"
}
