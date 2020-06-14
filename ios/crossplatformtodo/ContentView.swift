//
//  ContentView.swift
//  crossplatformtodo
//
//  Created by Kikurage on 2020/06/14.
//  Copyright © 2020 Kikurage. All rights reserved.
//

import SwiftUI
import common

struct ContentView: View {
    var body: some View {
        Text(CommonKt.createApplicationScreenMessage())
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
