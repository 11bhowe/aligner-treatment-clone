"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [377],
  {
    8741: function (e, t, n) {
      let l, o, i, r;
      n.d(t, {
        AL: function () {
          return te;
        },
        GN: function () {
          return h1;
        },
        KG: function () {
          return hX;
        },
        Qy: function () {
          return eH;
        },
        V0: function () {
          return h2;
        },
        hw: function () {
          return h0;
        },
        ks: function () {
          return eB;
        },
        m_: function () {
          return ef;
        },
        w3: function () {
          return tt;
        },
        wO: function () {
          return eu;
        },
      });
      var s,
        a,
        c,
        d,
        u,
        h,
        f,
        m,
        p,
        g,
        v,
        A,
        w,
        x,
        y,
        E,
        C,
        b,
        T,
        $,
        I,
        O,
        M,
        D,
        k,
        L,
        N,
        R,
        S,
        B,
        P,
        U,
        j,
        z,
        H,
        G,
        V,
        Z,
        F = n(4081),
        J = n(2567),
        Y = n(2881),
        K = n(9403),
        W = n(1180),
        q = n(5367),
        Q = n(1196);
      console.log("Simulator Version:", "0.0.0-3bf37bb30c");
      let X = "assets",
        _ =
          "app" ===
          ("undefined" != typeof __BUILD_PLATFORM__
            ? __BUILD_PLATFORM__
            : "web"),
        ee =
          "development" ===
          ("undefined" != typeof __BUILD_MODE__
            ? __BUILD_MODE__
            : "production"),
        et = ("undefined" != typeof window && window.devicePixelRatio) || 1,
        { ua: en, os: el } = (0, F.Qc)(
          ("undefined" != typeof navigator && navigator.userAgent) || "",
        ),
        eo = /^Mac/.test(el),
        ei = /^iOS/.test(el),
        er = /^Android/.test(el),
        es = /html5plus|mobile/i.test(en) || er || ei,
        ea =
          ("undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase()) ||
          "",
        ec = ea.includes("samsung") || ea.includes("sm-"),
        ed = ea.includes("pixel");
      var eu =
          (((s = eu || {})[(s.NONE = 0)] = "NONE"),
          (s[(s.SINGLE = 1)] = "SINGLE"),
          (s[(s.OCCLUSAL = 2)] = "OCCLUSAL"),
          (s[(s.DUAL = 3)] = "DUAL"),
          (s[(s.DUAL_HIS = 4)] = "DUAL_HIS"),
          (s[(s.MULTI = 5)] = "MULTI"),
          (s[(s.SECTION = 6)] = "SECTION"),
          (s[(s.DayNight = 11)] = "DayNight"),
          s),
        eh =
          (((a = eh || {})[(a.MAIN = 1)] = "MAIN"),
          (a[(a.OCCLUSAL = 2)] = "OCCLUSAL"),
          (a[(a.DUAL = 3)] = "DUAL"),
          (a[(a.DUAL_HIS = 4)] = "DUAL_HIS"),
          (a[(a.MULTI_RIGHT = 5)] = "MULTI_RIGHT"),
          (a[(a.MULTI_FRONT = 6)] = "MULTI_FRONT"),
          (a[(a.MULTI_LEFT = 7)] = "MULTI_LEFT"),
          a),
        ef =
          (((c = ef || {})[(c.INVALID = -2)] = "INVALID"),
          (c[(c.NONE = -1)] = "NONE"),
          (c[(c.UPPER_OCCL = 0)] = "UPPER_OCCL"),
          (c[(c.FULL_FRONT = 1)] = "FULL_FRONT"),
          (c[(c.FULL_RIGHT = 2)] = "FULL_RIGHT"),
          (c[(c.FULL_UP45 = 3)] = "FULL_UP45"),
          (c[(c.FULL_LEFT = 4)] = "FULL_LEFT"),
          (c[(c.FULL_BACK = 5)] = "FULL_BACK"),
          (c[(c.LOWER_OCCL = 6)] = "LOWER_OCCL"),
          c),
        em =
          (((d = em || {})[(d.OVERLYING = 0)] = "OVERLYING"),
          (d[(d.FDI = 1)] = "FDI"),
          (d[(d.ATTACHMENT = 2)] = "ATTACHMENT"),
          (d[(d.GRID = 3)] = "GRID"),
          (d[(d.IPR = 4)] = "IPR"),
          (d[(d.DISTANCE = 5)] = "DISTANCE"),
          (d[(d.MEASURE = 5)] = "MEASURE"),
          (d[(d.CONTACT = 6)] = "CONTACT"),
          (d[(d.SECTION = 7)] = "SECTION"),
          (d[(d.VIEW = 8)] = "VIEW"),
          (d[(d.TOOTH_ROOT = 10)] = "TOOTH_ROOT"),
          (d[(d.JAWBONE = 11)] = "JAWBONE"),
          (d[(d.BONE_COLLISION = 12)] = "BONE_COLLISION"),
          (d[(d.BRACES = 13)] = "BRACES"),
          (d[(d.OCCL_SECTION = 14)] = "OCCL_SECTION"),
          (d[(d.BONE_SECTION = 15)] = "BONE_SECTION"),
          (d[(d.RSC = 16)] = "RSC"),
          (d[(d.TMA = 17)] = "TMA"),
          (d[(d.PA = 18)] = "PA"),
          (d[(d.BITE_JUMP = 19)] = "BITE_JUMP"),
          (d[(d.SIM_GUM = 20)] = "SIM_GUM"),
          d),
        ep =
          (((u = ep || {})[(u.NONE = 0)] = "NONE"),
          (u[(u.LEFT = 1)] = "LEFT"),
          (u[(u.RIGHT = 2)] = "RIGHT"),
          (u[(u.MIDDLE = 4)] = "MIDDLE"),
          u),
        eg =
          (((h = eg || {})[(h.UNDO = 1)] = "UNDO"),
          (h[(h.REDO = 2)] = "REDO"),
          (h[(h.RESET = 3)] = "RESET"),
          (h[(h.SU = 4)] = "SU"),
          h),
        ev =
          (((f = ev || {})[(f.AUTO = 0)] = "AUTO"),
          (f[(f.KEEP = 1)] = "KEEP"),
          (f[(f.NO_IPR = 2)] = "NO_IPR"),
          (f[(f.NO_GAP = 3)] = "NO_GAP"),
          f),
        eA =
          (((m = eA || {})[(m.Rotation_Distal = 0)] = "Rotation_Distal"),
          (m[(m.Extrusion = 1)] = "Extrusion"),
          (m[(m.Vertical_Rect = 2)] = "Vertical_Rect"),
          (m[(m.Horizontal_Rect = 3)] = "Horizontal_Rect"),
          (m[(m.Ellipse_Horizontal = 4)] = "Ellipse_Horizontal"),
          (m[(m.Ellipse_Vertical = 5)] = "Ellipse_Vertical"),
          (m[(m.Retention = 6)] = "Retention"),
          (m[(m.Retention_Kid = 7)] = "Retention_Kid"),
          (m[(m.Cut_Mesial = 8)] = "Cut_Mesial"),
          (m[(m.Cut_Distal = 9)] = "Cut_Distal"),
          (m[(m.Cut_Arch = 10)] = "Cut_Arch"),
          (m[(m.Button_Hook = 11)] = "Button_Hook"),
          m),
        ew =
          (((p = ew || {})[(p.NONE = 0)] = "NONE"),
          (p[(p.TOOTH = 1)] = "TOOTH"),
          (p[(p.ARCH = 2)] = "ARCH"),
          (p[(p.TOOTH_SETTING = 4)] = "TOOTH_SETTING"),
          (p[(p.IPR = 8)] = "IPR"),
          (p[(p.MOVE_ARCH = 16)] = "MOVE_ARCH"),
          (p[(p.ATTACHMENT = 32)] = "ATTACHMENT"),
          p),
        ex =
          (((g = ex || {})[(g.TARGET = 1)] = "TARGET"),
          (g[(g.ATTACHMENT = 32)] = "ATTACHMENT"),
          (g[(g.OCCL_PLANE = 64)] = "OCCL_PLANE"),
          (g[(g.ALL = 255)] = "ALL"),
          g),
        ey =
          (((v = ey || {})[(v.MOVE_Z = 0)] = "MOVE_Z"),
          (v[(v.MOVE_Y = 1)] = "MOVE_Y"),
          (v[(v.MOVE_X = 2)] = "MOVE_X"),
          (v[(v.ROTATE_Z = 3)] = "ROTATE_Z"),
          (v[(v.ROTATE_ZMESIAL = 4)] = "ROTATE_ZMESIAL"),
          (v[(v.ROTATE_ZDISTAL = 5)] = "ROTATE_ZDISTAL"),
          (v[(v.ROTATE_Y = 6)] = "ROTATE_Y"),
          (v[(v.ROTATE_X = 7)] = "ROTATE_X"),
          (v[(v.ROTATE_NEGX = 8)] = "ROTATE_NEGX"),
          (v[(v.MOVE_ROTATE = 9)] = "MOVE_ROTATE"),
          v),
        eE =
          (((A = eE || {})[(A.TOOTHSELECTED = -1)] = "TOOTHSELECTED"),
          (A[(A.MENU = 0)] = "MENU"),
          (A[(A.MOD_LOCATION = 2)] = "MOD_LOCATION"),
          (A[(A.MOD_HIS_SU_STATUS = 3)] = "MOD_HIS_SU_STATUS"),
          (A[(A.MOD_AUTO_COMMENT = 5)] = "MOD_AUTO_COMMENT"),
          (A[(A.TOGGLE_ENABLED = 6)] = "TOGGLE_ENABLED"),
          (A[(A.TOGGLE_ACTIVE = 7)] = "TOGGLE_ACTIVE"),
          (A[(A.MOD_ACTIVE_TOOL = 8)] = "MOD_ACTIVE_TOOL"),
          (A[(A.ANGEL_BUTTON_INVALID_TIPS = 9)] = "ANGEL_BUTTON_INVALID_TIPS"),
          (A[(A.CURSOR_POINTER = 10)] = "CURSOR_POINTER"),
          (A[(A.UPPER_JAW_SELECTED = 11)] = "UPPER_JAW_SELECTED"),
          (A[(A.LOWER_JAW_SELECTED = 12)] = "LOWER_JAW_SELECTED"),
          (A[(A.MODIFY_SCHEME_PARAMS = 13)] = "MODIFY_SCHEME_PARAMS"),
          (A[(A.MODIFY_ATTACH_PICKED = 14)] = "MODIFY_ATTACH_PICKED"),
          (A[(A.MESSAGE_TIPS = 15)] = "MESSAGE_TIPS"),
          (A[(A.ANGEL_BUTTON_READY_STATUS = 16)] = "ANGEL_BUTTON_READY_STATUS"),
          (A[(A.SHOW_MESSAGES = 16)] = "SHOW_MESSAGES"),
          (A[(A.HIDE_MESSAGES = 17)] = "HIDE_MESSAGES"),
          (A[(A.REQUEST_RENDER_FRAME = 18)] = "REQUEST_RENDER_FRAME"),
          A),
        eC =
          (((w = eC || {})[(w.DEFAULT = 0)] = "DEFAULT"),
          (w[(w.RATIO = 1)] = "RATIO"),
          (w[(w.REMOVE = 2)] = "REMOVE"),
          (w[(w.NOT_NEED_CONFIRM = 3)] = "NOT_NEED_CONFIRM"),
          (w[(w.NEED_CONFIRM = 4)] = "NEED_CONFIRM"),
          w),
        eb =
          (((x = eb || {})[(x.crown = 0)] = "crown"),
          (x[(x.center = 1)] = "center"),
          (x[(x.tip = 2)] = "tip"),
          x),
        eT =
          (((y = eT || {})[(y.NONE = 0)] = "NONE"),
          (y[(y.IRS_I = 1)] = "IRS_I"),
          (y[(y.IRS_II = 2)] = "IRS_II"),
          (y[(y.VIRTUAL_ROOT = 3)] = "VIRTUAL_ROOT"),
          y),
        e$ =
          (((E = e$ || {})[(E.ROOT = 0)] = "ROOT"),
          (E[(E.JAW_OR_CORTICAL_BONE = 1)] = "JAW_OR_CORTICAL_BONE"),
          (E[(E.CANCELLOUS_BONE = 2)] = "CANCELLOUS_BONE"),
          (E[(E.MAXILLARY_SINUS = 3)] = "MAXILLARY_SINUS"),
          (E[(E.AIRWAY = 4)] = "AIRWAY"),
          E);
      let eI = Object.values(e$).filter((e) => "number" == typeof e);
      var eO =
          (((C = eO || {})[(C.EXPAND = 0)] = "EXPAND"),
          (C[(C.SHRINK = 1)] = "SHRINK"),
          C),
        eM =
          (((b = eM || {})[(b.NONE = 0)] = "NONE"),
          (b[(b.ORIGIN = 1)] = "ORIGIN"),
          (b[(b.TARGET = 2)] = "TARGET"),
          (b[(b.PLAN = 3)] = "PLAN"),
          (b[(b.DayNight = 4)] = "DayNight"),
          b),
        eD =
          (((T = eD || {})[(T.DEFAULT = 0)] = "DEFAULT"),
          (T[(T.DRAGGING_ATTACH_ON_TOOTH = 1)] = "DRAGGING_ATTACH_ON_TOOTH"),
          (T[(T.DRAGGING_ANGEL_BUTTON = 2)] = "DRAGGING_ANGEL_BUTTON"),
          T),
        ek =
          ((($ = ek || {})[($.ANTERIOR = 0)] = "ANTERIOR"),
          ($[($.MOLAR = 1)] = "MOLAR"),
          $),
        eL =
          (((I = eL || {})[(I.DEFAULT = 0)] = "DEFAULT"),
          (I[(I.ATTACH_UNMOVABLE = 1)] = "ATTACH_UNMOVABLE"),
          (I[(I.TOOTH_UNMOVABLE = 2)] = "TOOTH_UNMOVABLE"),
          (I[(I.IPR_OPERATION_INFO = 3)] = "IPR_OPERATION_INFO"),
          (I[(I.ATTACH_NEW_ADDED = 4)] = "ATTACH_NEW_ADDED"),
          (I[(I.ATTACH_MOVED = 5)] = "ATTACH_MOVED"),
          (I[(I.ANGELBUTTON_INVALID_BY_OPERATE = 6)] =
            "ANGELBUTTON_INVALID_BY_OPERATE"),
          (I[(I.ATTACH_THICKNESS_CHANGED = 7)] = "ATTACH_THICKNESS_CHANGED"),
          (I[(I.ATTACH_COLLISION = 8)] = "ATTACH_COLLISION"),
          (I[(I.TRACTION_CHANGED = 9)] = "TRACTION_CHANGED"),
          (I[(I.MODIFY_DAY_NIGHT_TRACTING_ATTACH = 10)] =
            "MODIFY_DAY_NIGHT_TRACTING_ATTACH"),
          (I[(I.DELETE_DAY_NIGHT_TRACTING_ATTACH = 11)] =
            "DELETE_DAY_NIGHT_TRACTING_ATTACH"),
          I),
        eN =
          (((O = eN || {})[(O.DEFAULT = 0)] = "DEFAULT"),
          (O[(O.ANGELROD = 1)] = "ANGELROD"),
          (O[(O.WARNING = 2)] = "WARNING"),
          O),
        eR =
          (((M = eR || {})[(M.BACKGROUND = 0)] = "BACKGROUND"),
          (M[(M.ENTIYTATTACH = 1)] = "ENTIYTATTACH"),
          (M[(M.CBCT_JAW = 2)] = "CBCT_JAW"),
          (M[(M.CBCT_CANCELLOUS = 3)] = "CBCT_CANCELLOUS"),
          (M[(M.CBCT_SINUS = 4)] = "CBCT_SINUS"),
          (M[(M.CBCTAIRWAY = 5)] = "CBCTAIRWAY"),
          M),
        eS =
          (((D = eS || {})[(D.ADD = 0)] = "ADD"),
          (D[(D.REP = 1)] = "REP"),
          (D[(D.DEL = 2)] = "DEL"),
          D),
        eB =
          (((k = eB || {})[(k.HORIZONTAL = 0)] = "HORIZONTAL"),
          (k[(k.VERTICAL = 1)] = "VERTICAL"),
          k),
        eP =
          (((L = eP || {})[(L.NORMAL = 0)] = "NORMAL"),
          (L[(L.MODERATE = 1)] = "MODERATE"),
          (L[(L.CHALLENGING = 2)] = "CHALLENGING"),
          L),
        eU =
          (((N = eU || {})[(N.INIT = -1)] = "INIT"),
          (N[(N.OTHER = 0)] = "OTHER"),
          (N[(N.OPERATION = 1)] = "OPERATION"),
          (N[(N.A6 = 2)] = "A6"),
          (N[(N.JawGradient = 3)] = "JawGradient"),
          (N[(N.BiteAdjust = 4)] = "BiteAdjust"),
          N),
        ej =
          (((R = ej || {})[(R.NoneBiteJump = 1)] = "NoneBiteJump"),
          (R[(R.BeforeTreatBiteJump = 2)] = "BeforeTreatBiteJump"),
          (R[(R.ProgressiveBiteJump = 4)] = "ProgressiveBiteJump"),
          (R[(R.AfterTreatBiteJump = 8)] = "AfterTreatBiteJump"),
          (R[(R.DesingedBiteJump = 16)] = "DesingedBiteJump"),
          R),
        ez =
          (((S = ez || {})[(S.kHasFragmentalArch = 0)] = "kHasFragmentalArch"),
          (S[(S.kHasSimulationStep = 1)] = "kHasSimulationStep"),
          (S[(S.kIsA7Speed = 2)] = "kIsA7Speed"),
          (S[(S.kIsAmericaCase = 3)] = "kIsAmericaCase"),
          (S[(S.kMIA = 4)] = "kMIA"),
          S),
        eH =
          (((B = eH || {})[(B.DAY_NIGHT = 0)] = "DAY_NIGHT"),
          (B[(B.DAY = 1)] = "DAY"),
          (B[(B.NIGHT = 2)] = "NIGHT"),
          B);
      function eG(e, t) {
        let [n, l, o, i] = e;
        ((n += (((l & o) | (~l & i)) + t[0] - 680876936) | 0),
          (i +=
            ((((n = (((n << 7) | (n >>> 25)) + l) | 0) & l) | (~n & o)) +
              t[1] -
              389564586) |
            0),
          (o +=
            ((((i = (((i << 12) | (i >>> 20)) + n) | 0) & n) | (~i & l)) +
              t[2] +
              606105819) |
            0),
          (l +=
            ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & n)) +
              t[3] -
              1044525330) |
            0),
          (n +=
            ((((l = (((l << 22) | (l >>> 10)) + o) | 0) & o) | (~l & i)) +
              t[4] -
              176418897) |
            0),
          (i +=
            ((((n = (((n << 7) | (n >>> 25)) + l) | 0) & l) | (~n & o)) +
              t[5] +
              1200080426) |
            0),
          (o +=
            ((((i = (((i << 12) | (i >>> 20)) + n) | 0) & n) | (~i & l)) +
              t[6] -
              1473231341) |
            0),
          (l +=
            ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & n)) +
              t[7] -
              45705983) |
            0),
          (n +=
            ((((l = (((l << 22) | (l >>> 10)) + o) | 0) & o) | (~l & i)) +
              t[8] +
              1770035416) |
            0),
          (i +=
            ((((n = (((n << 7) | (n >>> 25)) + l) | 0) & l) | (~n & o)) +
              t[9] -
              1958414417) |
            0),
          (o +=
            ((((i = (((i << 12) | (i >>> 20)) + n) | 0) & n) | (~i & l)) +
              t[10] -
              42063) |
            0),
          (l +=
            ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & n)) +
              t[11] -
              1990404162) |
            0),
          (n +=
            ((((l = (((l << 22) | (l >>> 10)) + o) | 0) & o) | (~l & i)) +
              t[12] +
              1804603682) |
            0),
          (i +=
            ((((n = (((n << 7) | (n >>> 25)) + l) | 0) & l) | (~n & o)) +
              t[13] -
              40341101) |
            0),
          (o +=
            ((((i = (((i << 12) | (i >>> 20)) + n) | 0) & n) | (~i & l)) +
              t[14] -
              1502002290) |
            0),
          (l +=
            ((((o = (((o << 17) | (o >>> 15)) + i) | 0) & i) | (~o & n)) +
              t[15] +
              1236535329) |
            0),
          (n +=
            ((((l = (((l << 22) | (l >>> 10)) + o) | 0) & i) | (o & ~i)) +
              t[1] -
              165796510) |
            0),
          (i +=
            ((((n = (((n << 5) | (n >>> 27)) + l) | 0) & o) | (l & ~o)) +
              t[6] -
              1069501632) |
            0),
          (o +=
            ((((i = (((i << 9) | (i >>> 23)) + n) | 0) & l) | (n & ~l)) +
              t[11] +
              643717713) |
            0),
          (l +=
            ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & n) | (i & ~n)) +
              t[0] -
              373897302) |
            0),
          (n +=
            ((((l = (((l << 20) | (l >>> 12)) + o) | 0) & i) | (o & ~i)) +
              t[5] -
              701558691) |
            0),
          (i +=
            ((((n = (((n << 5) | (n >>> 27)) + l) | 0) & o) | (l & ~o)) +
              t[10] +
              38016083) |
            0),
          (o +=
            ((((i = (((i << 9) | (i >>> 23)) + n) | 0) & l) | (n & ~l)) +
              t[15] -
              660478335) |
            0),
          (l +=
            ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & n) | (i & ~n)) +
              t[4] -
              405537848) |
            0),
          (n +=
            ((((l = (((l << 20) | (l >>> 12)) + o) | 0) & i) | (o & ~i)) +
              t[9] +
              568446438) |
            0),
          (i +=
            ((((n = (((n << 5) | (n >>> 27)) + l) | 0) & o) | (l & ~o)) +
              t[14] -
              1019803690) |
            0),
          (o +=
            ((((i = (((i << 9) | (i >>> 23)) + n) | 0) & l) | (n & ~l)) +
              t[3] -
              187363961) |
            0),
          (l +=
            ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & n) | (i & ~n)) +
              t[8] +
              1163531501) |
            0),
          (n +=
            ((((l = (((l << 20) | (l >>> 12)) + o) | 0) & i) | (o & ~i)) +
              t[13] -
              1444681467) |
            0),
          (i +=
            ((((n = (((n << 5) | (n >>> 27)) + l) | 0) & o) | (l & ~o)) +
              t[2] -
              51403784) |
            0),
          (o +=
            ((((i = (((i << 9) | (i >>> 23)) + n) | 0) & l) | (n & ~l)) +
              t[7] +
              1735328473) |
            0),
          (l +=
            ((((o = (((o << 14) | (o >>> 18)) + i) | 0) & n) | (i & ~n)) +
              t[12] -
              1926607734) |
            0),
          (n +=
            (((l = (((l << 20) | (l >>> 12)) + o) | 0) ^ o ^ i) +
              t[5] -
              378558) |
            0),
          (i +=
            (((n = (((n << 4) | (n >>> 28)) + l) | 0) ^ l ^ o) +
              t[8] -
              2022574463) |
            0),
          (o +=
            (((i = (((i << 11) | (i >>> 21)) + n) | 0) ^ n ^ l) +
              t[11] +
              1839030562) |
            0),
          (l +=
            (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ n) +
              t[14] -
              35309556) |
            0),
          (n +=
            (((l = (((l << 23) | (l >>> 9)) + o) | 0) ^ o ^ i) +
              t[1] -
              1530992060) |
            0),
          (i +=
            (((n = (((n << 4) | (n >>> 28)) + l) | 0) ^ l ^ o) +
              t[4] +
              1272893353) |
            0),
          (o +=
            (((i = (((i << 11) | (i >>> 21)) + n) | 0) ^ n ^ l) +
              t[7] -
              155497632) |
            0),
          (l +=
            (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ n) +
              t[10] -
              1094730640) |
            0),
          (n +=
            (((l = (((l << 23) | (l >>> 9)) + o) | 0) ^ o ^ i) +
              t[13] +
              681279174) |
            0),
          (i +=
            (((n = (((n << 4) | (n >>> 28)) + l) | 0) ^ l ^ o) +
              t[0] -
              358537222) |
            0),
          (o +=
            (((i = (((i << 11) | (i >>> 21)) + n) | 0) ^ n ^ l) +
              t[3] -
              722521979) |
            0),
          (l +=
            (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ n) +
              t[6] +
              76029189) |
            0),
          (n +=
            (((l = (((l << 23) | (l >>> 9)) + o) | 0) ^ o ^ i) +
              t[9] -
              640364487) |
            0),
          (i +=
            (((n = (((n << 4) | (n >>> 28)) + l) | 0) ^ l ^ o) +
              t[12] -
              421815835) |
            0),
          (o +=
            (((i = (((i << 11) | (i >>> 21)) + n) | 0) ^ n ^ l) +
              t[15] +
              530742520) |
            0),
          (l +=
            (((o = (((o << 16) | (o >>> 16)) + i) | 0) ^ i ^ n) +
              t[2] -
              995338651) |
            0),
          (l = (((l << 23) | (l >>> 9)) + o) | 0),
          (n += ((o ^ (l | ~i)) + t[0] - 198630844) | 0),
          (n = (((n << 6) | (n >>> 26)) + l) | 0),
          (i += ((l ^ (n | ~o)) + t[7] + 1126891415) | 0),
          (i = (((i << 10) | (i >>> 22)) + n) | 0),
          (o += ((n ^ (i | ~l)) + t[14] - 1416354905) | 0),
          (o = (((o << 15) | (o >>> 17)) + i) | 0),
          (l += ((i ^ (o | ~n)) + t[5] - 57434055) | 0),
          (l = (((l << 21) | (l >>> 11)) + o) | 0),
          (n += ((o ^ (l | ~i)) + t[12] + 1700485571) | 0),
          (n = (((n << 6) | (n >>> 26)) + l) | 0),
          (i += ((l ^ (n | ~o)) + t[3] - 1894986606) | 0),
          (i = (((i << 10) | (i >>> 22)) + n) | 0),
          (o += ((n ^ (i | ~l)) + t[10] - 1051523) | 0),
          (o = (((o << 15) | (o >>> 17)) + i) | 0),
          (l += ((i ^ (o | ~n)) + t[1] - 2054922799) | 0),
          (l = (((l << 21) | (l >>> 11)) + o) | 0),
          (n += ((o ^ (l | ~i)) + t[8] + 1873313359) | 0),
          (n = (((n << 6) | (n >>> 26)) + l) | 0),
          (i += ((l ^ (n | ~o)) + t[15] - 30611744) | 0),
          (i = (((i << 10) | (i >>> 22)) + n) | 0),
          (o += ((n ^ (i | ~l)) + t[6] - 1560198380) | 0),
          (o = (((o << 15) | (o >>> 17)) + i) | 0),
          (l += ((i ^ (o | ~n)) + t[13] + 1309151649) | 0),
          (l = (((l << 21) | (l >>> 11)) + o) | 0),
          (n += ((o ^ (l | ~i)) + t[4] - 145523070) | 0),
          (n = (((n << 6) | (n >>> 26)) + l) | 0),
          (i += ((l ^ (n | ~o)) + t[11] - 1120210379) | 0),
          (i = (((i << 10) | (i >>> 22)) + n) | 0),
          (o += ((n ^ (i | ~l)) + t[2] + 718787259) | 0),
          (o = (((o << 15) | (o >>> 17)) + i) | 0),
          (l += ((i ^ (o | ~n)) + t[9] - 343485551) | 0),
          (l = (((l << 21) | (l >>> 11)) + o) | 0),
          (e[0] = (n + e[0]) | 0),
          (e[1] = (l + e[1]) | 0),
          (e[2] = (o + e[2]) | 0),
          (e[3] = (i + e[3]) | 0));
      }
      let eV = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "0";
          return (l) => {
            let o = "" + l;
            return !t && o.length > e
              ? o
              : (Array(e).fill(n).join("") + o).slice(-e);
          };
        },
        eZ = (e) => 0 | e;
      (RegExp(
        "\uD870\uDF17|\uD83C\uDE34|\uD83C\uDE51|\uD83C\uDE36|\uD83C\uDE1A|\uD83C\uDE38|\uD83C\uDE3A|\uD83C\uDE37|\uD83C\uDE50|㊙|㊗|\uD83C\uDE35|\uD83C\uDE39|\uD83C\uDE32|\uD83C\uDD70️|\uD83C\uDD71️|\uD83C\uDD8E|\uD83C\uDD91|\uD83C\uDD7E️|\uD83C\uDD7F️|0️⃣|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|8️⃣|9️⃣|\uD83D\uDD1F",
        "g",
      ),
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          "undefined" != typeof navigator &&
          /\bHtml5Plus\b/i.test(navigator.userAgent));
      let eF = [2047, 1536, 1024, 896, 768, 640, 512, 384, 256];
      class eJ extends Error {
        constructor(e = 1e3, t = "") {
          (super("[".concat(e, "]").concat(t)),
            (this.code = e),
            (this.msg = t));
        }
      }
      var eY =
        (((P = eY || {})[(P.NONE = 0)] = "NONE"),
        (P[(P.UNKNOWN = 1e3)] = "UNKNOWN"),
        (P[(P.LIBS_LOADING_FAILED = 1101)] = "LIBS_LOADING_FAILED"),
        (P[(P.DDM_IS_EMPTY = 3111)] = "DDM_IS_EMPTY"),
        (P[(P.DDM_DECODE_FAILED = 3112)] = "DDM_DECODE_FAILED"),
        (P[(P.DDM_FILE_INVALID = 3113)] = "DDM_FILE_INVALID"),
        (P[(P.ODS_IS_EMPTY = 3121)] = "ODS_IS_EMPTY"),
        (P[(P.ODS_DECODE_FAILED = 3122)] = "ODS_DECODE_FAILED"),
        (P[(P.ODS_V6_DECODE_FAILED = 3125)] = "ODS_V6_DECODE_FAILED"),
        (P[(P.ODS_FILE_INVALID = 3126)] = "ODS_FILE_INVALID"),
        (P[(P.DDM_ODS_NOT_MATCH = 3131)] = "DDM_ODS_NOT_MATCH"),
        (P[(P.SIMULATOR_ERROR = 3140)] = "SIMULATOR_ERROR"),
        (P[(P.SIMULATOR_INIT_FAILED = 3141)] = "SIMULATOR_INIT_FAILED"),
        (P[(P.SIMULATOR_DATA_NOT_FOUND = 3142)] = "SIMULATOR_DATA_NOT_FOUND"),
        (P[(P.SIMULATOR_DATA_BROKEN = 3143)] = "SIMULATOR_DATA_BROKEN"),
        (P[(P.SIMULATOR_CANVAS_GET_CONTEXT_FAILED = 3145)] =
          "SIMULATOR_CANVAS_GET_CONTEXT_FAILED"),
        (P[(P.SIMULATOR_CANVAS_CONTEXT_LOST = 3146)] =
          "SIMULATOR_CANVAS_CONTEXT_LOST"),
        (P[(P.SIMULATOR_HEAP_ERROR = 3147)] = "SIMULATOR_HEAP_ERROR"),
        (P[(P.SIMULATOR_HEAP_LIMIT_REACHED = 3148)] =
          "SIMULATOR_HEAP_LIMIT_REACHED"),
        (P[(P.SIMULATOR_START_MODIFY_FAILED = 3149)] =
          "SIMULATOR_START_MODIFY_FAILED"),
        P);
      let eK = "requestedSize <= 536870912 ? 268435456 : 33554432",
        eW = [256, 128],
        eq = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK;
          return "\nfunction _emscripten_resize_heap(requestedSize) {\n    /* Wasm 当前使用内存 */\n    var current = _emscripten_get_heap_size();\n    /* 内存增长量 */\n    var alignment = "
            .concat(
              e,
              ";\n    /* Wasm 目标内存 */\n    var target = alignUp(requestedSize, alignment);\n    console.log('Memory growing:', current, '->', target);\n\n    if (target >= 2145386496) {\n        throw ({ code: ",
            )
            .concat(
              eY.SIMULATOR_HEAP_LIMIT_REACHED,
              ", message: '内存已达上限' });\n    }\n    try {\n        emscripten_realloc_buffer(target);\n        return true;\n    } catch (err) {\n        console.error('内存分配失败：', err);\n        var ERR_MSG = 'Memory grow failed!';\n        var error = { code: ",
            )
            .concat(
              eY.SIMULATOR_HEAP_ERROR,
              ", message: ERR_MSG };\n        if (Module['onAbort']) {\n            Module['onAbort'](error);\n            throw error;\n        }\n        return abort(error);\n    }\n}\nfunction emscripten_realloc_buffer(size) {\n    wasmMemory.grow((size - buffer.byteLength + 65535) >> 16);\n    updateGlobalBufferAndViews(wasmMemory.buffer);\n}\n",
            )
            .replace(/\n\s*/g, "");
        };
      var eQ =
        (((U = eQ || {})[(U.GROWABLE = 0)] = "GROWABLE"),
        (U[(U.CONSTANT = 1)] = "CONSTANT"),
        (U[(U.FALLING = 2)] = "FALLING"),
        (U[(U.ADAPTIVE = 3)] = "ADAPTIVE"),
        U);
      let eX = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eW,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eK,
          { size: n, memory: l } = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : eF,
              t = { size: 0 };
            if (
              "undefined" == typeof WebAssembly ||
              "function" !=
                typeof (null == WebAssembly ? void 0 : WebAssembly.Memory)
            )
              return t;
            if ("undefined" != typeof navigator) {
              let { os: e } = (function (e) {
                  var t;
                  let n = /html5plus/i.test(e),
                    l = (/Mozilla\/.*? \((.*?)\)/i.exec(e) || [])[1] || "",
                    o = /iP(hone|ad|od)/i.test(l),
                    i = /Android/i.test(l),
                    r = /Windows NT /i.test(l),
                    s = /Macintosh/i.test(l),
                    a = !i && /Linux/i.test(l),
                    c = {
                      5.1: "XP",
                      5.2: "XP",
                      "6.0": "Vista",
                      6.1: "7",
                      6.2: "8",
                      6.3: "8.1",
                      10: "10",
                      "10.0": "10",
                    },
                    d = (() => {
                      var e;
                      try {
                        let { name: t, version: n } =
                          null === (e = window.plus) || void 0 === e
                            ? void 0
                            : e.os;
                        if (t && n) return [t, n].filter(Boolean).join(" ");
                      } catch (e) {}
                      return o
                        ? "iOS" +
                            l.replace(/^.*OS ([-\d_.]+).*$/i, (e, t) =>
                              " ".concat(t.replace(/_/g, ".")),
                            )
                        : i
                          ? "Android" +
                            l.replace(/^.*Android ([-\d.]+).*$/i, " $1")
                          : r
                            ? "Windows" +
                              l.replace(/^.*Windows NT ([-\d.]+).*$/i, (e, t) =>
                                " ".concat(c[t] || "NT" + t),
                              )
                            : s
                              ? "Mac" +
                                l.replace(
                                  /^.*Mac OS X ([-\d_.]+).*$/i,
                                  (e, t) => " ".concat(t.replace(/_/g, ".")),
                                )
                              : a
                                ? "Linux Unknown"
                                : "Other Unknown";
                    })(),
                    u = / MicroMessenger\//i.test(e)
                      ? "MicroMessenger" +
                        e.replace(/^.* MicroMessenger\/([\d.]+).*$/i, " $1")
                      : n && i
                        ? "Android-Webview" +
                          e.replace(/^.*Chrome\/([\d.]+).*$/i, " $1")
                        : o
                          ? "iOS-Webview " + d.split(" ")[1]
                          : / Firefox\//i.test(e)
                            ? "Firefox" +
                              e.replace(/^.* Firefox\/([\d.]+).*$/i, " $1")
                            : / Edge\//i.test(e)
                              ? "Edge" +
                                e.replace(/^.* Edge\/([\d.]+).*$/i, " $1")
                              : / Edg\//i.test(e)
                                ? "Edge" +
                                  e.replace(/^.* Edg\/([\d.]+).*$/i, " $1")
                                : s &&
                                    / Version\/[\d.]+ Safari\/[\d.]+/i.test(e)
                                  ? "Safari" +
                                    e.replace(
                                      /^.* Version\/([\d.]+).*$/i,
                                      " $1",
                                    )
                                  : / Chrome\//i.test(e)
                                    ? "Chrome" +
                                      e.replace(
                                        /^.* Chrome\/([\d.]+).*$/i,
                                        " $1",
                                      )
                                    : / HeadlessChrome\//i.test(e)
                                      ? "HeadlessChrome" +
                                        e.replace(
                                          /^.* HeadlessChrome\/([\d.]+).*$/i,
                                          " $1",
                                        )
                                      : /Trident\/.*rv:11.0.*\) like Gecko/i.test(
                                            e,
                                          )
                                        ? "IE 11"
                                        : / MSIE [\d.]+/i.test(e)
                                          ? "IE" +
                                            e.replace(
                                              /^.* MSIE ([\d.]+).*$/i,
                                              " $1",
                                            )
                                          : "Other Unknown",
                    h = o
                      ? "iOS-Webview " + d.split(" ")[1]
                      : i && /Chrome/.test(e)
                        ? "Android-Webview" +
                          e.replace(/^.*Chrome\/([\d.]+).*$/i, " $1")
                        : u,
                    f = (() => {
                      var t, n, l;
                      try {
                        let { vendor: e, model: n } =
                          null === (t = window.plus) || void 0 === t
                            ? void 0
                            : t.device;
                        return [e, n].filter(Boolean).join(" ");
                      } catch (e) {}
                      return /^IE/.test(u)
                        ? (null === (n = /\((.*?) Trident.*?\)/.exec(e)) ||
                          void 0 === n
                            ? void 0
                            : n[1]) || "Other Unknown"
                        : (null === (l = /\((.*?)\)/.exec(e)) || void 0 === l
                            ? void 0
                            : l[1]) || "Other Unknown";
                    })(),
                    m =
                      ((t = (function (e) {
                        let [t, n] = (function (e) {
                          let t,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [
                                    1732584193, -271733879, -1732584194,
                                    271733878,
                                  ],
                            l = e.length;
                          for (t = 64; t <= l; t += 64)
                            eG(
                              n,
                              (function (e) {
                                let t = [];
                                for (let n = 0; n < 64; n += 4)
                                  t[n >> 2] =
                                    e[n] +
                                    (e[n + 1] << 8) +
                                    (e[n + 2] << 16) +
                                    (e[n + 3] << 24);
                                return t;
                              })(e.slice(t - 64, t)),
                            );
                          return [
                            (e =
                              t - 64 < l ? e.slice(t - 64) : new Uint8Array(0)),
                            n,
                          ];
                        })(e);
                        return (function (e, t, n) {
                          var l;
                          let o;
                          let i = [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            ],
                            r = e.length;
                          for (o = 0; o < r; o += 1)
                            i[o >> 2] |= e[o] << ((o % 4) << 3);
                          if (((i[o >> 2] |= 128 << ((o % 4) << 3)), o > 55))
                            for (eG(t, i), o = 0; o < 16; o += 1) i[o] = 0;
                          let s =
                              null !==
                                (l = /(.*?)(.{0,8})$/.exec(
                                  (8 * n).toString(16),
                                )) && void 0 !== l
                                ? l
                                : [],
                            a = parseInt(s[2], 16),
                            c = parseInt(s[1], 16) || 0;
                          return (
                            (i[14] = a),
                            (i[15] = c),
                            eG(t, i),
                            new Uint8Array(new Int32Array(t).buffer)
                          );
                        })(t, n, e.length);
                      })(
                        (function (e) {
                          if ("function" == typeof TextEncoder)
                            return new TextEncoder().encode(e);
                          let t = (e = unescape(encodeURIComponent(e))).length,
                            n = new Uint8Array(t);
                          for (let l = 0; l < t; l++) n[l] = e.charCodeAt(l);
                          return n;
                        })([e, f, d].join("#")),
                      )),
                      (function (e) {
                        let t = "";
                        for (let n = 0, l = e.length; n < l; n++)
                          t += eV(2, !0)(e[n].toString(16));
                        return t;
                      })(new Uint8Array(t)));
                  return {
                    ua: e,
                    platform: n && o ? "ios" : n && i ? "android" : "web",
                    os: d,
                    browser: u,
                    webview: h,
                    device: f,
                    hash: m,
                  };
                })(navigator.userAgent),
                [n, l] = e.split(" ");
              if ("iOS" === n && 11.3 > parseFloat(l)) return t;
            }
            for (let n of e)
              try {
                ((t.memory = new WebAssembly.Memory({ initial: n << 4 })),
                  (t.size = n));
                break;
              } catch (e) {
                continue;
              }
            return t;
          })(e);
        if (0 === n)
          throw new eJ(eY.SIMULATOR_HEAP_ERROR, "无法初始化Wasm内存");
        return {
          mode: 3,
          initialMemory: 1048576 * n,
          wasmMemory: l,
          bindingScript: eq(t),
        };
      };
      var e_ =
        (((j = e_ || {})[(j.TOTAL = 0)] = "TOTAL"),
        (j[(j.MOVE = 1)] = "MOVE"),
        j);
      function e1(e) {
        return (0, J.gO)(e) > 30 ? "lower" : "upper";
      }
      let e0 = "Module",
        e2 = async (e) => {
          let {
              jsText: t,
              wasmBinary: n,
              dataBinary: l,
              wasmMemoryBreakpoints: o,
              wasmMemoryAlignment: i,
              onToothSelected: r = console.log,
              onError: s = console.error,
              onChange: a = console.log,
            } = e,
            c = eX(o, i);
          return (0, Y.hK)({
            TOTAL_MEMORY: c.initialMemory,
            exportName: e0,
            wasmMemory: c.wasmMemory,
            script: "var IGOAL="
              .concat(e0, ".__callbacks;var IORTHO=")
              .concat(e0, ".__callbacks;\n")
              .concat(t, ";\n")
              .concat(c.bindingScript, "\n")
              .concat(e0, ".GL = GL;"),
            wasmBinary: n,
            __callbacks: { onToothSelected: r, onError: s, VisitorFromWASM: a },
            getPreloadedPackage(e, t) {
              if (!/.data$/.test(e)) {
                s(eY.SIMULATOR_DATA_NOT_FOUND);
                return;
              }
              if (l.byteLength === t) return l;
              s(eY.SIMULATOR_DATA_BROKEN);
            },
            onAbort(e) {
              (console.error(e), s(e.code || eY.SIMULATOR_ERROR));
            },
          });
        };
      class e3 {
        valueOf() {
          return this._value;
        }
        toString() {
          return "".concat(this._value);
        }
        biteAt(e) {
          return (this._value >> e) & 1;
        }
        get isNone() {
          return !!this.biteAt(0);
        }
        get isBefore() {
          return !!this.biteAt(1);
        }
        get isProgress() {
          return !!this.biteAt(2);
        }
        get isAfter() {
          return !!this.biteAt(3);
        }
        get isDesinged() {
          return !!this.biteAt(4);
        }
        constructor(e) {
          this._value = e;
        }
      }
      class e4 {
        valueOf() {
          return this._value;
        }
        toString() {
          return " ".concat(this._value);
        }
        biteAt(e) {
          return (this._value >> e) & 1;
        }
        get isIRS1() {
          return !this.biteAt(1) && !!this.biteAt(0);
        }
        get isIRS2() {
          return !!this.biteAt(1);
        }
        get isVirtualRoot() {
          return (
            !!this.biteAt(2) || this.isVirtualRootV1 || this.isVirtualRootV2
          );
        }
        get isVirtualRootV1() {
          return !!this.biteAt(3);
        }
        get isVirtualRootV2() {
          return !!this.biteAt(4);
        }
        constructor(e) {
          this._value = e;
        }
      }
      function e7(e) {
        return Object.defineProperties(e, {
          upper: {
            get: () =>
              new Map(
                [...e].filter((e) => {
                  let [t, n] = e;
                  return "upper" === n.jawType;
                }),
              ),
          },
          lower: {
            get: () =>
              new Map(
                [...e].filter((e) => {
                  let [t, n] = e;
                  return "lower" === n.jawType;
                }),
              ),
          },
        });
      }
      function e6(e) {
        var t, n, l, o, i;
        let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : te.Asian,
          s = e7(
            new Map(
              Object.entries(e.CrownWidth).map((e) => {
                let [t, n] = e,
                  l = +t;
                return [l, { fdi: l, jawType: e1(l), width: +n }];
              }),
            ),
          ),
          a = (function (e, t) {
            let n =
                t === te.Asian
                  ? e.AnteriorCompare_Asian
                  : e.AnteriorCompare_Caucasian,
              l =
                t === te.Asian
                  ? e.PosteriorCompare_Asian
                  : e.PosteriorCompare_Caucasian;
            return {
              AR: e.AnteriorRatio,
              OR: e.PosteriorRatio,
              AD: +n,
              OD: +l,
            };
          })(e.Bolton, r),
          c = new Set(s.keys()),
          d = new Set(
            [...s.values()]
              .filter((e) => {
                let { width: t } = e;
                return !isNaN(t);
              })
              .map((e) => e.fdi),
          ),
          u = new Set(J.fI.map((e) => (c.has(e + 40) ? e + 40 : e))),
          h = new Set(J.Fz.map((e) => (c.has(e + 40) ? e + 40 : e))),
          f = new Set([...u, ...h]),
          m = (function (e) {
            if (!e) return new Map();
            let t = Object.entries(e).map((e) => {
              let [t, n] = e;
              return [
                +t + 1,
                e7(
                  new Map(
                    n.map((e) => {
                      let { c: t, n, o: l, p: o } = e;
                      return [
                        n,
                        {
                          fdi: n,
                          jawType: e1(n),
                          moving: !!t,
                          rsc: !!l,
                          pa: !!o,
                        },
                      ];
                    }),
                  ),
                ),
              ];
            });
            return (
              t.sort((e, t) => {
                let [n] = e,
                  [l] = t;
                return n - l;
              }),
              new Map(t)
            );
          })(e.ToothMovement),
          p = (t = e.GumJumps)
            ? t.map((e) => ({ ...e, step: e.step + 1 }))
            : [],
          g = (function (e, t) {
            let n = new Map(
              t.map((e) => {
                let { step: t, upper: n, lower: l, type: o } = e;
                return [t, { upper: n, lower: l, type: o }];
              }),
            );
            return new Map(
              [...e].map((e) => {
                var t;
                let [l, o] = e,
                  i = [...o.upper.values()],
                  r = [...o.lower.values()],
                  s = n.get(l),
                  a = !!(null == s ? void 0 : s.upper),
                  c = !!(null == s ? void 0 : s.lower),
                  d = null != (t = null == s ? void 0 : s.type) ? t : eU.INIT,
                  u = i.some((e) => {
                    let { rsc: t } = e;
                    return t;
                  }),
                  h = r.some((e) => {
                    let { rsc: t } = e;
                    return t;
                  }),
                  f = i.some((e) => {
                    let { pa: t } = e;
                    return t;
                  }),
                  m = r.some((e) => {
                    let { pa: t } = e;
                    return t;
                  }),
                  p = i.some((e) => {
                    let { moving: t } = e;
                    return t;
                  }),
                  g = r.some((e) => {
                    let { moving: t } = e;
                    return t;
                  });
                return [
                  l,
                  {
                    step: l,
                    moving: p || g,
                    rsc: u || h,
                    pa: f || m,
                    jumping: a || c,
                    biteJump: d,
                    upper: { moving: p, rsc: u, pa: f, jumping: a },
                    lower: { moving: g, rsc: h, pa: m, jumping: c },
                  },
                ];
              }),
            );
          })(m, p),
          v = (function (e) {
            let t,
              n,
              l = 0,
              o = 1 / 0,
              i = 0,
              r = 1 / 0,
              s = 1 / 0,
              a = [];
            if (!e)
              return {
                max: l,
                treatStart: o,
                treatEnd: i,
                rscStart: r,
                rscEnd: s,
                segments: a,
                hasPA: !1,
                hasRSC: !1,
              };
            for (let [c, d] of e) {
              let e = d.rsc ? "rsc" : d.pa ? "pa" : "treat";
              if (
                ("treat" === e && ((o = Math.min(o, c)), (i = c)),
                "rsc" === e && ((r = Math.min(r, c)), (s = c)),
                (l = c),
                t === e && n)
              ) {
                n.length++;
                continue;
              }
              ((t = e), (n = { type: e, start: c, length: 1 }), a.push(n));
            }
            let c = a.some((e) => "pa" === e.type),
              d = a.some((e) => "rsc" === e.type);
            return {
              max: l,
              treatStart: o,
              treatEnd: i,
              rscStart: r,
              rscEnd: s,
              segments: a,
              hasPA: c,
              hasRSC: d,
            };
          })(g),
          A = v.max,
          w = (n = e.AttachOperation)
            ? n.map((e) => {
                let { AddN: t, DelN: n, Fdi: l, Oper: o, Step: i } = e;
                return {
                  numAdd: t,
                  numRemove: n,
                  fdi: l,
                  step: i + 1,
                  overstep: i + 1 > A,
                  operation: o,
                };
              })
            : [],
          x = (l = e.MIAattachOperation)
            ? l.map((e) => {
                let { AddN: t, DelN: n, Fdi: l, Fdi1: o, Oper: i, Step: r } = e;
                return {
                  numAdd: t,
                  numRemove: n,
                  fdiA: l,
                  fdiB: o,
                  step: r + 1,
                  overstep: r + 1 > A,
                  operation: i,
                };
              })
            : [],
          y = (o = e.IPR)
            ? o.map((e) => {
                let { step: t, value: n, ...l } = e;
                return { step: +t + 1, value: +n, ...l };
              })
            : [],
          E = (function (e, t, n) {
            let l = new Map([...e].map((e) => [e, t.has(e) ? 1 / 0 : 0]));
            return (
              null == n ||
                n.forEach((e) => {
                  let { fdi: t, step: n } = e;
                  l.set(t, n + 1);
                }),
              l
            );
          })(f, c, e.ExtractedTeeth),
          C = (function (e, t, n, l, o, i, r, s) {
            let a = [...o]
              .filter((e) => {
                let [, t] = e;
                return isFinite(t);
              })
              .map((e) => {
                let [t, n] = e;
                return { fdi: t, step: n };
              });
            return {
              gumJumps: t,
              steps: [
                {
                  step: 0,
                  data: Object.fromEntries(
                    [...e].map((e) => {
                      var t;
                      return [
                        e,
                        {
                          moving: !1,
                          hidden: 0 >= (null != (t = o.get(e)) ? t : NaN),
                          rsc: !1,
                          pa: !1,
                        },
                      ];
                    }),
                  ),
                },
                ...[...n].map((t) => {
                  let [n, l] = t;
                  return {
                    step: n,
                    data: Object.fromEntries(
                      [...e].map((e) => {
                        var t;
                        let i = l.get(e);
                        return [
                          e,
                          {
                            moving: !!(null == i ? void 0 : i.moving),
                            hidden: n >= (null != (t = o.get(e)) ? t : NaN),
                            rsc: !!(null == i ? void 0 : i.rsc),
                            pa: !!(null == i ? void 0 : i.pa),
                          },
                        ];
                      }),
                    ),
                  };
                }),
              ],
              stepMetrics: l,
              attaches: i,
              iprs: r,
              exts: a,
              mia: s,
            };
          })(f, p, m, v, E, w, y, x),
          b = {
            gumJump: (i = e.Feature).ExistGumJump,
            angelButton: i.ExistButtonHook,
            joint: i.ExistJointProblem,
            mias: i.TADsRequired,
            wisdom: i["3rdMolarExtractionRequired"],
            illegalAttach: i.ExistAttachOnCeramicCrown,
            hasUnstructuredRemarks: i.ExistUnstructuredRemarks,
            suFileCheckInfos: i.SuFileCheckInfos,
          };
        return {
          upperFdis: u,
          lowerFdis: h,
          fdis: f,
          originalFdis: c,
          finalFdis: d,
          teethWidth: s,
          bolton: a,
          movements: m,
          jawMovements: g,
          gumJumps: p,
          stepMetrics: v,
          attaches: w,
          iprs: y,
          mia: x,
          exts: E,
          staging: C,
          maxStep: A,
          bf: b,
          cbctType: new e4(e.Feature.CBCTCaseLabel),
          gumJumpSettingType: new e3(e.GumJumpSettingType),
          gumJumpUnClickable: new e3(e.GumJumpUnClickable),
        };
      }
      var e5 =
          (((z = e5 || {})[(z.DEFAULT = 0)] = "DEFAULT"),
          (z[(z.TARGET_MDF = 1)] = "TARGET_MDF"),
          z),
        e8 =
          (((H = e8 || {})[(H.NONE = 0)] = "NONE"),
          (H[(H.UPPER = 1)] = "UPPER"),
          (H[(H.LOWER = 2)] = "LOWER"),
          (H[(H.ALL = 3)] = "ALL"),
          H),
        e9 =
          (((G = e9 || {})[(G.SIMPLE = 0)] = "SIMPLE"),
          (G[(G.TABLE = 1)] = "TABLE"),
          G),
        te =
          (((V = te || {})[(V.Asian = 1)] = "Asian"),
          (V[(V.Caucasian = 2)] = "Caucasian"),
          V),
        tt =
          (((Z = tt || {})[(Z.QUALITY = 0)] = "QUALITY"),
          (Z[(Z.PERFORMANCE = 1)] = "PERFORMANCE"),
          (Z[(Z.COMPATIBILITY = 2)] = "COMPATIBILITY"),
          Z);
      function tn() {}
      let tl = (e) => e;
      function to(e) {
        return e();
      }
      function ti() {
        return Object.create(null);
      }
      function tr(e) {
        e.forEach(to);
      }
      function ts(e) {
        return "function" == typeof e;
      }
      function ta(e, t) {
        return e != e
          ? t == t
          : e !== t || (e && "object" == typeof e) || "function" == typeof e;
      }
      function tc(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1;
          l < t;
          l++
        )
          n[l - 1] = arguments[l];
        if (null == e) return tn;
        let o = e.subscribe(...n);
        return o.unsubscribe ? () => o.unsubscribe() : o;
      }
      function td(e) {
        let t;
        return (tc(e, (e) => (t = e))(), t);
      }
      function tu(e, t, n) {
        e.$$.on_destroy.push(tc(t, n));
      }
      function th(e, t, n, l) {
        if (e) {
          let o = tf(e, t, n, l);
          return e[0](o);
        }
      }
      function tf(e, t, n, l) {
        return e[1] && l
          ? (function (e, t) {
              for (let n in t) e[n] = t[n];
              return e;
            })(n.ctx.slice(), e[1](l(t)))
          : n.ctx;
      }
      function tm(e, t, n, l) {
        if (e[2] && l) {
          let o = e[2](l(n));
          if (void 0 === t.dirty) return o;
          if ("object" == typeof o) {
            let e = [],
              n = Math.max(t.dirty.length, o.length);
            for (let l = 0; l < n; l += 1) e[l] = t.dirty[l] | o[l];
            return e;
          }
          return t.dirty | o;
        }
        return t.dirty;
      }
      function tp(e, t, n, l, o, i) {
        if (o) {
          let r = tf(t, n, l, i);
          e.p(r, o);
        }
      }
      function tg(e) {
        if (e.ctx.length > 32) {
          let t = [],
            n = e.ctx.length / 32;
          for (let e = 0; e < n; e++) t[e] = -1;
          return t;
        }
        return -1;
      }
      function tv(e) {
        return null == e ? "" : e;
      }
      function tA(e) {
        return e && ts(e.destroy) ? e.destroy : tn;
      }
      function tw(e) {
        let t = "string" == typeof e && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
        return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
      }
      let tx = "undefined" != typeof window,
        ty = tx ? () => window.performance.now() : () => Date.now(),
        tE = tx ? (e) => requestAnimationFrame(e) : tn,
        tC = new Set();
      function tb(e) {
        (tC.forEach((t) => {
          t.c(e) || (tC.delete(t), t.f());
        }),
          0 !== tC.size && tE(tb));
      }
      function tT(e) {
        let t;
        return (
          0 === tC.size && tE(tb),
          {
            promise: new Promise((n) => {
              tC.add((t = { c: e, f: n }));
            }),
            abort() {
              tC.delete(t);
            },
          }
        );
      }
      let t$ = !1;
      function tI(e, t, n) {
        let l = tO(e);
        if (!l.getElementById(t)) {
          let e = tR("style");
          ((e.id = t), (e.textContent = n), tM(l, e));
        }
      }
      function tO(e) {
        if (!e) return document;
        let t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument;
      }
      function tM(e, t) {
        return (
          !(function (e, t) {
            e.appendChild(t);
          })(e.head || e, t),
          t.sheet
        );
      }
      function tD(e, t) {
        if (t$) {
          for (
            !(function (e) {
              if (e.hydrate_init) return;
              e.hydrate_init = !0;
              let t = e.childNodes;
              if ("HEAD" === e.nodeName) {
                let e = [];
                for (let n = 0; n < t.length; n++) {
                  let l = t[n];
                  void 0 !== l.claim_order && e.push(l);
                }
                t = e;
              }
              let n = new Int32Array(t.length + 1),
                l = new Int32Array(t.length);
              n[0] = -1;
              let o = 0;
              for (let e = 0; e < t.length; e++) {
                let i = t[e].claim_order,
                  r =
                    (o > 0 && t[n[o]].claim_order <= i
                      ? o + 1
                      : (function (e, t, n, l) {
                          for (; e < t; ) {
                            let o = e + ((t - e) >> 1);
                            n(o) <= l ? (e = o + 1) : (t = o);
                          }
                          return e;
                        })(1, o, (e) => t[n[e]].claim_order, i)) - 1;
                l[e] = n[r] + 1;
                let s = r + 1;
                ((n[s] = e), (o = Math.max(s, o)));
              }
              let i = [],
                r = [],
                s = t.length - 1;
              for (let e = n[o] + 1; 0 != e; e = l[e - 1]) {
                for (i.push(t[e - 1]); s >= e; s--) r.push(t[s]);
                s--;
              }
              for (; s >= 0; s--) r.push(t[s]);
              (i.reverse(), r.sort((e, t) => e.claim_order - t.claim_order));
              for (let t = 0, n = 0; t < r.length; t++) {
                for (; n < i.length && r[t].claim_order >= i[n].claim_order; )
                  n++;
                let l = n < i.length ? i[n] : null;
                e.insertBefore(r[t], l);
              }
            })(e),
              (void 0 === e.actual_end_child ||
                (null !== e.actual_end_child &&
                  e.actual_end_child.parentNode !== e)) &&
                (e.actual_end_child = e.firstChild);
            null !== e.actual_end_child &&
            void 0 === e.actual_end_child.claim_order;
          )
            e.actual_end_child = e.actual_end_child.nextSibling;
          t !== e.actual_end_child
            ? (void 0 !== t.claim_order || t.parentNode !== e) &&
              e.insertBefore(t, e.actual_end_child)
            : (e.actual_end_child = t.nextSibling);
        } else
          (t.parentNode !== e || null !== t.nextSibling) && e.appendChild(t);
      }
      function tk(e, t, n) {
        t$ && !n
          ? tD(e, t)
          : (t.parentNode !== e || t.nextSibling != n) &&
            e.insertBefore(t, n || null);
      }
      function tL(e) {
        e.parentNode && e.parentNode.removeChild(e);
      }
      function tN(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
      }
      function tR(e) {
        return document.createElement(e);
      }
      function tS(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function tB(e) {
        return document.createTextNode(e);
      }
      function tP() {
        return tB(" ");
      }
      function tU() {
        return tB("");
      }
      function tj(e, t, n, l) {
        return (
          e.addEventListener(t, n, l),
          () => e.removeEventListener(t, n, l)
        );
      }
      function tz(e) {
        return function (t) {
          return (t.preventDefault(), e.call(this, t));
        };
      }
      function tH(e) {
        return function (t) {
          return (t.stopPropagation(), e.call(this, t));
        };
      }
      function tG(e, t, n) {
        null == n
          ? e.removeAttribute(t)
          : e.getAttribute(t) !== n && e.setAttribute(t, n);
      }
      function tV(e) {
        return Array.from(e.childNodes);
      }
      function tZ(e) {
        void 0 === e.claim_info &&
          (e.claim_info = { last_index: 0, total_claimed: 0 });
      }
      function tF(e, t, n, l) {
        let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        tZ(e);
        let i = (() => {
          for (let l = e.claim_info.last_index; l < e.length; l++) {
            let i = e[l];
            if (t(i)) {
              let t = n(i);
              return (
                void 0 === t ? e.splice(l, 1) : (e[l] = t),
                o || (e.claim_info.last_index = l),
                i
              );
            }
          }
          for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
            let i = e[l];
            if (t(i)) {
              let t = n(i);
              return (
                void 0 === t ? e.splice(l, 1) : (e[l] = t),
                o
                  ? void 0 === t && e.claim_info.last_index--
                  : (e.claim_info.last_index = l),
                i
              );
            }
          }
          return l();
        })();
        return (
          (i.claim_order = e.claim_info.total_claimed),
          (e.claim_info.total_claimed += 1),
          i
        );
      }
      function tJ(e, t, n, l) {
        return tF(
          e,
          (e) => e.nodeName === t,
          (e) => {
            let t = [];
            for (let l = 0; l < e.attributes.length; l++) {
              let o = e.attributes[l];
              n[o.name] || t.push(o.name);
            }
            t.forEach((t) => e.removeAttribute(t));
          },
          () => l(t),
        );
      }
      function tY(e, t, n) {
        return tJ(e, t, n, tR);
      }
      function tK(e, t, n) {
        return tJ(e, t, n, tS);
      }
      function tW(e, t) {
        return tF(
          e,
          (e) => 3 === e.nodeType,
          (e) => {
            let n = "" + t;
            if (e.data.startsWith(n)) {
              if (e.data.length !== n.length) return e.splitText(n.length);
            } else e.data = n;
          },
          () => tB(t),
          !0,
        );
      }
      function tq(e) {
        return tW(e, " ");
      }
      function tQ(e, t, n) {
        for (let l = n; l < e.length; l += 1) {
          let n = e[l];
          if (8 === n.nodeType && n.textContent.trim() === t) return l;
        }
        return e.length;
      }
      function tX(e, t) {
        ((t = "" + t), e.data !== t && (e.data = t));
      }
      function t_(e, t) {
        e.value = null == t ? "" : t;
      }
      function t1(e, t, n, l) {
        null == n
          ? e.style.removeProperty(t)
          : e.style.setProperty(t, n, l ? "important" : "");
      }
      function t0(e, t, n) {
        e.classList[n ? "add" : "remove"](t);
      }
      function t2(e, t) {
        let { bubbles: n = !1, cancelable: l = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = document.createEvent("CustomEvent");
        return (o.initCustomEvent(e, n, l, t), o);
      }
      class t3 {
        c(e) {
          this.h(e);
        }
        m(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          (this.e ||
            (this.is_svg
              ? (this.e = tS(t.nodeName))
              : (this.e = tR(11 === t.nodeType ? "TEMPLATE" : t.nodeName)),
            (this.t = "TEMPLATE" !== t.tagName ? t : t.content),
            this.c(e)),
            this.i(n));
        }
        h(e) {
          ((this.e.innerHTML = e),
            (this.n = Array.from(
              "TEMPLATE" === this.e.nodeName
                ? this.e.content.childNodes
                : this.e.childNodes,
            )));
        }
        i(e) {
          for (let t = 0; t < this.n.length; t += 1)
            !(function (e, t, n) {
              e.insertBefore(t, n || null);
            })(this.t, this.n[t], e);
        }
        p(e) {
          (this.d(), this.h(e), this.i(this.a));
        }
        d() {
          this.n.forEach(tL);
        }
        constructor(e = !1) {
          ((this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null));
        }
      }
      class t4 extends t3 {
        c(e) {
          this.l ? (this.n = this.l) : super.c(e);
        }
        i(e) {
          for (let t = 0; t < this.n.length; t += 1) tk(this.t, this.n[t], e);
        }
        constructor(e, t = !1) {
          (super(t), (this.e = this.n = null), (this.l = e));
        }
      }
      let t7 = new Map(),
        t6 = 0;
      function t5(e, t, n, l, o, i, r) {
        let s =
            arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          a = 16.666 / l,
          c = "{\n";
        for (let e = 0; e <= 1; e += a) {
          let l = t + (n - t) * i(e);
          c += 100 * e + "%{".concat(r(l, 1 - l), "}\n");
        }
        let d = c + "100% {".concat(r(n, 1 - n), "}\n}"),
          u = "__svelte_"
            .concat(
              (function (e) {
                let t = 5381,
                  n = e.length;
                for (; n--; ) t = ((t << 5) - t) ^ e.charCodeAt(n);
                return t >>> 0;
              })(d),
              "_",
            )
            .concat(s),
          h = tO(e),
          { stylesheet: f, rules: m } =
            t7.get(h) ||
            (function (e, t) {
              let n = {
                stylesheet: (function (e) {
                  let t = tR("style");
                  return (tM(tO(e), t), t.sheet);
                })(t),
                rules: {},
              };
              return (t7.set(e, n), n);
            })(h, e);
        m[u] ||
          ((m[u] = !0),
          f.insertRule(
            "@keyframes ".concat(u, " ").concat(d),
            f.cssRules.length,
          ));
        let p = e.style.animation || "";
        return (
          (e.style.animation = ""
            .concat(p ? "".concat(p, ", ") : "")
            .concat(u, " ")
            .concat(l, "ms linear ")
            .concat(o, "ms 1 both")),
          (t6 += 1),
          u
        );
      }
      function t8(e, t) {
        let n = (e.style.animation || "").split(", "),
          l = n.filter(
            t ? (e) => 0 > e.indexOf(t) : (e) => -1 === e.indexOf("__svelte"),
          ),
          o = n.length - l.length;
        !o ||
          ((e.style.animation = l.join(", ")),
          (t6 -= o) ||
            tE(() => {
              t6 ||
                (t7.forEach((e) => {
                  let { ownerNode: t } = e.stylesheet;
                  t && tL(t);
                }),
                t7.clear());
            }));
      }
      function t9() {
        if (!o) throw Error("Function called outside component initialization");
        return o;
      }
      function ne(e) {
        t9().$$.on_mount.push(e);
      }
      function nt(e) {
        t9().$$.on_destroy.push(e);
      }
      function nn() {
        let e = t9();
        return function (t, n) {
          let { cancelable: l = !1 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = e.$$.callbacks[t];
          if (o) {
            let i = t2(t, n, { cancelable: l });
            return (
              o.slice().forEach((t) => {
                t.call(e, i);
              }),
              !i.defaultPrevented
            );
          }
          return !0;
        };
      }
      function nl(e, t) {
        let n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e) => e.call(this, t));
      }
      let no = [],
        ni = [],
        nr = [],
        ns = [],
        na = Promise.resolve(),
        nc = !1;
      function nd(e) {
        nr.push(e);
      }
      function nu(e) {
        ns.push(e);
      }
      let nh = new Set(),
        nf = 0;
      function nm() {
        if (0 !== nf) return;
        let e = o;
        do {
          try {
            for (; nf < no.length; ) {
              let e = no[nf];
              (nf++,
                (o = e),
                (function (e) {
                  if (null !== e.fragment) {
                    (e.update(), tr(e.before_update));
                    let t = e.dirty;
                    ((e.dirty = [-1]),
                      e.fragment && e.fragment.p(e.ctx, t),
                      e.after_update.forEach(nd));
                  }
                })(e.$$));
            }
          } catch (e) {
            throw ((no.length = 0), (nf = 0), e);
          }
          for (o = null, no.length = 0, nf = 0; ni.length; ) ni.pop()();
          for (let e = 0; e < nr.length; e += 1) {
            let t = nr[e];
            nh.has(t) || (nh.add(t), t());
          }
          nr.length = 0;
        } while (no.length);
        for (; ns.length; ) ns.pop()();
        ((nc = !1), nh.clear(), (o = e));
      }
      function np() {
        return (
          i ||
            (i = Promise.resolve()).then(() => {
              i = null;
            }),
          i
        );
      }
      function ng(e, t, n) {
        e.dispatchEvent(t2("".concat(t ? "intro" : "outro").concat(n)));
      }
      let nv = new Set();
      function nA() {
        r = { r: 0, c: [], p: r };
      }
      function nw() {
        (r.r || tr(r.c), (r = r.p));
      }
      function nx(e, t) {
        e && e.i && (nv.delete(e), e.i(t));
      }
      function ny(e, t, n, l) {
        e && e.o
          ? nv.has(e) ||
            (nv.add(e),
            r.c.push(() => {
              (nv.delete(e), l && (n && e.d(1), l()));
            }),
            e.o(t))
          : l && l();
      }
      let nE = { duration: 0 };
      function nC(e, t, n) {
        let l, o;
        let i = { direction: "in" },
          r = t(e, n, i),
          s = !1,
          a = 0;
        function c() {
          let {
            delay: t = 0,
            duration: n = 300,
            easing: i = tl,
            tick: c = tn,
            css: d,
          } = r || nE;
          (d && (l = t5(e, 0, 1, n, t, i, d, a++)), c(0, 1));
          let u = ty() + t,
            h = u + n;
          (o && o.abort(),
            (s = !0),
            nd(() => ng(e, !0, "start")),
            (o = tT((t) => {
              if (s) {
                if (t >= h)
                  return (c(1, 0), ng(e, !0, "end"), l && t8(e, l), (s = !1));
                if (t >= u) {
                  let e = i((t - u) / n);
                  c(e, 1 - e);
                }
              }
              return s;
            })));
        }
        let d = !1;
        return {
          start() {
            d || ((d = !0), t8(e), ts(r) ? ((r = r(i)), np().then(c)) : c());
          },
          invalidate() {
            d = !1;
          },
          end() {
            s && (l && t8(e, l), (s = !1));
          },
        };
      }
      function nb(e, t, n, l) {
        let o = { direction: "both" },
          i = t(e, n, o),
          s = l ? 0 : 1,
          a = null,
          c = null,
          d = null;
        function u() {
          d && t8(e, d);
        }
        function h(e, t) {
          let n = e.b - s;
          return (
            (t *= Math.abs(n)),
            {
              a: s,
              b: e.b,
              d: n,
              duration: t,
              start: e.start,
              end: e.start + t,
              group: e.group,
            }
          );
        }
        function f(t) {
          let {
              delay: n = 0,
              duration: l = 300,
              easing: o = tl,
              tick: f = tn,
              css: m,
            } = i || nE,
            p = { start: ty() + n, b: t };
          (t || ((p.group = r), (r.r += 1)),
            a || c
              ? (c = p)
              : (m && (u(), (d = t5(e, s, t, l, n, o, m))),
                t && f(0, 1),
                (a = h(p, l)),
                nd(() => ng(e, t, "start")),
                tT((t) => {
                  if (
                    (c &&
                      t > c.start &&
                      ((a = h(c, l)),
                      (c = null),
                      ng(e, a.b, "start"),
                      m && (u(), (d = t5(e, s, a.b, a.duration, 0, o, i.css)))),
                    a)
                  ) {
                    if (t >= a.end)
                      (f((s = a.b), 1 - s),
                        ng(e, a.b, "end"),
                        c || (a.b ? u() : --a.group.r || tr(a.group.c)),
                        (a = null));
                    else if (t >= a.start) {
                      let e = t - a.start;
                      f((s = a.a + a.d * o(e / a.duration)), 1 - s);
                    }
                  }
                  return !!(a || c);
                })));
        }
        return {
          run(e) {
            ts(i)
              ? np().then(() => {
                  ((i = i(o)), f(e));
                })
              : f(e);
          },
          end() {
            (u(), (a = c = null));
          },
        };
      }
      function nT(e, t, n) {
        let l = e.$$.props[t];
        void 0 !== l && ((e.$$.bound[l] = n), n(e.$$.ctx[l]));
      }
      function n$(e) {
        e && e.c();
      }
      function nI(e, t) {
        e && e.l(t);
      }
      function nO(e, t, n, l) {
        let { fragment: o, after_update: i } = e.$$;
        (o && o.m(t, n),
          l ||
            nd(() => {
              let t = e.$$.on_mount.map(to).filter(ts);
              (e.$$.on_destroy ? e.$$.on_destroy.push(...t) : tr(t),
                (e.$$.on_mount = []));
            }),
          i.forEach(nd));
      }
      function nM(e, t) {
        let n = e.$$;
        null !== n.fragment &&
          (!(function (e) {
            let t = [],
              n = [];
            (nr.forEach((l) => (-1 === e.indexOf(l) ? t.push(l) : n.push(l))),
              n.forEach((e) => e()),
              (nr = t));
          })(n.after_update),
          tr(n.on_destroy),
          n.fragment && n.fragment.d(t),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      }
      function nD(e, t, n, l, i, r, s) {
        let a =
            arguments.length > 7 && void 0 !== arguments[7]
              ? arguments[7]
              : [-1],
          c = o;
        o = e;
        let d = (e.$$ = {
          fragment: null,
          ctx: [],
          props: r,
          update: tn,
          not_equal: i,
          bound: ti(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(t.context || (c ? c.$$.context : [])),
          callbacks: ti(),
          dirty: a,
          skip_bound: !1,
          root: t.target || c.$$.root,
        });
        s && s(d.root);
        let u = !1;
        if (
          ((d.ctx = n
            ? n(e, t.props || {}, function (t, n) {
                for (
                  var l = arguments.length, o = Array(l > 2 ? l - 2 : 0), r = 2;
                  r < l;
                  r++
                )
                  o[r - 2] = arguments[r];
                let s = o.length ? o[0] : n;
                return (
                  d.ctx &&
                    i(d.ctx[t], (d.ctx[t] = s)) &&
                    (!d.skip_bound && d.bound[t] && d.bound[t](s), u) &&
                    (-1 === e.$$.dirty[0] &&
                      (no.push(e),
                      nc || ((nc = !0), na.then(nm)),
                      e.$$.dirty.fill(0)),
                    (e.$$.dirty[(t / 31) | 0] |= 1 << (t % 31))),
                  n
                );
              })
            : []),
          d.update(),
          (u = !0),
          tr(d.before_update),
          (d.fragment = !!l && l(d.ctx)),
          t.target)
        ) {
          if (t.hydrate) {
            t$ = !0;
            let e = tV(t.target);
            (d.fragment && d.fragment.l(e), e.forEach(tL));
          } else d.fragment && d.fragment.c();
          (t.intro && nx(e.$$.fragment),
            nO(e, t.target, t.anchor, t.customElement),
            (t$ = !1),
            nm());
        }
        o = c;
      }
      class nk {
        $destroy() {
          (nM(this, 1), (this.$destroy = tn));
        }
        $on(e, t) {
          if (!ts(t)) return tn;
          let n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return (
            n.push(t),
            () => {
              let e = n.indexOf(t);
              -1 !== e && n.splice(e, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            0 !== Object.keys(e).length &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      }
      let nL = [];
      function nN(e, t) {
        return { subscribe: nR(e, t).subscribe };
      }
      function nR(e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tn,
          l = new Set();
        function o(n) {
          if (ta(e, n) && ((e = n), t)) {
            let t = !nL.length;
            for (let t of l) (t[1](), nL.push(t, e));
            if (t) {
              for (let e = 0; e < nL.length; e += 2) nL[e][0](nL[e + 1]);
              nL.length = 0;
            }
          }
        }
        return {
          set: o,
          update: function (t) {
            o(t(e));
          },
          subscribe: function (i) {
            let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : tn,
              s = [i, r];
            return (
              l.add(s),
              1 === l.size && (t = n(o) || tn),
              i(e),
              () => {
                (l.delete(s), 0 === l.size && t && (t(), (t = null)));
              }
            );
          },
        };
      }
      function nS(e, t, n) {
        let l = !Array.isArray(e),
          o = l ? [e] : e,
          i = t.length < 2;
        return nN(n, (e) => {
          let n = !1,
            r = [],
            s = 0,
            a = tn,
            c = () => {
              if (s) return;
              a();
              let n = t(l ? r[0] : r, e);
              i ? e(n) : (a = ts(n) ? n : tn);
            },
            d = o.map((e, t) =>
              tc(
                e,
                (e) => {
                  ((r[t] = e), (s &= ~(1 << t)), n && c());
                },
                () => {
                  s |= 1 << t;
                },
              ),
            );
          return (
            (n = !0),
            c(),
            function () {
              (tr(d), a(), (n = !1));
            }
          );
        });
      }
      let nB = (e) => new Promise((t) => setTimeout(t, e)),
        nP = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (e) => t.forEach((t) => t(e));
        };
      function nU(e) {
        return function (t) {
          for (
            var n = arguments.length, l = Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            l[o - 1] = arguments[o];
          if (!l.length) return i;
          return i(...l);
          function i() {
            for (var n = arguments.length, l = Array(n), o = 0; o < n; o++)
              l[o] = arguments[o];
            return e(t, ...l);
          }
        };
      }
      let nj = nU((e, t) =>
          [].concat(e).reduce((e, t) => (null == e ? void 0 : e[t]), t),
        ),
        nz = (e, t) => (e != e ? t == t : e !== t);
      function nH(e) {
        return function (t) {
          return typeof t === e;
        };
      }
      let nG = nH("undefined");
      function nV(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null === e || nG(e) || !nH("object")(e)
          ? t
          : n
            ? Object.assign(e, t)
            : Object.assign({}, e, t);
      }
      function nZ(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = e;
        for (; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      Array.isArray.bind(Array);
      let nF = (e, t) => {
          if (!(nZ(e) && nZ(t))) return e === t;
          let n = Object.keys(e).sort(),
            l = Object.keys(t).sort();
          return (
            n.length === l.length &&
            n.join() === l.join() &&
            n.every((n) => nF(e[n], t[n]))
          );
        },
        nJ = (e, t) => {
          if (!e || !t) return t;
          let n = {};
          for (let l in t) nz(null == e ? void 0 : e[l], t[l]) && (n[l] = t[l]);
          return n;
        };
      function nY(e, t, n, l) {
        return (
          e.addEventListener(t, n, l),
          () => e.removeEventListener(t, n, l)
        );
      }
      function nK() {
        var e, t, n;
        return null !=
          (n =
            null == (t = null == (e = window.performance) ? void 0 : e.now)
              ? void 0
              : t.call(e))
          ? n
          : Date.now();
      }
      function nW(e) {
        var t;
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          l = [0, 0, 0];
        if ("string" == typeof e) {
          if (e.startsWith("#"))
            7 === e.length
              ? (l = [
                  parseInt(e.slice(1, 3), 16),
                  parseInt(e.slice(3, 5), 16),
                  parseInt(e.slice(5, 7), 16),
                ])
              : 4 === e.length &&
                (l = e
                  .slice(1)
                  .split("")
                  .map((e) => parseInt(e + e, 16)));
          else if (e.startsWith("rgb")) {
            let [n = "0", o = "0", i = "0"] =
              null != (t = e.match(/\d+/g)) ? t : [];
            l = [parseInt(n), parseInt(o), parseInt(i)];
          }
        } else l = e;
        return n ? l.map((e) => Number((e / 255).toFixed(6))) : l;
      }
      function nq(e) {
        let [t, n, l] = nW(e, !1);
        if ([t, n, l].some((e) => Number.isNaN(e)))
          throw Error("Invalid hex color: ".concat(e));
        return 0.299 * t + 0.587 * n + 0.114 * l;
      }
      function nQ(e) {
        let {
          light: t = "#ffffff",
          dark: n = "#000000",
          threshold: l,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!l) {
          let e = nq(t),
            o = nq(n);
          null != l || (l = (e + o) / 2);
        }
        return nq(e) > l ? n : t;
      }
      let nX = Symbol("gpu-info-unset"),
        n_ = () => {
          var e;
          if ("symbol" != typeof nX) return nX;
          try {
            let t = document.createElement("canvas"),
              n =
                null != (e = t.getContext("webgl2"))
                  ? e
                  : t.getContext("webgl");
            if (!n) return (nX = "WebGLNotSupported");
            let l = n.getExtension("WEBGL_debug_renderer_info");
            if (!l) return (nX = "");
            let o = n.getParameter(l.UNMASKED_VENDOR_WEBGL),
              i = n.getParameter(l.UNMASKED_RENDERER_WEBGL);
            return (nX = "".concat(o, " / ").concat(i));
          } catch (e) {
            return (nX = "");
          }
        },
        n1 = (() => {
          let e = n_();
          return (
            console.log("GPU Info", e),
            !e || /NotSupported|SwiftShader/i.test(e)
          );
        })();
      console.log("IS_RENDER_BY_CPU", n1);
      let n0 =
        2 ===
        (() => {
          if (n1) return 1;
          try {
            if (
              document.createElement("canvas").getContext("webgl2") &&
              "undefined" != typeof WebGL2RenderingContext
            )
              return 2;
          } catch (e) {}
          return 1;
        })();
      function n2(e) {
        return JSON.parse(e);
      }
      var n3 = { parse: n2 };
      let n4 = [
          "fdi",
          "attachment",
          "ipr",
          "toothRoot",
          "jawbone",
          "grid",
          "overlying",
          "contact",
          "tma",
          "simGum",
        ],
        n7 = ["movement", "cover", "bolton", "deviation", "archWidth"],
        n6 = {
          fdi: "FDI",
          attachment: "Attachment",
          ipr: "IPR",
          toothRoot: "ToothRoot",
          jawbone: "JawBone",
          grid: "Grid",
          overlying: "Superim",
          contact: "Occlusion",
          tma: "TMA",
          simGum: "RealGum",
        },
        n5 = ["t_z", "t_y", "t_x", "r_z", "r_y", "r_x"],
        n8 = {
          t_z: ["ext_z", "int_z"],
          t_x: ["trans_x"],
          t_y: ["trans_y"],
          r_z: ["rot_z"],
          r_x: ["rot_x"],
          r_y: ["rot_y"],
        },
        n9 = {
          [eP.NORMAL]: "",
          [eP.MODERATE]: "#f4b740",
          [eP.CHALLENGING]: "#ed2e7e",
        };
      function le(e, t) {
        if (!t) return e;
        for (let n of n5) {
          let l = e[n];
          for (let e of n8[n]) {
            let n = t["warnLevel_".concat(e)],
              o = t["warnText_".concat(e)];
            if (n !== eP.NORMAL) {
              ((l.t = o), (l.c = n9[n]));
              break;
            }
          }
        }
        return e;
      }
      let lt = { t_x: 0, t_y: 1, t_z: 2, r_x: 4, r_y: 3, r_z: 5 },
        ln = n5.reduce((e, t) => ({ ...e, [t]: { d: "", v: "" } }), {}),
        ll = (e, t, n) => {
          var l, o;
          let i = new Map(),
            r = new Map(e.crown_items.map((e) => [e.id, e])),
            s = new Map(e.center_items.map((e) => [e.id, e])),
            a = new Map(e.root_items.map((e) => [e.id, e])),
            c = new Map(
              null !=
                (o =
                  null == (l = e.toothMovementAssessment)
                    ? void 0
                    : l.map((e) => [e.fdi, e]))
                ? o
                : [],
            );
          return (
            [...r.keys()].forEach((e) => {
              let l = c.get(e);
              i.set(e, {
                center: n ? s.get(e) : le(s.get(e), l),
                crown: n
                  ? (function (e, t, n) {
                      var l;
                      if (!n || n.deviationStep !== t) return e;
                      let { deviationColor: o, deviationData: i } = n,
                        r =
                          null == (l = null == i ? void 0 : i.teethBias)
                            ? void 0
                            : l.find((t) => t.toothId === e.id),
                        s = null == r ? void 0 : r.biasStatus,
                        a = null == r ? void 0 : r.designProminent;
                      if (!s || !o) return e;
                      let c = [o[0], o[1], "#F5A954", o[3]];
                      for (let t of n5) {
                        let n = e[t],
                          l = lt[t],
                          o = s[l],
                          i = null == a ? void 0 : a[l],
                          r = -1;
                        (o > 0 && (r = o),
                          0 === o && 1 === i && (r = 0),
                          o < 0 && (r = 3));
                        let d = c[r] || "#f5f0f5";
                        n.c = d;
                      }
                      return e;
                    })(r.get(e), t, n)
                  : le(r.get(e), l),
                tip: n ? a.get(e) : le(a.get(e), l),
                tma: n ? void 0 : l,
              });
            }),
            i
          );
        },
        lo = (e, t, n) => ll(n3.parse(e.GetMotionComponentTable(t)), t, n),
        li = (e, t) => {
          let {
            r_x: n = { v: "0.0\xb0", d: "" },
            r_y: l = { v: "0.0\xb0", d: "" },
            r_z: o = { v: "0.0\xb0", d: "" },
            t_x: i = { v: "0.0", d: "" },
            t_y: r = { v: "0.0", d: "" },
            t_z: s = { v: "0.0", d: "" },
          } = t;
          return Object.entries({
            t_z: s,
            t_y: r,
            t_x: i,
            r_z: o,
            r_y: l,
            r_x: n,
          }).reduce((t, n) => {
            let [l, o] = n,
              i = o.v,
              r = o.d,
              s = (r && e.t("movement.dir.".concat(r))) || "-",
              a = (l && e.t("movement.method.".concat(l))) || "";
            return Object.assign(t, {
              [l]: { value: i, symbol: r, dir: s, method: a },
            });
          }, {});
        },
        lr = (e) => (e ? "".concat(null == e ? void 0 : e.v).trim() : null),
        ls = (e) => (e ? " ".concat(null == e ? void 0 : e.d) : ""),
        la = (e, t, n) => {
          let l = n3.parse(e.GetMotionComponentOriginStepBased(t, n));
          return { center: l.center, crown: l.crown, tip: l.root };
        },
        lc = (e) => {
          var t, n, l;
          let {
            main: o,
            mdf: i,
            side: r,
            _movementType: s,
            _configuration: a,
          } = e.value;
          if (!o || !o.analysis || (i.working && i.entering)) return;
          let { working: c } = i;
          if (s === e9.TABLE) {
            if (c) {
              let n = lo(
                i.__,
                null == (t = null == i ? void 0 : i.__)
                  ? void 0
                  : t.GetTotalStep(),
              );
              e.updateMdf({ stepMovement: n });
              return;
            }
            if (
              (null == (n = a.wasmInstanceInit)
                ? void 0
                : n.is_deviation_analysis) &&
              r &&
              r.analysis
            ) {
              let t = r.step,
                n = lo(r.__, t, a);
              e.updateMain({ stepMovement: n });
              return;
            }
            let l = lo(o.__, o.step);
            e.updateMain({ stepMovement: l });
            return;
          }
          if (c) {
            let t = la(
              i.__,
              e.value.selectedFdi,
              null == (l = null == i ? void 0 : i.__)
                ? void 0
                : l.GetTotalStep(),
            );
            e.updateMdf({ singleStepMovement: t });
          } else {
            let t = la(o.__, e.value.selectedFdi, o.step);
            e.updateMain({ singleStepMovement: t });
          }
        },
        ld = (e) => {
          var t, n, l, o;
          let { main: i, mdf: r } = e.value;
          if (!i || !i.analysis || (r.working && r.entering)) return [];
          let s = r.working ? r.__.GetOverbite() : i.__.GetOverbite(),
            a = r.working ? r.__.GetOverjet() : i.__.GetOverjet(),
            c = JSON.parse(s).ori_step,
            d = JSON.parse(s).final_step,
            u = JSON.parse(a).ori_ave,
            h = JSON.parse(a).final_ave;
          return [
            {
              value: Number(null == c ? void 0 : c.value),
              fdiA: null != (t = null == c ? void 0 : c.tid) ? t : "",
              fdiB: null != (n = null == c ? void 0 : c.tid_aux) ? n : "",
            },
            {
              value: Number(null == d ? void 0 : d.value),
              fdiA: null != (l = null == d ? void 0 : d.tid) ? l : "",
              fdiB: null != (o = null == d ? void 0 : d.tid_aux) ? o : "",
            },
            { value: Number(u) },
            { value: Number(h) },
          ];
        };
      function lu(e) {
        let { toggle: t, toggleEnabled: n } = e.value;
        n.cover && t.cover && e.update({ overbite: ld(e) });
      }
      let lh = "url(data:image/svg+xml;base64,".concat(
          btoa(
            unescape(
              encodeURIComponent(
                '<svg t="1650941219420" class="icon" viewBox="0 0 1479 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4502" width="32" height="32"><path d="M343.25 394.81250019c0-98.43750027 79.68749991-178.12500018 178.12500018-178.12500019h356.24999955c98.43750027 0 178.12500018 79.68749991 178.12500018 178.12500019 0 32.81249981-28.12499973 60.93750037-60.93749954 60.93749954h-215.6250001v117.18750064h285.93749982c37.49999991 0 70.31249973 32.81249981 70.31249972 70.31249972v93.75000018c0 37.49999991-32.81249981 70.31249973-70.31249972 70.31249973H338.56249991c-37.49999991 0-70.31249973-32.81249981-70.31249972-70.31249973v-93.75000018c0-37.49999991 32.81249981-70.31249973 70.31249972-70.31249972h285.93749982V451.06249963H404.18750037c-32.81249981 0-60.93750037-23.43749963-60.93750037-56.24999945z" fill="#46A5E1" p-id="4503"></path></svg>',
              ),
            ),
          ),
          ") 16 16, auto",
        ),
        lf = (e) =>
          e.tapInstance((t) => {
            let n = n3.parse(t.tools.GetPickedShell() || "null");
            if (!n) {
              let t = e.value.mdf.toolType === ew.ATTACHMENT ? -2 : -1;
              e.update((e) => {
                let { mdf: n } = e;
                return { selectedFdi: t, mdf: nV(n, { isMovable: !1 }) };
              });
              return;
            }
            if ("attach" in n)
              e.update((e) => {
                let { mdf: t } = e;
                return { selectedFdi: -2, mdf: nV(t, { isMovable: !1 }) };
              });
            else if ("tooth" in n) {
              let { id: t, isMovable: l } = n.tooth,
                o = e.getMPRPositionByFDI(t);
              e.update((e) => {
                let { mdf: n } = e;
                return {
                  selectedFdi: t,
                  selectedMPRPosition: o,
                  mdf: nV(n, { isMovable: l }),
                };
              });
            } else {
              let t = e.value.mdf.toolType === ew.ATTACHMENT ? -2 : -1;
              e.update((e) => {
                let { mdf: n } = e;
                return { selectedFdi: t, mdf: nV(n, { isMovable: !1 }) };
              });
            }
          });
      function lm(e) {
        tI(
          e,
          "svelte-1hpc3tj",
          ".sm-button.svelte-1hpc3tj{user-select:none;cursor:pointer;border:1px solid #eff0f7;border-radius:8px;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;font-size:12px;line-height:18px;color:var(--color, #4e4b66);position:relative;overflow:hidden;background:var(--background, unset)}.sm-button.svelte-1hpc3tj::after{content:'';position:absolute;left:0;top:0;display:block;width:100%;height:100%}.sm-button.disabled.svelte-1hpc3tj{cursor:not-allowed !important;background:unset !important;border-color:#eff0f7 !important;color:#a0a3bd !important}.sm-button:not(.disabled).primary.svelte-1hpc3tj{box-shadow:-2px -2px 5px #fcfcfc, 2px 2px 5px #d9dbe9}.sm-button.svelte-1hpc3tj:not(.disabled):hover{border:1px solid #0086cd !important}.sm-button.svelte-1hpc3tj:not(.disabled):active,.sm-button:not(.disabled).active.svelte-1hpc3tj{border:none;box-shadow:inset -2px -2px 5px #ffffff, inset 2px 2px 5px #bebfc8}.sm-button.secondary.svelte-1hpc3tj:not(.disabled):active,.sm-button.secondary:not(.disabled).active.svelte-1hpc3tj{border:none !important;box-shadow:none;background:#d9dbe9}",
        );
      }
      function lp(e) {
        let t, n, l, o, i;
        let r = e[12].default,
          s = th(r, e, e[11], null);
        return {
          c() {
            ((t = tR("div")), s && s.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { title: !0, class: !0, style: !0 })));
            (s && s.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "title", e[7]),
              tG(t, "class", tv("sm-button") + " svelte-1hpc3tj"),
              tG(
                t,
                "style",
                (n = "width: " + e[0] + "; height: " + e[1] + "; " + e[2]),
              ),
              t0(t, "disabled", e[3]),
              t0(t, "active", e[4]),
              t0(t, "primary", e[5]),
              t0(t, "secondary", e[6]),
              t1(t, "--color", e[8]),
              t1(t, "--background", e[9]));
          },
          m(n, r) {
            (tk(n, t, r),
              s && s.m(t, null),
              (l = !0),
              o ||
                ((i = [
                  tj(t, "mousedown", tH(e[13])),
                  tj(t, "touchstart", tH(e[14])),
                  tj(t, "touchend", tH(e[15])),
                  tj(t, "click", e[10]),
                ]),
                (o = !0)));
          },
          p(e, o) {
            let [i] = o;
            (s &&
              s.p &&
              (!l || 2048 & i) &&
              tp(s, r, e, e[11], l ? tm(r, e[11], i, null) : tg(e[11]), null),
              (!l || 128 & i) && tG(t, "title", e[7]),
              (!l ||
                (7 & i &&
                  n !==
                    (n =
                      "width: " + e[0] + "; height: " + e[1] + "; " + e[2]))) &&
                tG(t, "style", n),
              (!l || 8 & i) && t0(t, "disabled", e[3]),
              (!l || 16 & i) && t0(t, "active", e[4]),
              (!l || 32 & i) && t0(t, "primary", e[5]),
              (!l || 64 & i) && t0(t, "secondary", e[6]));
            let a = 7 & i;
            ((a || 263 & i) && t1(t, "--color", e[8]),
              (a || 519 & i) && t1(t, "--background", e[9]));
          },
          i(e) {
            l || (nx(s, e), (l = !0));
          },
          o(e) {
            (ny(s, e), (l = !1));
          },
          d(e) {
            (e && tL(t), s && s.d(e), (o = !1), tr(i));
          },
        };
      }
      function lg(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          i = nn(),
          { width: r = "120px" } = t,
          { height: s = "30px" } = t,
          { style: a = "" } = t,
          { disabled: c = !1 } = t,
          { active: d = !1 } = t,
          { primary: u = !1 } = t,
          { secondary: h = !1 } = t,
          { title: f = "" } = t,
          { color: m = "" } = t,
          { background: p = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (r = e.width)),
              "height" in e && n(1, (s = e.height)),
              "style" in e && n(2, (a = e.style)),
              "disabled" in e && n(3, (c = e.disabled)),
              "active" in e && n(4, (d = e.active)),
              "primary" in e && n(5, (u = e.primary)),
              "secondary" in e && n(6, (h = e.secondary)),
              "title" in e && n(7, (f = e.title)),
              "color" in e && n(8, (m = e.color)),
              "background" in e && n(9, (p = e.background)),
              "$$scope" in e && n(11, (o = e.$$scope)));
          }),
          [
            r,
            s,
            a,
            c,
            d,
            u,
            h,
            f,
            m,
            p,
            (e) => {
              c || i("click", e);
            },
            o,
            l,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class lv extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              lg,
              lp,
              ta,
              {
                width: 0,
                height: 1,
                style: 2,
                disabled: 3,
                active: 4,
                primary: 5,
                secondary: 6,
                title: 7,
                color: 8,
                background: 9,
              },
              lm,
            ));
        }
      }
      function lA(e) {
        let t, n;
        let l = e[5].default,
          o = th(l, e, e[4], null);
        return {
          c() {
            ((t = tS("svg")), o && o.c(), this.h());
          },
          l(e) {
            var n = tV(
              (t = tK(e, "svg", {
                xmlns: !0,
                class: !0,
                style: !0,
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
              })),
            );
            (o && o.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "xmlns", "http://www.w3.org/2000/svg"),
              tG(t, "class", "sm-svg"),
              tG(t, "style", e[2]),
              tG(t, "width", e[0]),
              tG(t, "height", e[1]),
              tG(t, "viewBox", e[3]),
              tG(t, "fill", "none"));
          },
          m(e, l) {
            (tk(e, t, l), o && o.m(t, null), (n = !0));
          },
          p(e, i) {
            let [r] = i;
            (o &&
              o.p &&
              (!n || 16 & r) &&
              tp(o, l, e, e[4], n ? tm(l, e[4], r, null) : tg(e[4]), null),
              (!n || 4 & r) && tG(t, "style", e[2]),
              (!n || 1 & r) && tG(t, "width", e[0]),
              (!n || 2 & r) && tG(t, "height", e[1]),
              (!n || 8 & r) && tG(t, "viewBox", e[3]));
          },
          i(e) {
            n || (nx(o, e), (n = !0));
          },
          o(e) {
            (ny(o, e), (n = !1));
          },
          d(e) {
            (e && tL(t), o && o.d(e));
          },
        };
      }
      function lw(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          { width: i } = t,
          { height: r } = t,
          { style: s } = t,
          { viewBox: a } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (i = e.width)),
              "height" in e && n(1, (r = e.height)),
              "style" in e && n(2, (s = e.style)),
              "viewBox" in e && n(3, (a = e.viewBox)),
              "$$scope" in e && n(4, (o = e.$$scope)));
          }),
          [i, r, s, a, o, l]
        );
      }
      class lx extends nk {
        constructor(e) {
          (super(),
            nD(this, e, lw, lA, ta, {
              width: 0,
              height: 1,
              style: 2,
              viewBox: 3,
            }));
        }
      }
      function ly(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("path")), (n = tP()), (l = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M6 6L18.7742 18.7742"),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"),
              tG(l, "d", "M6 18.7744L18.7742 6.00022"),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "2"),
              tG(l, "stroke-linecap", "round"),
              tG(l, "stroke-linejoin", "round"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (1 & n && tG(t, "stroke", e[0]), 1 & n && tG(l, "stroke", e[0]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function lE(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 24 24",
              $$slots: { default: [ly] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function lC(e, t, n) {
        let { color: l = "#333" } = t,
          { width: o = 14 } = t,
          { height: i = 14 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class lb extends nk {
        constructor(e) {
          (super(),
            nD(this, e, lC, lE, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function lT(e) {
        tI(
          e,
          "svelte-y9g4u2",
          ".sm-confirm.svelte-y9g4u2.svelte-y9g4u2{position:fixed;left:0;top:0;bottom:0;right:0;z-index:500;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;user-select:none}.sm-mask.svelte-y9g4u2.svelte-y9g4u2{position:absolute;left:0;top:0;z-index:-1;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4)}.sm-confirm-container.svelte-y9g4u2.svelte-y9g4u2{border:1px solid rgb(228, 231, 237);box-shadow:0 0 6px 0 rgba(130, 130, 130, 0.65);padding:30px;background-color:#fff;border-radius:16px;max-width:80%;max-height:80%;display:flex;flex-direction:column;position:relative}.sm-confirm-title.svelte-y9g4u2.svelte-y9g4u2{font-size:16px;color:#333;line-height:16px}.sm-confirm-content.svelte-y9g4u2.svelte-y9g4u2{font-size:14px;color:#666;line-height:20px;flex:1;overflow-y:auto}.sm-confirm-title.svelte-y9g4u2+.sm-confirm-content.svelte-y9g4u2{margin-top:12px}.sm-confirm-buttons.svelte-y9g4u2.svelte-y9g4u2{margin-top:32px;display:flex;flex-flow:row nowrap;justify-content:flex-end;align-items:center}.sm-close.svelte-y9g4u2.svelte-y9g4u2{position:absolute;top:10px;right:10px;width:24px;height:24px;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.sm-close.svelte-y9g4u2.svelte-y9g4u2:hover{cursor:pointer;background-color:rgba(0, 0, 0, 0.1)}",
        );
      }
      function l$(e) {
        let t, n, l, o, i;
        return (
          (n = new lb({ props: { width: 12, height: 12, color: "#333" } })),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { class: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              tG(t, "class", "sm-close svelte-y9g4u2");
            },
            m(r, s) {
              (tk(r, t, s),
                nO(n, t, null),
                (l = !0),
                o || ((i = tj(t, "click", e[12]("cancel"))), (o = !0)));
            },
            p: tn,
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n), (o = !1), i());
            },
          }
        );
      }
      function lI(e) {
        let t;
        return {
          c() {
            t = tB(e[2]);
          },
          l(n) {
            t = tW(n, e[2]);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            4 & n && tX(t, e[2]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function lO(e) {
        let t, n;
        return {
          c() {
            ((t = new t4(!1)), (n = tU()), this.h());
          },
          l(e) {
            ((t = (function (e, t) {
              let n = tQ(e, "HTML_TAG_START", 0),
                l = tQ(e, "HTML_TAG_END", n);
              if (n === l) return new t4(void 0, t);
              tZ(e);
              let o = e.splice(n, l - n + 1);
              (tL(o[0]), tL(o[o.length - 1]));
              let i = o.slice(1, o.length - 1);
              for (let t of i)
                ((t.claim_order = e.claim_info.total_claimed),
                  (e.claim_info.total_claimed += 1));
              return new t4(i, t);
            })(e, !1)),
              (n = tU()),
              this.h());
          },
          h() {
            t.a = n;
          },
          m(l, o) {
            (t.m(e[3], l, o), tk(l, n, o));
          },
          p(e, n) {
            8 & n && t.p(e[3]);
          },
          d(e) {
            (e && tL(n), e && t.d());
          },
        };
      }
      function lM(e) {
        let t, n;
        return (
          (t = new lv({
            props: {
              width: "auto",
              height: "30px",
              style:
                "background:#0086cd;color:#fff;min-width:90px;padding:0 5px",
              primary: !0,
              $$slots: { default: [lD] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[12]("yes")),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (32784 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function lD(e) {
        let t;
        return {
          c() {
            t = tB(e[4]);
          },
          l(n) {
            t = tW(n, e[4]);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            16 & n && tX(t, e[4]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function lk(e) {
        let t, n;
        return (
          (t = new lv({
            props: {
              width: "auto",
              height: "30px",
              style: "margin-left:20px;min-width:90px;padding:0 5px",
              primary: !0,
              $$slots: { default: [lL] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[12]("no")),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (32800 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function lL(e) {
        let t;
        return {
          c() {
            t = tB(e[5]);
          },
          l(n) {
            t = tW(n, e[5]);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            32 & n && tX(t, e[5]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function lN(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p;
        let g = e[0] && l$(e),
          v = e[3] ? lO : lI,
          A = v(e),
          w = e[4] && lM(e),
          x = e[5] && lk(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tP()),
              (o = tR("div")),
              g && g.c(),
              (i = tP()),
              (r = tR("div")),
              (s = tB(e[1])),
              (a = tP()),
              (c = tR("div")),
              A.c(),
              (d = tP()),
              (u = tR("div")),
              w && w.c(),
              (h = tP()),
              x && x.c(),
              this.h());
          },
          l(f) {
            var m = tV((t = tY(f, "DIV", { class: !0 })));
            (tV((n = tY(m, "DIV", { class: !0 }))).forEach(tL), (l = tq(m)));
            var p = tV((o = tY(m, "DIV", { class: !0, style: !0 })));
            (g && g.l(p), (i = tq(p)));
            var v = tV((r = tY(p, "DIV", { class: !0 })));
            ((s = tW(v, e[1])), v.forEach(tL), (a = tq(p)));
            var y = tV((c = tY(p, "DIV", { class: !0 })));
            (A.l(y), y.forEach(tL), (d = tq(p)));
            var E = tV((u = tY(p, "DIV", { class: !0 })));
            (w && w.l(E),
              (h = tq(E)),
              x && x.l(E),
              E.forEach(tL),
              p.forEach(tL),
              m.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "sm-mask svelte-y9g4u2"),
              tG(r, "class", "sm-confirm-title svelte-y9g4u2"),
              tG(c, "class", "sm-confirm-content svelte-y9g4u2"),
              tG(u, "class", "sm-confirm-buttons svelte-y9g4u2"),
              tG(o, "class", "sm-confirm-container svelte-y9g4u2"),
              t1(o, "width", e[6]),
              t1(o, "height", e[7]),
              t1(o, "min-width", e[8]),
              t1(o, "min-height", e[9]),
              t1(o, "max-width", e[10]),
              t1(o, "max-height", e[11]),
              tG(t, "class", "sm-confirm svelte-y9g4u2"));
          },
          m(v, y) {
            (tk(v, t, y),
              tD(t, n),
              tD(t, l),
              tD(t, o),
              g && g.m(o, null),
              tD(o, i),
              tD(o, r),
              tD(r, s),
              tD(o, a),
              tD(o, c),
              A.m(c, null),
              tD(o, d),
              tD(o, u),
              w && w.m(u, null),
              tD(u, h),
              x && x.m(u, null),
              (f = !0),
              m || ((p = tj(t, "mousedown", tH(e[13]))), (m = !0)));
          },
          p(e, t) {
            let [n] = t;
            (e[0]
              ? g
                ? (g.p(e, n), 1 & n && nx(g, 1))
                : ((g = l$(e)).c(), nx(g, 1), g.m(o, i))
              : g &&
                (nA(),
                ny(g, 1, 1, () => {
                  g = null;
                }),
                nw()),
              (!f || 2 & n) && tX(s, e[1]),
              v === (v = e[3] ? lO : lI) && A
                ? A.p(e, n)
                : (A.d(1), (A = v(e)) && (A.c(), A.m(c, null))),
              e[4]
                ? w
                  ? (w.p(e, n), 16 & n && nx(w, 1))
                  : ((w = lM(e)).c(), nx(w, 1), w.m(u, h))
                : w &&
                  (nA(),
                  ny(w, 1, 1, () => {
                    w = null;
                  }),
                  nw()),
              e[5]
                ? x
                  ? (x.p(e, n), 32 & n && nx(x, 1))
                  : ((x = lk(e)).c(), nx(x, 1), x.m(u, null))
                : x &&
                  (nA(),
                  ny(x, 1, 1, () => {
                    x = null;
                  }),
                  nw()),
              (!f || 64 & n) && t1(o, "width", e[6]),
              (!f || 128 & n) && t1(o, "height", e[7]),
              (!f || 256 & n) && t1(o, "min-width", e[8]),
              (!f || 512 & n) && t1(o, "min-height", e[9]),
              (!f || 1024 & n) && t1(o, "max-width", e[10]),
              (!f || 2048 & n) && t1(o, "max-height", e[11]));
          },
          i(e) {
            f || (nx(g), nx(w), nx(x), (f = !0));
          },
          o(e) {
            (ny(g), ny(w), ny(x), (f = !1));
          },
          d(e) {
            (e && tL(t),
              g && g.d(),
              A.d(),
              w && w.d(),
              x && x.d(),
              (m = !1),
              p());
          },
        };
      }
      function lR(e, t, n) {
        let { cancelable: l = !1 } = t,
          { title: o = "操作确认" } = t,
          { text: i = "" } = t,
          { html: r = "" } = t,
          { yes: s = "确定" } = t,
          { no: a = "取消" } = t,
          { width: c = "" } = t,
          { height: d = "" } = t,
          { minWidth: u = "" } = t,
          { minHeight: h = "" } = t,
          { maxWidth: f = "" } = t,
          { maxHeight: m = "" } = t,
          p = nn();
        return (
          (e.$$set = (e) => {
            ("cancelable" in e && n(0, (l = e.cancelable)),
              "title" in e && n(1, (o = e.title)),
              "text" in e && n(2, (i = e.text)),
              "html" in e && n(3, (r = e.html)),
              "yes" in e && n(4, (s = e.yes)),
              "no" in e && n(5, (a = e.no)),
              "width" in e && n(6, (c = e.width)),
              "height" in e && n(7, (d = e.height)),
              "minWidth" in e && n(8, (u = e.minWidth)),
              "minHeight" in e && n(9, (h = e.minHeight)),
              "maxWidth" in e && n(10, (f = e.maxWidth)),
              "maxHeight" in e && n(11, (m = e.maxHeight)));
          }),
          [
            l,
            o,
            i,
            r,
            s,
            a,
            c,
            d,
            u,
            h,
            f,
            m,
            (e, t) => () => p(e, t),
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class lS extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              lR,
              lN,
              ta,
              {
                cancelable: 0,
                title: 1,
                text: 2,
                html: 3,
                yes: 4,
                no: 5,
                width: 6,
                height: 7,
                minWidth: 8,
                minHeight: 9,
                maxWidth: 10,
                maxHeight: 11,
              },
              lT,
            ));
        }
      }
      function lB(e) {
        let t, n, l, o, i;
        return {
          c() {
            ((t = tS("circle")),
              (n = tP()),
              (l = tS("path")),
              (o = tP()),
              (i = tS("path")),
              this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "circle", {
                cx: !0,
                cy: !0,
                r: !0,
                stroke: !0,
                "stroke-width": !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              (o = tq(e)),
              tV(
                (i = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "cx", "12"),
              tG(t, "cy", "12"),
              tG(t, "r", "11"),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(l, "d", "M12 7V12"),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "2"),
              tG(l, "stroke-linecap", "round"),
              tG(l, "stroke-linejoin", "round"),
              tG(i, "d", "M12 16V16.5"),
              tG(i, "stroke", e[0]),
              tG(i, "stroke-width", "2"),
              tG(i, "stroke-linecap", "round"),
              tG(i, "stroke-linejoin", "round"));
          },
          m(e, r) {
            (tk(e, t, r), tk(e, n, r), tk(e, l, r), tk(e, o, r), tk(e, i, r));
          },
          p(e, n) {
            (1 & n && tG(t, "stroke", e[0]),
              1 & n && tG(l, "stroke", e[0]),
              1 & n && tG(i, "stroke", e[0]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l), e && tL(o), e && tL(i));
          },
        };
      }
      function lP(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 24 24",
              $$slots: { default: [lB] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function lU(e, t, n) {
        let { color: l = "#333" } = t,
          { width: o = 24 } = t,
          { height: i = 24 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class lj extends nk {
        constructor(e) {
          (super(),
            nD(this, e, lU, lP, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function lz(e) {
        tI(
          e,
          "svelte-tg75e",
          ".sm-alert.svelte-tg75e{display:flex;flex-direction:row;justify-content:center;align-items:center;animation:svelte-tg75e-fade 0.3s ease-in-out forwards}@keyframes svelte-tg75e-fade{0%{opacity:0}100%{opacity:1}}.sm-content.svelte-tg75e{max-width:60vw;flex-shrink:0;display:inline-flex;flex-flow:row wrap;justify-content:center;align-items:center;border-radius:16px;padding:24px;color:var(--text-color);background:var(--bg-color);box-shadow:-2px -2px 5px rgba(255, 255, 255, 0.3), 2px 2px 5px rgba(110, 113, 145, 0.1)}.sm-icon.svelte-tg75e,.sm-close.svelte-tg75e{flex-shrink:0;width:24px;height:24px;opacity:0.5;cursor:pointer;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.sm-text.svelte-tg75e{flex:1;font-size:16px;font-weight:700;line-height:24px;letter-spacing:0.75px;padding:0 16px}@media screen and (min-width: 360px){.sm-text.svelte-tg75e{min-width:300px}}",
        );
      }
      function lH(e, t, n) {
        let l = e.slice();
        return ((l[9] = t[n]), l);
      }
      function lG(e) {
        let t, n, l, o, i, r, s, a;
        o = new lj({ props: { color: e[5].textColor } });
        let c = e[2].split("\n").filter(Boolean),
          d = [];
        for (let t = 0; t < c.length; t += 1) d[t] = lV(lH(e, c, t));
        let u = e[1] && lZ(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              n$(o.$$.fragment),
              (i = tP()),
              (r = tR("div")));
            for (let e = 0; e < d.length; e += 1) d[e].c();
            ((s = tP()), u && u.c(), this.h());
          },
          l(e) {
            var a = tV((t = tY(e, "DIV", { class: !0 }))),
              c = tV((n = tY(a, "DIV", { class: !0 }))),
              h = tV((l = tY(c, "DIV", { class: !0 })));
            (nI(o.$$.fragment, h), h.forEach(tL), (i = tq(c)));
            var f = tV((r = tY(c, "DIV", { class: !0 })));
            for (let e = 0; e < d.length; e += 1) d[e].l(f);
            (f.forEach(tL),
              (s = tq(c)),
              u && u.l(c),
              c.forEach(tL),
              a.forEach(tL),
              this.h());
          },
          h() {
            (tG(l, "class", "sm-icon svelte-tg75e"),
              tG(r, "class", "sm-text svelte-tg75e"),
              tG(n, "class", "sm-content svelte-tg75e"),
              tG(t, "class", "sm-alert svelte-tg75e"),
              t1(t, "--bg-color", e[5].bgColor),
              t1(t, "--text-color", e[5].textColor));
          },
          m(e, c) {
            (tk(e, t, c),
              tD(t, n),
              tD(n, l),
              nO(o, l, null),
              tD(n, i),
              tD(n, r));
            for (let e = 0; e < d.length; e += 1) d[e] && d[e].m(r, null);
            (tD(n, s), u && u.m(n, null), (a = !0));
          },
          p(e, t) {
            if (4 & t) {
              let n;
              for (
                n = 0, c = e[2].split("\n").filter(Boolean);
                n < c.length;
                n += 1
              ) {
                let l = lH(e, c, n);
                d[n]
                  ? d[n].p(l, t)
                  : ((d[n] = lV(l)), d[n].c(), d[n].m(r, null));
              }
              for (; n < d.length; n += 1) d[n].d(1);
              d.length = c.length;
            }
            e[1]
              ? u
                ? (u.p(e, t), 2 & t && nx(u, 1))
                : ((u = lZ(e)).c(), nx(u, 1), u.m(n, null))
              : u &&
                (nA(),
                ny(u, 1, 1, () => {
                  u = null;
                }),
                nw());
          },
          i(e) {
            a || (nx(o.$$.fragment, e), nx(u), (a = !0));
          },
          o(e) {
            (ny(o.$$.fragment, e), ny(u), (a = !1));
          },
          d(e) {
            (e && tL(t), nM(o), tN(d, e), u && u.d());
          },
        };
      }
      function lV(e) {
        let t, n;
        let l = e[9] + "";
        return {
          c() {
            ((t = tR("div")), (n = tB(l)));
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", {})));
            ((n = tW(o, l)), o.forEach(tL));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, t) {
            4 & t && l !== (l = e[9] + "") && tX(n, l);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function lZ(e) {
        let t, n, l, o, i;
        return (
          (n = new lb({
            props: { width: 24, height: 24, color: e[5].textColor },
          })),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { class: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              tG(t, "class", "sm-close svelte-tg75e");
            },
            m(r, s) {
              (tk(r, t, s),
                nO(n, t, null),
                (l = !0),
                o || ((i = tj(t, "click", e[7])), (o = !0)));
            },
            p: tn,
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n), (o = !1), i());
            },
          }
        );
      }
      function lF(e) {
        let t, n;
        let l = e[3] && lG(e);
        return {
          c() {
            (l && l.c(), (t = tU()));
          },
          l(e) {
            (l && l.l(e), (t = tU()));
          },
          m(e, o) {
            (l && l.m(e, o), tk(e, t, o), (n = !0));
          },
          p(e, n) {
            let [o] = n;
            e[3]
              ? l
                ? (l.p(e, o), 8 & o && nx(l, 1))
                : ((l = lG(e)).c(), nx(l, 1), l.m(t.parentNode, t))
              : l &&
                (nA(),
                ny(l, 1, 1, () => {
                  l = null;
                }),
                nw());
          },
          i(e) {
            n || (nx(l), (n = !0));
          },
          o(e) {
            (ny(l), (n = !1));
          },
          d(e) {
            (l && l.d(e), e && tL(t));
          },
        };
      }
      function lJ(e, t, n) {
        let l,
          o = tn,
          i = () => (o(), (o = tc(r, (e) => n(3, (l = e)))), r);
        e.$$.on_destroy.push(() => o());
        let { visible: r = nN(!0) } = t;
        i();
        let { type: s = "warning" } = t,
          { closable: a = !1 } = t,
          { content: c } = t,
          d = nn(),
          u = {
            default: { bgColor: "#0086cd", textColor: "#fcfcfc" },
            success: { bgColor: "#00ba88", textColor: "#fcfcfc" },
            warning: { bgColor: "#ffd789", textColor: "#946200" },
            error: { bgColor: "#ed2e7e", textColor: "#fcfcfc" },
          }[s];
        return (
          (e.$$set = (e) => {
            ("visible" in e && i(n(0, (r = e.visible))),
              "type" in e && n(6, (s = e.type)),
              "closable" in e && n(1, (a = e.closable)),
              "content" in e && n(2, (c = e.content)));
          }),
          [r, a, c, l, d, u, s, () => d("close")]
        );
      }
      class lY extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              lJ,
              lF,
              ta,
              { visible: 0, type: 6, closable: 1, content: 2 },
              lz,
            ));
        }
      }
      async function lK(e) {
        let t = document.createElement("div");
        return (
          document.body.appendChild(t),
          new Promise((n, l) => {
            let o = new lS({ target: t, props: e }),
              i = nP(
                o.$on("yes", () => {
                  (r(), n(!0));
                }),
                o.$on("no", () => {
                  (r(), n(!1));
                }),
                o.$on("cancel", () => {
                  (r(), l("canceled"));
                }),
              );
            function r() {
              (i(), o.$destroy(), document.body.removeChild(t));
            }
          })
        );
      }
      let lW = new Map();
      function lq(e) {
        let { name: t, duration: n = 3e3, content: l, closable: o, ...i } = e;
        if (!l) return;
        if ((null != t || (t = Math.random().toString(16)), t)) {
          let e = lW.get(t);
          e && (e(), lW.delete(t));
        }
        let r = document.getElementById("toast-root");
        r ||
          (((r = document.createElement("div")).id = "toast-root"),
          (r.style.cssText =
            "position: absolute; top: 44;left: 50%;top: 44px;z-index: 100;width: 0;display: flex;flex-flow: column; justify-content: center; gap: 12px;"),
          document.body.appendChild(r));
        let s = new lY({ target: r, props: { ...i, content: l, closable: o } }),
          a = !1,
          c = nP(
            s.$on("close", () => {
              d();
            }),
          );
        function d() {
          a ||
            (t && lW.delete(t),
            (a = !0),
            c(),
            s.$destroy(),
            0 === lW.size && document.body.removeChild(r));
        }
        return (!o && n > 0 && setTimeout(d, n), lW.set(t, d), d);
      }
      let lQ = "3d-scheme",
        lX = "3d-wasm";
      async function l_(e) {
        // let t =
        //   arguments.length > 1 && void 0 !== arguments[1]
        //     ? arguments[1]
        //     : // : ["zh-CN", e.value.language];
        //       [e.value.language];
        // if (!(t = Array.from(new Set(t))).length) return;
        // let n = t.map((e) => (0, q.So)(lX, e)),
        //   l = t.map((e) => (0, q.So)(lQ, e)),
        //   o = await Promise.all([...n, ...l]); // en.json loaded here??
        // e.tapInstance((e) => {
        //   let { app: n } = e;
        //   n.LoadTranslations(
        //     JSON.stringify(Object.fromEntries(t.map((e, t) => [e, o[t]]))),
        //   );
        // });
      }
      function l1(e, t) {
        e.tapInstance((e) => {
          let { app: n } = e;
          (n.LoadTranslations(JSON.stringify({ [t]: (0, q.O1)(lX, t) })),
            n.SetLanguage(t));
        });
      }
      function l0(e) {
        return new Proxy(
          {},
          { get: (t, n) => ("t" === n ? (t, n) => l2(e, t, n) : l2(e, n)) },
        );
      }
      function l2(e, t, n) {
        let l = (0, q.O1)(lQ, e);
        l = {
          attach_notice: {
            cancel: "Cancel",
            delete: "Delete",
            title: "To Be Confirmed",
          },
          bone_section: { horizontal: "Horizontal", vertical: "Vertical" },
          cancel_modify: "Undo",
          clearedJaw: "Remove on",
          confirm: { no: "NO", title: "Confirm", yes: "YES" },
          contextmenu: { mdf: "3D Modify" },
          day_mode_text: "Day Mode",
          day_night_mode_text: "Day-Night Mode",
          features: { mdf_tool_arch: "Arch Curve is now available." },
          iprLimit: "IPR Limit",
          iprLimitType1: "Up to 0.5 mm",
          iprLimitType2: "Up to 1.0 mm",
          known: "OK",
          learnIRS: "Learn More",
          loading: "Loading...",
          madibular: "Mandibular",
          maxillary: "Maxillary",

          mdf: {
            arch: {
              adjustments: "Adjustment",
              contraction: "Contraction",
              expansion: "Expansion",
              match: "Match Opposing Arch",
              moveArch: "Sagittal movement",
              news: "Arch Curve is now available.",
              selectLower: "Lower",
              selectUpper: "Upper",
              settings: "Settings",
              symmetrically: "Symmetrical",
              title: "Arch",
            },

            attachment: {
              angelButtonClose:
                "Click on the icon to enable the angelButton modifications",
              angelButtonLoading:
                "Please wait while we calculate the positions where the angelButton can be placed...",
              angelButtonOpen: "angelButton",
              cutArch: "Button Cutout",
              cutL: "Elastic Cut-Distal",
              cutR: "Elastic Cut-Mesial",
              daoaoquTips:
                "Please don't put the attachments in the undercut area. Designers may have to adjust the attachment position to avoid bad shaping o…",
              ellipse_horizontal: "Oval-Horizontal Attachment",
              ellipse_vertical: "Oval-Vertical Attachment",
              entity: "Conventional",
              guide: "Guidance",
              hRect: "Rectangular-Horizontal Attachment",
              hRectG: "Horizontal Occlusal Beveled Attachment",
              moved: "MOD",
              newAdded: "NEW",
              removeHint: "Remove",
              removeText: "Remove",
              retention: "Retention Attachment",
              retention_kid: "Retention AT-Short Crown",
              thicknessChangedTip:
                "Please be aware that attachment pop-out may make it harder to wear and remove aligners, while reducing the attachment height may result i…",
              title: "Attachments",
              traction: "Elastics",
              vRect: "Rectangular-Vertical Attachment",
              vRectD: "Rotation Attachment",
              yadongxianTip:
                "A red curve is now displayed on tooth to indicate the safe area for physical attachment placement. Please keep the attachment in the saf…",
            },

            controls: {
              back: "Return",
              compare: "Compare",
              redo: "Redo",
              reset: "Reset",
              resetAll: "All Modifications",
              resetAttach: "Attachment Modifications",
              resetOcclPlane: "Occlusal Plane Modifications",
              resetTarget: "Target Position Modifications",
              undo: "Undo",
            },

            ipr: {
              adjustTitle: "Adjust S & IPR",
              autoAdjust: "Automatic",
              hideOperation: "No IPR/Spacing Adjust",
              keep: "Maintain",
              movingAnterior: "Anterior",
              movingGuide: "How to use it?",
              movingNotice:
                "Anterior preference: The distal teeth of the target space/IPR will be held still while the mesial teeth will be adjuste…",
              movingPosterior: "Posterior",
              movingSetting: "Mobilizable Teeth",
              noGap: "No Spacing",
              noIpr: "No IPR",
              settingTitle: "Spacing & IPR",
              title: "IPR Setting",
              visible: "Reveal",
            },
            mdfTools: {
              arch: "Arch",
              features: "Features",
              op: "OP",
              tooth: "Tooth",
            },
            moveArch: {
              lowerCurve: "Lower Arch Curve",
              moveLowerArch: "Move Lower Arch",
              moveUpperArch: "Move Upper Arch",
              title: "Sagittal movement",
              upperCurve: "Upper Arch Curve",
              visibilitySetting: "Display Settings",
            },

            occlusalPlane: {
              btnApply: "Apply",
              btnCancel: "Cancel",
              btnReset: "Reset",
              valueOfX: "Inclination {{value}}°",
              valueOfY: "Cant {{value}}°",
              valueOfZ: "Rotation {{value}}°",
              viewTitle: "Occlusal Plane - Initial Occlusion",
            },

            readonly: {
              content:
                "Local modifications are still available to your 3D… modifications can only be made through comments.",
              title: "Modified 3D Treatment Plan has already been submitted.",
            },
            tools: {
              arch: "Arch Curve",
              attachment: "Attachments & Cuts",
              close: "Close",
              hide: "Hide",
              ipr: "IPR Setting",
              moveArch: "Sagittal movement",
              tooth: "Tooth Adjustment",
            },

            tooth: {
              following: "Auto Adjust",
              freeMovement: "Multiplane",
              modifyamount: "Variation",
              moveXTitle: "Translation (Mesial/Distal)",
              moveYTitle: "Translation (Buccal/Lingual)",
              moveZTitle: "Extrusion/Intrusion",
              rotateNXTitle: "Root Torque",
              rotateXTitle: "Crown Torque",
              rotateYTitle: "Angulation",
              rotateZDisialTitle: "Distal Hinge Rotation",
              rotateZMesialTitle: "Mesial Hinge Rotation",
              rotateZTitle: "Rotation",
              tip: "When adjusting the crown tip, crown torque and root torque of tooth with root, click the blue dot in 3D view to switch the center o…",
              title: "Tooth",
              total: "Total",
            },

            viewTitle: { modified: "Modified", original: "Initial" },
          },
          mobilizableMessag:
            "When you modify the spacing or IPR, the rules for the movement of teeth are as follows: ↵Anterior: Tooth movement toward the mesia…",
          mobilizableMessage:
            "When you modify the spacing or IPR, the rules for the movement of teeth are as follows: ↵Anterior: Tooth movement toward the mesia…",
          modify_message: "Modified",
          movement: {
            dir: {
              B: "Buccal",
              D: "Distal",
              E: "Extrusion",
              I: "Intrusion",
              L: "Lingual",
              La: "Labial",
              Li: "Lingual",
              M: "Mesial",
            },

            hide: "Hide",
            jaw: { lower: "Lower", upper: "Upper" },
            method: {
              r_x: "Torque",
              r_y: "Angulation",
              r_z: "Rotation",
              t_x: "Trans",
              t_y: "Trans",
              t_z: "",
            },

            tip: "The tooth movement data consists of one set of crown data and two sets of root data. The root data is about the center of resistance an…",
            type: {
              center: "Center of Resistance",
              crown: "Crown",
              tip: "Root Apex",
            },
            viewAll: "View All",
          },

          night_mode_text: "Night Mode",
          not_confirm: { close: "Close", title: "Reminder" },
          over_ipr_notice: "Recommend IPR amount is no more than 0.5 mm.",
          overbite: {
            originCover: "Average Initial Overjet",
            originOverlay: "Maximum Initial Overbite",
            targetCover: "Average Target Overjet",
            targetOverlay: "Maximum Target Overbite",
          },
          quickOperation: "Quick Operation",
          removeIPR: "Remove IPR",
          removeSpacing: "Remove Spacing",
        };

        let o =
          t in l ? l[t] : t.split(".").reduce((e, t) => (e && e[t]) || null, l);
        return o
          ? "string" != typeof o
            ? o
            : (function (e) {
                var t;
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return null !=
                  (t = e.replace(/\{\{(.*?)\}\}/g, (e, t) => {
                    var l;
                    return "".concat(
                      null != (l = n[null == t ? void 0 : t.trim()]) ? l : "",
                    );
                  }))
                  ? t
                  : "";
              })(o, n)
          : "";
      }
      let l3 = (e) => {
          var t, n, l, o;
          let { mdf: i } = e.value;
          if (!i.working) return;
          let r = e.value.mdf.__,
            s = e.value.selectedFdi,
            a = r.GetTotalStep(),
            c = null;
          return (
            ((c =
              i.toothTabType === e_.TOTAL
                ? n3.parse(
                    r
                      .GetMotionComponentOriginStepBased(s, a)
                      .replace("root", "tip"),
                  )
                : n3.parse(
                    r
                      .GetMotionComponentEATargetStepBased(s, a)
                      .replace("root", "tip"),
                  )).crown = {
              ...c.crown,
              r_neg_x:
                null == (t = null == c ? void 0 : c.tip) ? void 0 : t.r_x,
            }),
            (c.tip = {
              ...c.tip,
              r_neg_x:
                null == (n = null == c ? void 0 : c.tip) ? void 0 : n.r_x,
              r_x: null == (l = null == c ? void 0 : c.crown) ? void 0 : l.r_x,
            }),
            (c.center = {
              ...c.center,
              r_neg_x:
                null == (o = null == c ? void 0 : c.center) ? void 0 : o.r_x,
            }),
            c
          );
        },
        l4 = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return new Promise((t) => setTimeout(t, 0 | e));
        },
        l7 = (e) =>
          e.tapInstance((t) => {
            let n = e.getIn("toggle"),
              l = t.tools.GetToolsCheckedStatus(),
              o = {
                overlying: l.get(em.OVERLYING),
                fdi: l.get(em.FDI),
                attachment: l.get(em.ATTACHMENT),
                grid: l.get(em.GRID),
                ipr: l.get(em.IPR),
                distance: l.get(em.DISTANCE),
                contact: l.get(em.CONTACT),
                toothRoot: l.get(em.TOOTH_ROOT),
                jawbone: l.get(em.JAWBONE),
                boneCollision: n.boneCollision,
                occlSection: l.get(em.OCCL_SECTION),
                boneSection: l.get(em.BONE_SECTION),
                rsc: l.get(em.RSC),
                tma: l.get(em.TMA),
                pa: l.get(em.PA),
                biteJump: l.get(em.BITE_JUMP),
                simGum: l.get(em.SIM_GUM),
                bolton: n.bolton,
                mpr: n.mpr,
                movement: n.movement,
                cover: n.cover,
                expansionArchWidth: n.expansionArchWidth,
                archWidth: n.archWidth,
              };
            (l.delete(), nF(o, n) || e._updateToggle(o));
          }),
        l6 = (e) =>
          e.tapInstance((t) => {
            var n, l;
            let {
                toggleEnabled: o,
                viewMode: i,
                main: r,
                mdf: s,
                _configuration: a,
              } = e.value,
              c = t.tools.GetToolsEnableStatus(),
              d = {
                overlying: c.get(em.OVERLYING),
                fdi: c.get(em.FDI),
                attachment: c.get(em.ATTACHMENT),
                grid: c.get(em.GRID),
                ipr: c.get(em.IPR),
                measure: c.get(em.MEASURE),
                distance: c.get(em.DISTANCE),
                contact: c.get(em.CONTACT),
                view: c.get(em.VIEW),
                toothRoot: c.get(em.TOOTH_ROOT),
                jawbone: c.get(em.JAWBONE),
                boneCollision: c.get(em.TOOTH_ROOT) && c.get(em.JAWBONE),
                occlSection: c.get(em.OCCL_SECTION),
                boneSection: c.get(em.BONE_SECTION),
                sectionGroup: c.get(em.SECTION),
                rsc: c.get(em.RSC),
                tma: c.get(em.TMA),
                pa: c.get(em.PA),
                biteJump: c.get(em.BITE_JUMP),
                simGum: c.get(em.SIM_GUM),
                mpr: o.mpr,
                bolton: o.bolton,
                expansionArchWidth: o.expansionArchWidth,
                archWidth: o.archWidth,
                deviation: !!(null == (n = a.wasmInstanceInit)
                  ? void 0
                  : n.is_deviation_analysis),
                movement:
                  [eu.SINGLE, eu.DayNight].includes(i) ||
                  s.working ||
                  !!(null == (l = a.wasmInstanceInit)
                    ? void 0
                    : l.is_deviation_analysis),
                cover:
                  [eu.SINGLE, eu.SECTION, eu.DayNight].includes(i) || s.working,
              };
            (c.delete(), nF(d, o) || e.update({ toggleEnabled: d }));
          }),
        l5 = (e) =>
          e.tapInstance((t) => {
            var n, l;
            let { editor: o } = t;
            e.value;
            let i = o.GetMenus();
            if (i) {
              let t = JSON.parse(i),
                o = [],
                r = [],
                s =
                  null !=
                  (l =
                    null == (n = e.value.main) ? void 0 : n.dentalNotationType)
                    ? l
                    : J.oE.FDI;
              t.forEach((e, t) => {
                let n = {
                  type: e.type,
                  selected: !!e.select,
                  text: (0, J.Mp)(e.item, s),
                  id: t,
                };
                [eC.NEED_CONFIRM, eC.NOT_NEED_CONFIRM].includes(e.type)
                  ? r.push(n)
                  : o.push(n);
              });
              let a = e.value._refPointerPosition;
              e.updateMenu({
                pointerPosition: a,
                list: o,
                confirmList: r,
                triggerIndex: -1,
              });
            }
          }),
        l8 = (e) =>
          e.tapInstance((t) => {
            var n, l;
            let { editor: o } = t,
              i =
                null !=
                (l = null == (n = e.value.main) ? void 0 : n.dentalNotationType)
                  ? l
                  : J.oE.FDI;
            e.updateMdf({ autoComment: (0, J.Mp)(o.GetAutoComments(), i) });
          }),
        l9 = (e) =>
          e.tapInstance((t) => {
            let { editor: n } = t,
              l = n.GetButtonEnableStatus(eg.UNDO),
              o = n.GetButtonEnableStatus(eg.REDO),
              i = n.GetButtonEnableStatus(eg.RESET),
              r = {
                canSU: n.GetButtonEnableStatus(eg.SU),
                ...JSON.parse(n.GetSUCheckStatus(!1)),
              };
            e.updateMdf({ canUndo: l, canRedo: o, canReset: i, suMessage: r });
          }),
        oe = (e) =>
          e.tapInstance((t) => {
            let { editor: n } = t,
              l = n.GetActiveTool();
            e.updateMdf({ toolType: l });
          }),
        ot = (e) =>
          e.tapInstance((e) => {
            let t,
              { editor: n } = e;
            ((t =
              n.GetModifyCursorShape() === eD.DRAGGING_ANGEL_BUTTON
                ? lh
                : "move"),
              (document.body.style.cursor = t),
              (document.body.style.cursor = t));
            let l = () => {
              (document.removeEventListener("mouseup", l),
                (document.body.style.cursor = ""),
                (document.body.style.cursor = ""));
            };
            document.addEventListener("mouseup", l);
          }),
        on = (e) => (t) => {
          t.updateMdf({ selectedJaw: e });
        },
        ol = (e) => {
          if (e.value.mdf.working && !e.value.mdf.entering) {
            lc(e);
            let t = l3(e);
            (lu(e),
              e.updateMdf((e) => ({ ...e, toothMoveData: t, lmc: e.lmc + 1 })));
          }
        },
        oo = (e) => {
          e.tapInstance((t) => {
            let { editor: n } = t;
            if (e.value.mdf.working) {
              let t = n.IsAttachPicked();
              e.updateMdf({ isAttachPicked: t });
            }
          });
        },
        oi = (e) => {
          let t = l0(e.value.language);
          e.tapInstance(async (n) => {
            var l, o;
            let { editor: i } = n,
              { _configuration: r, mdf: s } = e.value,
              { del_invalid_ab_attach_in_traction: a } = r.wasmInstanceInit,
              c = n3.parse(i.GetMessageTips()),
              { type: d, sub_type: u } = c,
              h =
                null !=
                (o = null == (l = e.value.main) ? void 0 : l.dentalNotationType)
                  ? o
                  : J.oE.FDI,
              f = (0, J.Mp)(c.message, h);
            if (
              [
                eL.ATTACH_UNMOVABLE,
                eL.TOOTH_UNMOVABLE,
                eL.TRACTION_CHANGED,
              ].includes(d)
            )
              return lq({ name: "default-toast", duration: 3e3, content: f });
            if ([eL.ATTACH_COLLISION].includes(d))
              return lq({ name: f, duration: 5e3, content: f });
            if ([eL.ANGELBUTTON_INVALID_BY_OPERATE].includes(d)) {
              await l4(0);
              let e = i.GetButtonEnableStatus(eg.UNDO);
              return a
                ? void lK({
                    title: t.t("attach_notice.title"),
                    yes: t.t("attach_notice.delete"),
                    no: e ? t.t("cancel_modify") : "",
                    width: "446px",
                    minHeight: "174px",
                    text: f,
                  }).then((e) => {
                    e ? i.DeleteInvalidAngelButton() : i.Undo();
                  })
                : lq({ name: "default-toast", duration: 3e3, content: f });
            }
            if (
              [
                eL.MODIFY_DAY_NIGHT_TRACTING_ATTACH,
                eL.DELETE_DAY_NIGHT_TRACTING_ATTACH,
              ].includes(d)
            )
              return (
                console.log("一体化附件删除type=", d),
                void lK({
                  title: t.t("attach_notice.title"),
                  yes:
                    eL.DELETE_DAY_NIGHT_TRACTING_ATTACH === d
                      ? t.t("attach_notice.delete")
                      : t.t("confirm.yes"),
                  no: t.t("confirm.no"),
                  width: "446px",
                  minHeight: "174px",
                  text: f,
                }).then((e) => {
                  e || i.Undo();
                })
              );
            if ([eL.ATTACH_THICKNESS_CHANGED].includes(d)) {
              let n = t.t("mdf.attachment.thicknessChangedTip"),
                l = lq({
                  visible: nS(e, (e) => !e.mdf.occlusalPlaneWorking),
                  name: "",
                  closable: !0,
                  duration: 0,
                  content: n,
                }),
                o = e.subscribe((e) => {
                  e.mdf.working || (null == l || l(), o());
                });
              return;
            }
            let m = (0, J.Mp)(c.error_message, h),
              p = e.value.hoverMessage,
              g = e.value._refPointerPosition;
            (p &&
              p.type === d &&
              p.text === f &&
              p.error_message === m &&
              p.pointerPosition[0] === g[0] &&
              p.pointerPosition[1] === g[1]) ||
              e.update({
                hoverMessage: {
                  type: d,
                  text: f,
                  pointerPosition: g,
                  sub_type: u,
                  error_message: m,
                },
              });
          });
        },
        or = (e) => {
          e.tapInstance(() => {
            null !== e.value.hoverMessage && e.update({ hoverMessage: null });
          });
        },
        os = (e) => {
          requestAnimationFrame(() =>
            e.tapInstance((e) => {
              var t;
              let { tools: n } = e;
              null == (t = n.Render) || t.call(n);
            }),
          );
        },
        oa = (e) => (t) => {
          var n;
          let l = {
            [eE.TOOTHSELECTED]: lf,
            [eE.MENU]: l5,
            [eE.MOD_LOCATION]: ol,
            [eE.MOD_HIS_SU_STATUS]: l9,
            [eE.MOD_AUTO_COMMENT]: l8,
            [eE.TOGGLE_ACTIVE]: l7,
            [eE.TOGGLE_ENABLED]: l6,
            [eE.MOD_ACTIVE_TOOL]: oe,
            [eE.CURSOR_POINTER]: ot,
            [eE.UPPER_JAW_SELECTED]: on(e8.UPPER),
            [eE.LOWER_JAW_SELECTED]: on(e8.LOWER),
            [eE.MODIFY_ATTACH_PICKED]: oo,
            [eE.SHOW_MESSAGES]: oi,
            [eE.HIDE_MESSAGES]: or,
            [eE.REQUEST_RENDER_FRAME]: os,
          };
          return null == (n = l[t]) ? void 0 : n.call(l, e);
        };
      function oc(e, t) {
        return e > t
          ? oc(t, e)
          : function (n) {
              return n < e ? e : n > t ? t : n;
            };
      }
      let od = (e) =>
        e.tapInstance((t) => {
          let { events: n, el: l, touches: o } = t,
            i = 0,
            r = 0,
            s = new Set(),
            a = function (t) {
              let { clientX: n, clientY: o } = t,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                {
                  width: r,
                  height: s,
                  left: a,
                  top: c,
                } = l.getBoundingClientRect(),
                [d, u] = [n - a, o - c];
              e.value._refPointerPosition = [oc(0, r)(d), oc(0, s)(u)];
              let h = e.getIn("pixelRatio");
              return (
                ([d, u] = [d * h, u * h]),
                i && ([d, u] = [oc(0, r * h)(d), oc(0, s * h)(u)]),
                [eZ(d), eZ(u)]
              );
            },
            c = (t) => {
              let {
                  left: n,
                  top: i,
                  width: r,
                  height: a,
                } = l.getBoundingClientRect(),
                c = t.touches.length,
                d = 0,
                u = 0;
              o.clear();
              let h = e.getIn("pixelRatio");
              if ("touchstart" === t.type)
                for (let e = 0; e < t.changedTouches.length; e++)
                  s.add(t.changedTouches[e].identifier);
              else if ("touchend" === t.type)
                for (let e = 0; e < t.changedTouches.length; e++)
                  s.delete(t.changedTouches[e].identifier);
              for (let e of Array.from(t.touches).filter((e) =>
                s.has(e.identifier),
              )) {
                let l = e.clientX - n,
                  s = e.clientY - i;
                ((d += l), (u += s));
                let c = l * h,
                  f = s * h;
                ("touchstart" === t.type &&
                  ((c = oc(0, r * h)(c)), (f = oc(0, a * h)(f))),
                  o.push_back({ canvasX: eZ(c), canvasY: eZ(f) }));
              }
              return (
                c &&
                  (e.value._refPointerPosition = [
                    oc(0, r)(d / c),
                    oc(0, a)(u / c),
                  ]),
                o
              );
            };
          function d(t) {
            t.preventDefault();
            let { button: o } = t,
              [s, c] = a(t, !0);
            (n.mouseState === ep.NONE &&
              (1 === o
                ? (n.mouseState = ep.MIDDLE)
                : 2 === o ||
                    (e.getIn(["_configuration", "hotkeysEnabled"]) &&
                      t.shiftKey &&
                      0 === o)
                  ? ((i = t.clientX),
                    (r = t.clientY),
                    (n.mouseState = ep.RIGHT),
                    n.OnRightDown(s, c, 0))
                  : ((n.mouseState = ep.LEFT), n.OnLeftDown(s, c, 0))),
              l.removeEventListener("mousemove", h),
              document.addEventListener("mousemove", h),
              document.addEventListener("mouseup", u));
          }
          function u(t) {
            (t.preventDefault(), t.stopPropagation());
            let o = n.mouseState === ep.RIGHT,
              s = n.mouseState === ep.LEFT,
              c = 4 >= Math.abs(t.clientX - i) && 4 >= Math.abs(t.clientY - r),
              { _refPointerPosition: d, mdf: f } = e.value;
            if (
              (f.enabled && o && c && !f.working
                ? e.update({ contextmenu: { type: "mdf", pointerPosition: d } })
                : e.update({ contextmenu: null }),
              (i = 0),
              (r = 0),
              (n.mouseState = ep.NONE),
              !(s || o))
            )
              return;
            let [m, p] = a(t);
            if (s) {
              let { ctrlKey: e, metaKey: l } = t;
              n.OnLeftUp(m, p, eZ(e || (eo && l)));
            }
            (o && n.OnRightUp(m, p, 0),
              document.removeEventListener("mousemove", h),
              document.removeEventListener("mouseup", u),
              l.addEventListener("mousemove", h));
          }
          function h(e) {
            e.preventDefault();
            let [t, l] = a(e);
            n.OnMouseMove(t, l, n.mouseState, 0);
          }
          function f(t) {
            (t.preventDefault(), t.stopPropagation());
            let [l, o] = a(t);
            n.OnLeftDClick(l, o, 0);
            let { viewMode: i, selectedFdi: r, mdf: s } = e.value;
            i === eu.SINGLE &&
              -1 !== r &&
              s.enabled &&
              !s.working &&
              (e.value.stat({ catalog: "医生修改", event: "双击左键进入修改" }),
              nB().then(() => e.toggleModify(!0)));
          }
          function m(e) {
            (e.preventDefault(), e.stopPropagation());
            let [t, l] = a(e, !0);
            n.OnRightDClick(t, l, 0);
          }
          function p(t) {
            (t.preventDefault(), t.stopPropagation());
            let l = t.deltaY < 0 ? 10 : -10,
              [o, i] = a(t);
            (n.OnMouseWheel(o, i, l, 0),
              null !== e.value.hoverMessage && e.update({ hoverMessage: null }),
              null !== e.value.contextmenu && e.update({ contextmenu: null }));
          }
          function g(e) {
            (e.cancelable && e.preventDefault(),
              n.OnTouchStart(c(e)),
              l.addEventListener("touchmove", v));
          }
          function v(e) {
            (e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              n.OnTouchMove(c(e)));
          }
          function A(e) {
            (e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              n.OnTouchEnd(c(e)),
              l.removeEventListener("touchmove", v));
          }
          function w(e) {
            (e.stopPropagation(),
              o.clear(),
              n.OnTouchCancel(),
              l.removeEventListener("touchmove", v));
          }
          function x(e) {
            e.preventDefault();
          }
          function y(e) {
            (e.preventDefault(), e.stopPropagation());
          }
          function E(e) {
            e.preventDefault();
          }
          let C = (function (e) {
            let {
                event: t = "keydown",
                bypassInput: n = !0,
                preventDefault: l = !0,
                validate: o = () => !0,
              } = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
              i = new Map(
                e
                  .map((e) => {
                    let [t, n] = e;
                    return [].concat(t).map((e) => [e, n]);
                  })
                  .flat(),
              ),
              r = (e) => {
                let t = i.get(e.code);
                if (t) {
                  if (n) {
                    let e = document.activeElement;
                    if (
                      e &&
                      (["INPUT", "TEXTAREA"].includes(
                        e.tagName.toUpperCase(),
                      ) ||
                        e.hasAttribute("contenteditable"))
                    )
                      return;
                  }
                  (l && e.preventDefault(), o(e) && t(e));
                }
              };
            return (
              document.addEventListener(t, r),
              () => {
                document.removeEventListener(t, r);
              }
            );
          })(
            [
              [
                "Space",
                () => {
                  e.stepper.canPlay() && e.stepper.playOrPause("main");
                },
              ],
              [
                "Comma",
                () => {
                  e.stepper.canPlay() &&
                    (e.stepper.gotoPrev("main"), e.stepper.gotoPrev("side"));
                },
              ],
              [
                "Period",
                () => {
                  e.stepper.canPlay() &&
                    (e.stepper.gotoNext("main"), e.stepper.gotoNext("side"));
                },
              ],
              [
                "KeyM",
                () => {
                  e.stepper.canPlay() &&
                    (e.stepper.gotoStart("main"), e.stepper.gotoStart("side"));
                },
              ],
              [
                "Slash",
                () => {
                  e.stepper.canPlay() &&
                    (e.stepper.gotoTreatEndOrEnd("main"),
                    e.stepper.gotoTreatEndOrEnd("side"));
                },
              ],
              [["Equal", "NumpadAdd"], () => n.OnZoomByStep(!0)],
              [["Minus", "NumpadSubtract"], () => n.OnZoomByStep(!1)],
              ["ArrowUp", (e) => n.OnRotateOrMoveByStep(e.shiftKey ? 5 : 1)],
              ["ArrowDown", (e) => n.OnRotateOrMoveByStep(e.shiftKey ? 6 : 2)],
              ["ArrowLeft", (e) => n.OnRotateOrMoveByStep(e.shiftKey ? 7 : 3)],
              ["ArrowRight", (e) => n.OnRotateOrMoveByStep(e.shiftKey ? 8 : 4)],
            ],
            {
              validate: (t) =>
                !!e.getIn(["_configuration", "hotkeysEnabled"]) &&
                !t.ctrlKey &&
                !t.metaKey &&
                !t.altKey,
            },
          );
          return (
            l.addEventListener("mousedown", d),
            l.addEventListener("mousemove", h),
            l.addEventListener("wheel", p),
            l.addEventListener("dblclick", f),
            l.addEventListener("dblclick", m),
            l.addEventListener("touchstart", g),
            l.addEventListener("touchend", A),
            l.addEventListener("touchcancel", w),
            l.addEventListener("dragover", x),
            l.addEventListener("drop", y),
            l.addEventListener("contextmenu", E),
            l.addEventListener("__touchmove", v),
            () => {
              (l.removeEventListener("mousedown", d),
                l.removeEventListener("mousemove", h),
                l.removeEventListener("wheel", p),
                l.removeEventListener("dblclick", f),
                l.removeEventListener("dblclick", m),
                l.removeEventListener("touchstart", g),
                l.removeEventListener("touchend", A),
                l.removeEventListener("touchcancel", w),
                l.removeEventListener("dragover", x),
                l.removeEventListener("drop", y),
                l.removeEventListener("contextmenu", E),
                l.removeEventListener("touchmove", v),
                document.removeEventListener("mousemove", h),
                document.removeEventListener("mouseup", u),
                l.removeEventListener("__touchmove", v),
                C());
            }
          );
        });
      function ou(e, t) {
        var n, l;
        null == (l = (n = e.tools).SetRenderColor) ||
          l.call(n, eR.BACKGROUND, ...nW(t));
      }
      function oh(e, t) {
        var n, l;
        null == (l = (n = e.tools).SetRenderColor) ||
          l.call(n, eR.ENTIYTATTACH, ...nW(t));
      }
      function of(e, t) {
        var n, l;
        null == (l = (n = e.tools).SetRenderColor) ||
          l.call(n, eR.CBCT_JAW, ...nW(t));
      }
      function om(e, t) {
        var n, l;
        null == (l = (n = e.tools).SetRenderColor) ||
          l.call(n, eR.CBCT_CANCELLOUS, ...nW(t));
      }
      function op(e, t) {
        var n, l;
        null == (l = (n = e.tools).SetRenderColor) ||
          l.call(n, eR.CBCT_SINUS, ...nW(t));
      }
      function og(e, t) {
        var n, l;
        null == (l = (n = e.tools).SetRenderColor) ||
          l.call(n, eR.CBCTAIRWAY, ...nW(t));
      }
      function ov(e, t) {
        if (n0 && t !== tt.COMPATIBILITY) {
          let n = t === tt.QUALITY;
          e.tools.EnableSSAO(n);
        }
      }
      function oA(e, t) {
        e.tools.SetRotationType(t);
      }
      function ow(e) {
        return Object.fromEntries(n4.map((t) => [n6[t], e.includes(t)]));
      }
      function ox(e, t) {
        e.tapInstance((e) => {
          let { renderer: n } = e;
          n.UpdateProjectFeatureConfig(JSON.stringify({ collision: t }));
        });
      }
      let oy = (e) => !e || !(e.byteLength || e.length),
        oE = (e, t) => {
          if (oy(e))
            throw (
              console.error("[graphic.svelte] DDM 文件为空"),
              new eJ(eY.DDM_IS_EMPTY)
            );
          if (oy(t))
            throw (
              console.error("[graphic.svelte] ODS 文件为空"),
              new eJ(eY.ODS_IS_EMPTY)
            );
        },
        oC = (e) =>
          e.tapInstance((t) => {
            let { tools: n } = t;
            e.updateCbctOpacity(
              Object.fromEntries(eI.map((e) => [e, n.GetCBCTDefaultAlpha(e)])),
            );
          }),
        ob = async (e, t, n) => {
          var l, o, i, r, s, a, c, d, u;
          let {
            hash: h,
            file: { ddmBuffer: f, odsBuffer: m },
            dentalNotationType: p = J.oE.FDI,
          } = e;
          (n.stepper.pause(), n.stepper.clearCache("main"));
          let g = !!n.value._configuration.wasmInstanceInit.FT,
            v = !!(null == (l = n.value._configuration.wasmInstanceInit)
              ? void 0
              : l.is_deviation_analysis),
            A = !!n.value._configuration.archWidthEnabled;
          (v || oE(f, m),
            n.update((e) => {
              let { main: t } = e;
              return { _loaded: !1, main: nV(t, { loaded: !1 }) };
            }),
            await l4());
          let w = nK();
          (v
            ? t.renderer.RenderMasterWasm(
                h,
                new Uint8Array(),
                new Uint8Array(f),
                p,
              )
            : t.renderer.RenderMasterWasm(
                h,
                new Uint8Array(m),
                new Uint8Array(f),
                p,
              ),
            null == (i = (o = n.value).stat) ||
              i.call(o, {
                catalog: "性能",
                event: "Wasm解析及渲染主方案耗时",
                value: (nK() - w).toFixed(3),
              }));
          let x = new t.$$.OrthoProjectDataBus();
          (x.Init(h), (w = nK()));
          let y = n3.parse(x.GetTreatmentInfo()),
            E = e6(
              y.Treatment,
              null == (r = n.value._configuration) ? void 0 : r.ethnicity,
            ),
            C = !!y.hasDayNightModeAttach;
          null == (a = (s = n.value).stat) ||
            a.call(s, {
              catalog: "性能",
              event: "JS解析主方案耗时",
              value: (nK() - w).toFixed(3),
            });
          let { visibleMinStep: b } = n.value._configuration,
            T = oc(0, E.stepMetrics.max)(b);
          (n.update((e) => {
            let { main: t, toggleEnabled: n } = e;
            return {
              viewMode: g ? eu.DUAL : eu.SINGLE,
              main: nV(t, {
                loaded: !0,
                ft: g,
                step: T,
                analysis: E,
                __: x,
                isDayNightPlan: C,
              }),
              toggleEnabled: nV(n, {
                mpr: !0,
                bolton: !0,
                expansionArchWidth: !!(null == t ? void 0 : t.isExpansionPlan),
                archWidth: A,
              }),
              _loaded: !0,
            };
          }),
            lu(n));
          let { activeToggles: $ } = n.value._configuration;
          for (let e of n7) n.toggleSwitch(e, $.includes(e));
          (ox(n, [
            {
              plan_name: h || "",
              enable_steps: Array(E.stepMetrics.max + 1)
                .fill(1)
                .map((e, t) => t),
            },
          ]),
            $.includes("overlying") &&
              (n.toggleSwitch("overlying", !0),
              n.update({ overlyingType: 3 }),
              n.updateMain({ positionStep: 0 }),
              n.superpositionStep(h || "", 0)),
            $.includes("contact") &&
              (n.toggleSwitch("contact", !1), n.toggleSwitch("contact", !0)),
            (null == (c = null == E ? void 0 : E.gumJumpSettingType)
              ? void 0
              : c.isDesinged) && n.update({ biteJumpType: 16 }),
            g ||
              v ||
              C ||
              (await l4(100),
              null == (u = (d = t.tools).PlayAnimationByOpenFile) ||
                u.call(d, 300)),
            C &&
              (n.update({
                dayNightMode:
                  n.value._configuration.defaultDayNightMode || eH.DAY_NIGHT,
              }),
              n.value._configuration.defaultDayNightMode === eH.DAY_NIGHT &&
                setTimeout(() => {
                  n.update({ viewMode: eu.DayNight });
                }, 0)));
        },
        oT = async (e, t, n) => {
          var l, o, i, r, s, a, c, d, u;
          if ((n.stepper.pause(), n.stepper.clearCache("side"), !e)) {
            let e = n.getIn("viewMode");
            return e === eu.DUAL_HIS
              ? n.update((e) => {
                  let { main: t } = e;
                  return {
                    viewMode: (null == t ? void 0 : t.ft) ? eu.DUAL : eu.SINGLE,
                  };
                })
              : n.update({ viewMode: e });
          }
          let {
            hash: h,
            file: { ddmBuffer: f, odsBuffer: m },
            odsType: p = 0,
            dentalNotationType: g = J.oE.FDI,
            isCompareHistoryModify: v = !1,
          } = e;
          (oE(f, m), n.updateSide({ loaded: !1 }), await l4());
          let A = nK();
          (t.renderer.LoadHistoryODSWasm(
            h,
            new Uint8Array(m),
            new Uint8Array(f),
            g,
            v,
          ),
            t.tools.SeparateCompare(!0, eM.PLAN, h),
            null == (o = (l = n.value).stat) ||
              o.call(l, {
                catalog: "性能",
                event: "Wasm解析及渲染对比方案耗时",
                value: (nK() - A).toFixed(3),
              }));
          let w = new t.$$.OrthoProjectDataBus();
          (w.Init(h), (A = nK()));
          let x = n3.parse(w.GetTreatmentInfo()),
            y = e6(x.Treatment, n.value._configuration.ethnicity),
            E = !!x.hasDayNightModeAttach;
          null == (r = (i = n.value).stat) ||
            r.call(i, {
              catalog: "性能",
              event: "JS解析对比方案耗时",
              value: (nK() - A).toFixed(3),
            });
          let C = null == (s = n.value.main) ? void 0 : s.analysis,
            { visibleMinStep: b } = n.value._configuration,
            T = oc(
              0,
              null != (a = null == C ? void 0 : C.stepMetrics.max) ? a : 0,
            )(b),
            $ = oc(0, y.stepMetrics.max)(b),
            I =
              null != (c = null == C ? void 0 : C.stepMetrics.treatEnd) ? c : 0,
            O = y.stepMetrics.treatEnd,
            M = 1 === p ? I : T,
            D = 1 === p ? O : $,
            k = Array.from(
              {
                length:
                  1 +
                  Math.max(
                    (null == C ? void 0 : C.stepMetrics.max) || 0,
                    y.stepMetrics.max,
                  ),
              },
              (e, t) => t,
            );
          (ox(n, [
            {
              plan_name: (null == (d = n.value.main) ? void 0 : d.hash) || "",
              enable_steps: k,
            },
            {
              plan_name: (null == (u = n.value.side) ? void 0 : u.hash) || "",
              enable_steps: k,
            },
          ]),
            n.update((e) => {
              let { main: t, side: n, toggleEnabled: l, biteJumpType: o } = e;
              return {
                viewMode: eu.DUAL_HIS,
                main: nV(t, { step: M }),
                side: nV(n, {
                  step: D,
                  analysis: y,
                  loaded: !0,
                  __: w,
                  isDayNightPlan: E,
                }),
                biteJumpType: l.biteJump ? (null != o ? o : 16) : null,
              };
            }));
          let L = n.value.dayNightMode;
          (L === eH.DAY_NIGHT || (E && !L)) &&
            n.update({ dayNightMode: eH.DAY });
        },
        o$ = (e, t, n) => {
          let { _instance: l, viewPose: o } = n;
          l &&
            o === ef.NONE &&
            ((t = oc(0, 1)(t)), l.tools.SetJawTransparent(e, t));
        },
        oI = (e) => {
          (e.update({ viewPose: ef.INVALID }),
            e.update({ upperVisible: !0, lowerVisible: !0 }),
            e.update({ viewPose: ef.NONE }));
        },
        oO = (e) => {
          let t = e.editor.GetModifiedPlan();
          if (
            (console.log(
              "Got modified ods file: ".concat(
                null == t ? void 0 : t.byteLength,
                " bytes",
              ),
            ),
            null == t ? void 0 : t.length)
          ) {
            let e = new Uint8Array(t.length);
            return (e.set(t), e);
          }
        },
        oM = {
          _inited: !1,
          _user: { account: "", code: "", name: "" },
          _configuration: {
            assetsDir: X,
            webgl: {
              alpha: !1,
              antialias: !n1,
              powerPreference: "high-performance",
              premultipliedAlpha: !1,
              preserveDrawingBuffer: !er,
            },
            wasmInstanceInit: {
              cbct2: !er || (er && (ec || ed)),
              attach_tip_status: !0,
              FT: !1,
              show_slice_info: !0,
              ToothRoot: !1,
              JawBone: !1,
            },
            guideVisible: !1,
            attachmentGuideURL: "",
            mobileTeethGuideURL: "",
            toothSegmentGuideEnabled: !1,
            toothSegmentSelectable: !1,
            irsGuideURL: "",
            couldAddAngelButton: !1,
            visibleMinStep: 0,
            visibleMaxStep: 1 / 0,
            freedomControlAllowed: !0,
            activeToggles: [],
            activeTogglesForToothMdf: [],
            coverLayerVisible: !0,
            deviationColor: ["#B3CD7C", "#FFE39F", "#F3AD56", "#CC99DC"],
            deviationData: null,
            toothModifyToolInput: !1,
            isHaveMmIPR: !1,
            defaultDayNightMode: eH.DAY_NIGHT,
            isOverseas: !1,
          },
          _errorCode: eY.NONE,
          _errorMessage: "",
          _loaded: !1,
          _instance: null,
          _movementType: e9.SIMPLE,
          _autoResizable: !0,
          stat: async () => {},
          pixelRatio: 1,
          _refPointerPosition: [0, 0],
          size: [0, 0],
          language: "en",
          bgTextColor: "",
          bgColor: "#eff0f6",
          achColor: "#f19191",
          cbctJawColor: "#f9f7ed",
          cbctCancellousColor: "#f9f7ed",
          cbctSinusColor: "#f9f7ed",
          cbctAirwayColor: "#f9f7ed",
          renderingType: es
            ? tt.COMPATIBILITY
            : n0
              ? tt.QUALITY
              : tt.COMPATIBILITY,
          trackballEnabled: !0,
          autoLayout: !1,
          dualViewLayout: eB.HORIZONTAL,
          main: null,
          side: null,
          viewMode: eu.SINGLE,
          viewPose: ef.NONE,
          toggle: {
            overlying: !1,
            fdi: !1,
            attachment: !1,
            grid: !1,
            ipr: !1,
            distance: !1,
            contact: !1,
            bolton: !1,
            toothRoot: !1,
            jawbone: !1,
            boneCollision: !1,
            mpr: !1,
            occlSection: !1,
            boneSection: !1,
            rsc: !1,
            movement: !1,
            cover: !1,
            tma: !1,
            deviation: !1,
            pa: !1,
            biteJump: !1,
            simGum: !1,
            expansionArchWidth: !1,
            archWidth: !1,
          },
          toggleEnabled: {
            overlying: !1,
            fdi: !1,
            attachment: !1,
            distance: !1,
            bolton: !1,
            grid: !1,
            ipr: !1,
            measure: !1,
            contact: !1,
            view: !1,
            toothRoot: !1,
            jawbone: !1,
            boneCollision: !1,
            mpr: !1,
            occlSection: !1,
            boneSection: !1,
            sectionGroup: !1,
            rsc: !1,
            movement: !1,
            cover: !1,
            tma: !1,
            deviation: !1,
            pa: !1,
            biteJump: !1,
            simGum: !1,
            expansionArchWidth: !1,
            archWidth: !1,
          },
          upperOpacity: 1,
          upperVisible: !0,
          lowerOpacity: 1,
          lowerVisible: !0,
          cbctOpacities: {
            [e$.ROOT]: 0,
            [e$.JAW_OR_CORTICAL_BONE]: 0,
            [e$.CANCELLOUS_BONE]: 0,
            [e$.MAXILLARY_SINUS]: 0,
            [e$.AIRWAY]: 0,
          },
          selectedFdi: -1,
          selectedToothSegment: "crown",
          selectedMPRPosition: [0, 0, 0],
          menu: {
            pointerPosition: [0, 0],
            list: [],
            confirmList: [],
            triggerIndex: -1,
          },
          overbite: [],
          mdf: {
            __: null,
            __name: "",
            enabled: !1,
            hasModifications: !1,
            entering: !1,
            readonly: !1,
            autoComment: "",
            autoCommentZH: "",
            canUndo: !1,
            canRedo: !1,
            canReset: !1,
            toothMoveData: null,
            odsFile: new Uint8Array(),
            working: !1,
            comparing: !1,
            compareType: null,
            toolType: ew.NONE,
            following: !1,
            spaceAndIprVisible: !0,
            angelButtonInvalidTips: "",
            movingAnterior: !0,
            selectedJaw: e8.UPPER,
            archSymmetricEnabled: !0,
            archMatchEnabled: !1,
            stepMovement: null,
            singleStepMovement: null,
            isAttachPicked: !1,
            angelButtonReady: !1,
            modAttachType: null,
            modToothToolType: 0,
            isMovable: !0,
            excessIprAllowed: !1,
            occlusalPlaneWorking: !1,
            occlusalPlaneRotation: [0, 0, 0],
            occlusalPlaneChanged: !1,
            suMessage: null,
            positionStep: null,
            toothTabType: e_.TOTAL,
            lmc: 0,
            expressEnabled: !1,
          },
          hoverMessage: null,
          contextmenu: null,
          overlyingType: null,
          biteJumpType: null,
          dayNightMode: null,
        },
        oD = et > 2,
        ok = (e) =>
          n1
            ? 1280
            : es
              ? e === tt.COMPATIBILITY
                ? 1280
                : e === tt.PERFORMANCE
                  ? 1440
                  : 1920
              : e === tt.COMPATIBILITY
                ? 1920
                : e === tt.PERFORMANCE
                  ? 2880
                  : 3840,
        oL = (e, t) => {
          let [n, l] = e,
            o = Math.max(n, l),
            i = o * et,
            r = ok(t),
            s =
              Math.min(
                oD
                  ? Math.min(i, Math.min(2 * o, r))
                  : Math.min(i, Math.max(o, r)),
                3840,
              ) / o;
          return [oc(1, 1 / 0)(eZ(n * s)), oc(1, 1 / 0)(eZ(l * s))];
        },
        oN = (e, t, n, l) => {
          let o;
          let i = document.createElement("canvas");
          ((i.draggable = !1),
            (i.style.cssText =
              "position:relative;z-index:0;width:100%;height:100%;user-select:none;"));
          let { webgl: r, wasmInstanceInit: s } = l.value._configuration;
          try {
            if (
              (t.GL.makeContextCurrent(
                t.GL.createContext(i, {
                  ...r,
                  majorVersion: n,
                  minorVersion: 0,
                }),
              ),
              !(o = t.GL.currentContext.handle))
            )
              throw Error("Invalid WebGL Handle.");
          } catch (e) {
            throw new eJ(
              eY.SIMULATOR_CANVAS_GET_CONTEXT_FAILED,
              "无法创建 WebGL context: ".concat(e.message),
            );
          }
          let a = new t.VectorTouch(),
            c = new t.AppInitializer(""),
            d = new t.ViewEventManager();
          d.mouseState = ep.NONE;
          let u = new t.ViewToolsManager(),
            h = new t.ProjectRender(),
            f = new t.TargetStepEditor(),
            {
              dualViewLayout: m,
              _configuration: {
                freedomControlAllowed: p,
                activeToggles: g,
                activeTogglesForToothMdf: v,
              },
            } = l.value,
            A = JSON.stringify({
              ...s,
              dual_view_layout_type: m,
              show_move_z_ctrl: p,
              ...ow(g),
            });
          (console.log("WasmInit", A), c.Init(A));
          let w = JSON.stringify(ow(v));
          return (
            console.log("ToogleInitInMdf", w),
            c.SetModifyCustomizedStatus(w),
            e.appendChild(i),
            {
              $$: t,
              _glCtx: o,
              el: e,
              canvas: i,
              touches: a,
              app: c,
              tools: u,
              events: d,
              renderer: h,
              editor: f,
            }
          );
        },
        oR = (e) => {
          null !== e &&
            ["events", "tools", "editor", "renderer", "app"].forEach((t) => {
              try {
                (e[t].isDeleted() || e[t].delete(), e.el.removeChild(e.canvas));
              } catch (e) {}
            });
        },
        oS = async (e, t) => {
          console.log("YOLO.  ", e);
          console.log(t);
          let n = e.resolveAssetURL("webgl".concat(t, "/simulator.js")),
            l = e.resolveAssetURL("webgl".concat(t, "/simulator.wasm")),
            o = e.resolveAssetURL("webgl".concat(t, "/simulator.data"));
          //   let n = e.resolveAssetURL("/simulator.js"),
          //     l = e.resolveAssetURL("/simulator.wasm"),
          //     o = e.resolveAssetURL("/simulator.data");
          //   console.log("N ", n);
          //   console.log("L ", l);
          //   console.log("O ", o);
          try {
            let [e, t, i] = await Promise.all([
              (0, K.r)(n),
              (0, W.x)(l),
              (0, W.x)(o),
            ]);
            return { jsText: e, wasmBinary: t, dataBinary: i };
          } catch (t) {
            let e = t.message;
            throw (
              console.error("必要的库文件下载失败", e || t),
              new eJ(eY.LIBS_LOADING_FAILED, "必要的库文件下载失败: ".concat(e))
            );
          }
        },
        oB = async (e, t) => {
          var n, l, o, i, r, s, a, c, d, u, h, f, m, p;
          let g = () => {};
          if (!e || !t) return g;
          try {
            (null == (l = (n = t.value).stat) ||
              l.call(n, { catalog: "性能", event: "GPU", value: n_() }),
              null == (i = (o = t.value).stat) ||
                i.call(o, {
                  catalog: "性能",
                  event: "Screen",
                  value: JSON.stringify({
                    availWidth: screen.availWidth,
                    availHeight: screen.availHeight,
                    width: screen.width,
                    height: screen.height,
                    orientation: {
                      angle:
                        null !=
                        (f =
                          null == (h = screen.orientation) ? void 0 : h.angle)
                          ? f
                          : 0,
                      type:
                        null !=
                        (p = null == (m = screen.orientation) ? void 0 : m.type)
                          ? p
                          : "portrait-primary",
                    },
                    colorDepth: screen.colorDepth || 0,
                    pixelDepth: screen.pixelDepth || 0,
                    isExtended: screen.isExtended,
                    pixelRatio: et,
                  }),
                }));
            let v = n0 && t.value.renderingType !== tt.COMPATIBILITY ? 2 : 1;
            null == (s = (r = t.value).stat) ||
              s.call(r, {
                catalog: "性能",
                event: "渲染模式",
                value: ""
                  .concat(tt[t.value.renderingType], " / WebGL")
                  .concat(v),
              });
            let A = nK(),
              w = await oS(t, v);
            null == (c = (a = t.value).stat) ||
              c.call(a, {
                catalog: "性能",
                event: "基础库下载耗时",
                value: "".concat((nK() - A).toFixed(3)),
              });
            let x = (e) => t.update({ _errorCode: e }),
              y = oa(t),
              {
                wasmMemoryBreakpoints: E,
                wasmMemoryAlignment: C,
                isHaveMmIPR: b,
              } = t.value._configuration;
            A = nK();
            let T = await e2({
              ...w,
              wasmMemoryBreakpoints: E,
              wasmMemoryAlignment: C,
              onError: x,
              onChange: y,
            });
            null == (u = (d = t.value).stat) ||
              u.call(d, {
                catalog: "性能",
                event: "Wasm编译耗时",
                value: (nK() - A).toFixed(3),
              });
            let $ = oN(e, T, v, t);
            t.update({ _instance: $ });
            let [I, O] = t.getIn("size");
            (($.canvas.width = I),
              ($.canvas.height = O),
              $.app.InitViewport($._glCtx, I, O),
              (function (e) {
                let {
                  language: t,
                  bgColor: n,
                  achColor: l,
                  cbctJawColor: o,
                  cbctCancellousColor: i,
                  cbctSinusColor: r,
                  cbctAirwayColor: s,
                  renderingType: a,
                  trackballEnabled: c,
                } = e.value;
                (l1(e, t),
                  e.tapInstance((e) => {
                    (ou(e, n),
                      oh(e, l),
                      of(e, o),
                      om(e, i),
                      op(e, r),
                      og(e, s),
                      ov(e, a),
                      oA(e, c));
                  }));
              })(t),
              $.tools.SetMaxMinSliceValue(b ? 0.1 : 0.2, 0.5),
              await l_(t));
            let M = nP(
              nY(
                $.canvas,
                "webglcontextlost",
                (e) => {
                  (e.preventDefault(),
                    console.log("weglcontextlost"),
                    x(eY.SIMULATOR_CANVAS_CONTEXT_LOST));
                },
                !1,
              ),
              nY(
                $.canvas,
                "webglcontextrestored",
                () => {
                  console.log("webglcontextrestored");
                },
                !1,
              ),
              od(t),
            );
            g = () => {
              var e, n, l, o, i, r;
              (M(),
                oR($),
                null == (n = null == (e = t.value.main) ? void 0 : e.__) ||
                  n.delete(),
                null == (o = null == (l = t.value.side) ? void 0 : l.__) ||
                  o.delete(),
                null == (r = null == (i = t.value.mdf) ? void 0 : i.__) ||
                  r.delete(),
                t.update({ _instance: null }));
            };
          } catch (e) {
            throw (
              console.error("[graphic.svelte] 方案模拟器 - 初始化出错: ", e),
              new eJ(
                e.code || eY.SIMULATOR_INIT_FAILED,
                "方案模拟器 - 初始化出错: ".concat(e.message),
              )
            );
          }
          return g;
        },
        oP = nU(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = Array(e);
          return nS(t, (e, t) => {
            (t([e, ...n]), n.unshift(e), n.pop());
          });
        }),
        oU = nU(function (e, t) {
          return oP(1)(e).subscribe((e) => {
            let [n, l] = e;
            return t(n, l);
          });
        });
      function oj(e, t) {
        let [n, l] = t;
        n > l
          ? e.update({ dualViewLayout: eB.HORIZONTAL })
          : e.update({ dualViewLayout: eB.VERTICAL });
      }
      let oz = !0,
        oH = (e) =>
          oU(e)((t, n) => {
            var l, o, i, r, s, a, c, d, u, h, f, m, p, g, v, A, w, x;
            try {
              if (ee) {
                let e = Object.keys(nJ(n, t) || {});
                e.length &&
                  console.log(
                    "%cState Changed".concat(
                      e.map((e) => "%c %c".concat(e)).join(""),
                    ),
                    "padding:0 10px;font-size:12px;line-height:16px;background-color:#08d;color:#fff;",
                    ...e
                      .map(() => [
                        "",
                        "padding:0 6px;font-size:12px;line-height:16px;background:#8d0;color:#fff;",
                      ])
                      .flat(1),
                  );
              }
              let y = t._instance;
              if (
                !y ||
                (nz(t.language, null == n ? void 0 : n.language) &&
                  l1(e, t.language),
                nz(t.bgColor, null == n ? void 0 : n.bgColor) &&
                  (ou(y, t.bgColor),
                  e.update({
                    bgTextColor: nQ(t.bgColor, {
                      light: "#a0a3bd",
                      dark: "#4e4b66",
                    }),
                  })),
                nz(t.achColor, null == n ? void 0 : n.achColor) &&
                  oh(y, t.achColor),
                nz(t.cbctJawColor, null == n ? void 0 : n.cbctJawColor) &&
                  of(y, t.cbctJawColor),
                nz(
                  t.cbctCancellousColor,
                  null == n ? void 0 : n.cbctCancellousColor,
                ) && om(y, t.cbctCancellousColor),
                nz(t.cbctSinusColor, null == n ? void 0 : n.cbctSinusColor) &&
                  op(y, t.cbctSinusColor),
                nz(t.cbctAirwayColor, null == n ? void 0 : n.cbctAirwayColor) &&
                  og(y, t.cbctAirwayColor),
                nz(t.renderingType, null == n ? void 0 : n.renderingType) &&
                  ov(y, t.renderingType),
                nz(
                  t.trackballEnabled,
                  null == n ? void 0 : n.trackballEnabled,
                ) && oA(y, t.trackballEnabled),
                nz(t.size, null == n ? void 0 : n.size) &&
                  (([y.canvas.width, y.canvas.height] = t.size),
                  y.events.OnSize(y._glCtx, ...t.size),
                  t.autoLayout && oj(e, t.size)),
                nz(t.autoLayout, null == n ? void 0 : n.autoLayout) &&
                  t.autoLayout &&
                  oj(e, t.size),
                nz(t.dualViewLayout, null == n ? void 0 : n.dualViewLayout) &&
                  (y.tools.SetDualViewLayoutType(t.dualViewLayout),
                  t.viewMode === eu.DUAL && y.tools.SetViewMode(t.viewMode, !0),
                  t.dayNightMode === eH.DAY_NIGHT &&
                    y.tools.SetViewMode(eu.DayNight, !0)),
                nz(
                  t.menu.confirmList,
                  null == n ? void 0 : n.menu.confirmList,
                ) && oG(t, y),
                nz(
                  t.menu.triggerIndex,
                  null == n ? void 0 : n.menu.triggerIndex,
                ) &&
                  -1 !== t.menu.triggerIndex &&
                  (y.editor.SelectMenuByIndex(t.menu.triggerIndex),
                  lf(e),
                  e.updateMenu({ list: [], triggerIndex: -1 })),
                nz(
                  t._configuration.activeTogglesForToothMdf,
                  null == n
                    ? void 0
                    : n._configuration.activeTogglesForToothMdf,
                ) &&
                  (function (e) {
                    let {
                      _configuration: { activeTogglesForToothMdf: t },
                    } = e.value;
                    e.tapInstance((e) => {
                      let { app: n } = e,
                        l = JSON.stringify(
                          Object.fromEntries(
                            n4
                              .filter((e) => t.includes(e))
                              .map((e) => [n6[e], !0]),
                          ),
                        );
                      n.SetModifyCustomizedStatus(l);
                    });
                  })(e),
                !t.main) ||
                (nz(
                  null == (l = t.main) ? void 0 : l.hash,
                  null == (o = null == n ? void 0 : n.main) ? void 0 : o.hash,
                ) &&
                  ob(t.main, y, e).catch((t) => {
                    var n;
                    console.error(t);
                    let l = null != (n = t.code) ? n : eY.SIMULATOR_ERROR,
                      o = t.message || "";
                    e.update({ _errorCode: l, _errorMessage: o });
                  }),
                nz(t.toggle.jawbone, null == n ? void 0 : n.toggle.jawbone) &&
                  t.toggle.jawbone &&
                  oC(e),
                nz(t.upperOpacity, null == n ? void 0 : n.upperOpacity) &&
                  o$(!0, t.upperOpacity, t),
                nz(t.upperVisible, null == n ? void 0 : n.upperVisible) &&
                  t.viewPose === ef.NONE &&
                  y.tools.ReverseJawVisible(!0),
                nz(t.lowerOpacity, null == n ? void 0 : n.lowerOpacity) &&
                  o$(!1, t.lowerOpacity, t),
                nz(t.lowerVisible, null == n ? void 0 : n.lowerVisible) &&
                  t.viewPose === ef.NONE &&
                  y.tools.ReverseJawVisible(!1),
                nz(t.toggle.contact, null == n ? void 0 : n.toggle.contact) &&
                  (t.toggle.contact
                    ? e.update({ upperOpacity: 0.6, lowerOpacity: 0.6 })
                    : e.update({ upperOpacity: 1, lowerOpacity: 1 })),
                !t._loaded)
              )
                return;
              if (
                (nz(
                  null == (i = t.side) ? void 0 : i.hash,
                  null == (r = null == n ? void 0 : n.side) ? void 0 : r.hash,
                ) &&
                  oT(t.side, y, e).catch((t) => {
                    var n;
                    console.error(t);
                    let l = null != (n = t.code) ? n : eY.SIMULATOR_ERROR,
                      o = t.message || "";
                    e.update({ _errorCode: l, _errorMessage: o });
                  }),
                eI.forEach((e) => {
                  nz(
                    t.cbctOpacities[e],
                    null == n ? void 0 : n.cbctOpacities[e],
                  ) && y.tools.SetCBCTTransparency(e, t.cbctOpacities[e]);
                }),
                nz(t.viewMode, null == n ? void 0 : n.viewMode) &&
                  (function (e, t, n) {
                    var l;
                    if (
                      !e.main ||
                      e.viewMode === eu.NONE ||
                      e.viewMode === eu.SECTION
                    )
                      return;
                    let o =
                      null == (l = e._configuration.wasmInstanceInit)
                        ? void 0
                        : l.is_deviation_analysis;
                    (e.viewMode === eu.DUAL_HIS ||
                      o ||
                      n.update({ side: void 0 }),
                      t.tools.SetViewMode(e.viewMode, !0),
                      oI(n),
                      e.viewMode === eu.SINGLE &&
                        !o &&
                        (e.main.ft ||
                          e.mdf.working ||
                          t.tools.UpdateStep(1, e.main.step)),
                      n.update((t) => {
                        let { toggleEnabled: n } = t;
                        return o
                          ? {
                              toggleEnabled: {
                                ...n,
                                movement: !0,
                                deviation: !0,
                                cover:
                                  [eu.SINGLE, eu.SECTION, eu.DayNight].includes(
                                    e.viewMode,
                                  ) || e.mdf.working,
                              },
                            }
                          : {
                              toggleEnabled: {
                                ...n,
                                movement:
                                  [eu.SINGLE, eu.DayNight].includes(
                                    e.viewMode,
                                  ) || e.mdf.working,
                                cover:
                                  [eu.SINGLE, eu.SECTION, eu.DayNight].includes(
                                    e.viewMode,
                                  ) || e.mdf.working,
                              },
                            };
                      }));
                  })(t, y, e),
                nz(t.viewPose, null == n ? void 0 : n.viewPose) &&
                  t.viewPose !== ef.NONE &&
                  t.viewPose !== ef.INVALID &&
                  (t.viewMode === eu.SECTION
                    ? y.tools.SetViewport(eh.MULTI_RIGHT, t.viewPose)
                    : y.tools.SetViewport(eh.MAIN, t.viewPose),
                  e.update({
                    upperVisible: t.viewPose !== ef.LOWER_OCCL,
                    lowerVisible: t.viewPose !== ef.UPPER_OCCL,
                  }),
                  e.update({ viewPose: ef.NONE })),
                nz(
                  t.main.step,
                  null == (s = null == n ? void 0 : n.main) ? void 0 : s.step,
                ) &&
                  !t.main.ft &&
                  t.viewMode !== eu.DUAL &&
                  !(null == (a = t._configuration.wasmInstanceInit)
                    ? void 0
                    : a.is_deviation_analysis))
              ) {
                let e = oc(
                  t._configuration.visibleMinStep,
                  t._configuration.visibleMaxStep,
                )((null == (c = t.main) ? void 0 : c.step) | 0);
                y.tools.UpdateStep(1, e);
              }
              if (
                (nz(
                  t.main.step,
                  null == (d = null == n ? void 0 : n.main) ? void 0 : d.step,
                ) && lc(e),
                nz(
                  null == (u = t.side) ? void 0 : u.step,
                  null == (h = null == n ? void 0 : n.side) ? void 0 : h.step,
                ) &&
                  (null == (f = t._configuration.wasmInstanceInit)
                    ? void 0
                    : f.is_deviation_analysis) &&
                  lc(e),
                nz(t._movementType, null == n ? void 0 : n._movementType) &&
                  lc(e),
                t.side &&
                  nz(
                    t.side.step,
                    null == (m = null == n ? void 0 : n.side) ? void 0 : m.step,
                  ))
              ) {
                let e = oc(
                  t._configuration.visibleMinStep,
                  t._configuration.visibleMaxStep,
                )(0 | t.side.step);
                (
                  null == (p = t._configuration.wasmInstanceInit)
                    ? void 0
                    : p.is_deviation_analysis
                )
                  ? [eu.DUAL_HIS].includes(t.viewMode) &&
                    y.tools.UpdateStep(2, e)
                  : t.viewMode === eu.DUAL_HIS && y.tools.UpdateStep(2, e);
              }
              if (
                nz(
                  t.toggle.occlSection,
                  null == n ? void 0 : n.toggle.occlSection,
                ) ||
                nz(
                  t.toggle.boneSection,
                  null == n ? void 0 : n.toggle.boneSection,
                )
              ) {
                let n = null == t ? void 0 : t.dayNightMode;
                (t.toggle.occlSection || t.toggle.boneSection
                  ? (e.update({ viewMode: eu.SECTION }),
                    t.mdf.working && e.updateMdf({ toolType: ew.TOOTH }))
                  : t.viewMode === eu.SECTION &&
                    (e.update({
                      viewMode: t.mdf.working ? eu.NONE : eu.SINGLE,
                      dayNightMode: null,
                    }),
                    e.update({ dayNightMode: n })),
                  oI(e));
              }
              if (nz(t.toggle.mpr, null == n ? void 0 : n.toggle.mpr)) {
                let n = e.getMPRPositionByFDI(
                  -1 === t.selectedFdi || -2 === t.selectedFdi
                    ? 11
                    : t.selectedFdi,
                );
                e.update({ selectedMPRPosition: n });
              }
              if (
                ((nz(t.toggle.rsc, null == n ? void 0 : n.toggle.rsc) ||
                  nz(t.toggle.pa, null == n ? void 0 : n.toggle.pa)) &&
                  (e.stepper.gotoStep("main", t.main.step),
                  t.side && e.stepper.gotoStep("side", t.side.step)),
                nz(t.toggle.movement, null == n ? void 0 : n.toggle.movement) &&
                  ((
                    null == (g = t._configuration.wasmInstanceInit)
                      ? void 0
                      : g.is_deviation_analysis
                  )
                    ? t.toggle.movement && e.update({ _movementType: e9.TABLE })
                    : t.toggle.movement &&
                      e.update({ _movementType: e9.SIMPLE })),
                nz(t.toggle.cover, null == n ? void 0 : n.toggle.cover) &&
                  t.toggle.cover &&
                  lu(e),
                nz(
                  t.toggle.overlying,
                  null == n ? void 0 : n.toggle.overlying,
                ) &&
                  t._configuration.wasmInstanceInit.is_deviation_analysis &&
                  t.toggle.overlying &&
                  e.toggleSwitch("movement", !0),
                !nz(t.selectedFdi, null == n ? void 0 : n.selectedFdi) ||
                  (lc(e),
                  !t.mdf.working ||
                    t.mdf.entering ||
                    (-2 === t.selectedFdi
                      ? t.toggle.occlSection ||
                        t.toggle.boneSection ||
                        t.mdf.toolType !== ew.TOOTH ||
                        e.updateMdf({ toolType: ew.ATTACHMENT })
                      : -1 !== t.selectedFdi &&
                        t.mdf.toolType === ew.ATTACHMENT &&
                        e.updateMdf({ toolType: ew.TOOTH }))),
                nz(t.mdf.toolType, null == n ? void 0 : n.mdf.toolType))
              ) {
                if (t.mdf.toolType === ew.ATTACHMENT) {
                  let t = !y.editor.IsNeedCalBHLocations();
                  e.updateMdf({ angelButtonReady: t });
                }
                setTimeout(() => {
                  var n;
                  (y.editor.PickTool(t.mdf.toolType), lf(e));
                  let { activeTogglesForToothMdf: l } = t._configuration;
                  if (oz && t.mdf.toolType === ew.TOOTH) {
                    for (let o of (l.includes("overlying") &&
                      (e.toggleSwitch("overlying", !0),
                      e.superpositionStep(
                        (null == (n = t.mdf) ? void 0 : n.__name) || "",
                        0,
                      ),
                      e.updateMdf({ positionStep: 0 }),
                      e.update({
                        overlyingType: t.overlyingType ? t.overlyingType : 1,
                      })),
                    n7))
                      l.includes(o) && e.toggleSwitch(o, !0);
                    oz = !1;
                  }
                });
              }
              if (
                (nz(t.mdf.following, null == n ? void 0 : n.mdf.following) &&
                  y.editor.SetFollowUp(t.mdf.following),
                nz(
                  t.mdf.spaceAndIprVisible,
                  null == n ? void 0 : n.mdf.spaceAndIprVisible,
                ) && y.editor.ShowSpaceAndIPR(t.mdf.spaceAndIprVisible),
                nz(
                  t.mdf.movingAnterior,
                  null == n ? void 0 : n.mdf.movingAnterior,
                ) && y.editor.SetMobileTeeth(t.mdf.movingAnterior),
                nz(t.mdf.selectedJaw, null == n ? void 0 : n.mdf.selectedJaw) &&
                  (t.mdf.selectedJaw === e8.UPPER && y.editor.SelectUpperJaw(),
                  t.mdf.selectedJaw === e8.LOWER && y.editor.SelectLowerJaw()),
                nz(
                  t.mdf.archSymmetricEnabled,
                  null == n ? void 0 : n.mdf.archSymmetricEnabled,
                ) && y.editor.SetArchCurveSymmetry(t.mdf.archSymmetricEnabled),
                nz(
                  t.mdf.archMatchEnabled,
                  null == n ? void 0 : n.mdf.archMatchEnabled,
                ) &&
                  y.editor.SetArchCurveMatchOppositeJaw(t.mdf.archMatchEnabled),
                nz(
                  t.mdf.excessIprAllowed,
                  null == n ? void 0 : n.mdf.excessIprAllowed,
                ))
              ) {
                let e = t._configuration.isHaveMmIPR ? 0.1 : 0.2,
                  n = t.mdf.excessIprAllowed ? 1 : 0.5;
                y.tools.SetMaxMinSliceValue(e, n);
              }
              if (
                nz(
                  null == (v = t.mdf) ? void 0 : v.toothTabType,
                  null == (A = null == n ? void 0 : n.mdf)
                    ? void 0
                    : A.toothTabType,
                )
              ) {
                let t = l3(e);
                e.updateMdf({ toothMoveData: t });
              }
              if (
                (nz(
                  null == t ? void 0 : t.biteJumpType,
                  null == n ? void 0 : n.biteJumpType,
                ) &&
                  (y.tools.SetBiteJumpType(
                    null != (w = null == t ? void 0 : t.biteJumpType) ? w : 1,
                  ),
                  t.toggle.cover && lu(e)),
                nz(
                  null == t ? void 0 : t.dayNightMode,
                  null == n ? void 0 : n.dayNightMode,
                ))
              ) {
                if (
                  (((null == t ? void 0 : t.dayNightMode) === eH.DAY_NIGHT ||
                    (null == n ? void 0 : n.dayNightMode) === eH.DAY_NIGHT) &&
                    e.toggleSwitch("distance", !1),
                  t.viewMode === eu.DayNight &&
                    e.update({ viewMode: eu.SINGLE }),
                  (null == t ? void 0 : t.dayNightMode) === eH.DAY_NIGHT)
                ) {
                  e.update({ viewMode: eu.DayNight });
                  return;
                }
                y.tools.SetDayNightMode(
                  null != (x = null == t ? void 0 : t.dayNightMode) ? x : 0,
                );
              }
            } catch (l) {
              console.error(l);
              let t = l.code,
                n = l.message || "";
              e.update({
                _errorCode: null != t ? t : eY.UNKNOWN,
                _errorMessage: n,
              });
            }
          });
      async function oG(e, t) {
        if (!e.menu.confirmList.length) return;
        let n = l0(e.language),
          l = e.menu.confirmList[0];
        (l.type === eC.NOT_NEED_CONFIRM
          ? await lK({
              title: n.t("not_confirm.title"),
              yes: "",
              no: n.t("not_confirm.close"),
              width: "446px",
              minHeight: "174px",
              text: l.text,
            })
          : await lK({
              title: n.t("attach_notice.title"),
              yes: n.t("attach_notice.delete"),
              no: n.t("attach_notice.cancel"),
              width: "446px",
              minHeight: "174px",
              text: l.text,
            })) && t.editor.SelectMenuByIndex(0);
      }
      let oV = (e) => {
          var t, n, l, o, i, r;
          let { main: s, mdf: a, overlyingType: c } = e.value;
          if (c && s) {
            if (
              (e.toggleSwitch("overlying", !0), null == a ? void 0 : a.working)
            )
              (e.superpositionStep(
                (null == s ? void 0 : s.hash) || "",
                2 === c
                  ? null == (t = null == s ? void 0 : s.analysis)
                    ? void 0
                    : t.stepMetrics.treatEnd
                  : 0,
              ),
                e.updateMain({
                  positionStep:
                    2 === c
                      ? null == (n = null == s ? void 0 : s.analysis)
                        ? void 0
                        : n.stepMetrics.treatEnd
                      : 0,
                }),
                e.superpositionStep(
                  (null == a ? void 0 : a.__name) || "",
                  2 === c
                    ? null == (l = null == s ? void 0 : s.analysis)
                      ? void 0
                      : l.stepMetrics.treatEnd
                    : 0,
                ),
                e.updateMdf({
                  positionStep:
                    2 === c
                      ? null == (o = null == s ? void 0 : s.analysis)
                        ? void 0
                        : o.stepMetrics.treatEnd
                      : 0,
                }),
                e.update({ overlyingType: 3 === c ? 1 : c }));
            else {
              let t = 0;
              ((t =
                1 === c
                  ? 0
                  : 2 === c
                    ? null == (i = null == s ? void 0 : s.analysis)
                      ? void 0
                      : i.stepMetrics.treatEnd
                    : null != (r = null == s ? void 0 : s.positionStep)
                      ? r
                      : 0),
                e.superpositionStep((null == s ? void 0 : s.hash) || "", t),
                e.updateMain({ positionStep: t }));
            }
          }
        },
        oZ = {
          overlying: em.OVERLYING,
          fdi: em.FDI,
          attachment: em.ATTACHMENT,
          grid: em.GRID,
          ipr: em.IPR,
          distance: em.DISTANCE,
          contact: em.CONTACT,
          bolton: void 0,
          toothRoot: em.TOOTH_ROOT,
          jawbone: em.JAWBONE,
          boneCollision: em.BONE_COLLISION,
          mpr: void 0,
          occlSection: em.OCCL_SECTION,
          boneSection: em.BONE_SECTION,
          rsc: em.RSC,
          tma: em.TMA,
          pa: em.PA,
          biteJump: em.BITE_JUMP,
          deviation: void 0,
          movement: void 0,
          cover: void 0,
          simGum: em.SIM_GUM,
          expansionArchWidth: void 0,
          archWidth: void 0,
        },
        oF = !1,
        oJ = 0;
      async function oY(e, t, n) {
        (e.updateMdf({ entering: !0 }), await nB(20));
        let l = "m_".concat(oJ++),
          o = n.editor.StartModify(l, t.mdf.odsFile, !0);
        if (
          (console.log(
            "Enter mdf -> "
              .concat(o, ", ")
              .concat(t.mdf.odsFile.byteLength, " bytes"),
          ),
          !o)
        )
          throw (
            (oF = !0),
            oJ--,
            e.updateMdf({ working: !1, entering: !1 }),
            new eJ(eY.SIMULATOR_START_MODIFY_FAILED, "进入修改失败")
          );
        oF = !1;
        let i = t.mdf.__ || new n.$$.OrthoProjectDataBus(),
          r = localStorage.getItem(
            "".concat(
              t._user.account,
              "::3d::new-feature-label::moveToothType",
            ),
          );
        (i.Init(l),
          e.updateMdf({
            __: i,
            __name: l,
            toolType: -2 === t.selectedFdi ? ew.ATTACHMENT : ew.TOOTH,
            spaceAndIprVisible: !0,
            movingAnterior: Number(r) === ek.ANTERIOR,
            entering: !1,
            working: !0,
          }),
          t.mdf.expressEnabled && e.toggleSwitch("tma", !1),
          lu(e),
          e.update({ viewMode: eu.SINGLE }),
          lc(e),
          e.OPE.syncStatus(),
          oV(e),
          t.dayNightMode === eH.DAY_NIGHT && e.update({ dayNightMode: eH.DAY }),
          (null == t ? void 0 : t.dayNightMode) &&
            n.tools.SetDayNightMode(t.dayNightMode));
      }
      let oK = eM.ORIGIN;
      function oW(e) {
        return (t, n) =>
          e.tapInstance((l) => {
            var o;
            let { tools: i } = l,
              {
                main: r,
                mdf: s,
                stat: a,
                toggle: c,
                overlyingType: d,
              } = e.value;
            if (!s.enabled || t === s.comparing) return;
            let u =
              null == (o = null == r ? void 0 : r.analysis)
                ? void 0
                : o.stepMetrics.treatEnd;
            (t &&
              ((oK = n),
              e.updateMain({ step: n === eM.ORIGIN ? 0 : u }),
              c.overlying &&
                d &&
                u &&
                (e.superpositionStep(
                  (null == r ? void 0 : r.hash) || "",
                  2 === d ? u : 0,
                ),
                e.updateMain({ positionStep: 2 === d ? u : 0 }))),
              i.SeparateCompare(t, n, s.__name),
              e.updateMdf({ comparing: t, compareType: t ? n : eM.NONE }),
              c.overlying &&
                d &&
                u &&
                (e.superpositionStep(s.__name || "", 2 === d ? u : 0),
                e.superpositionStep(
                  (null == r ? void 0 : r.hash) || "",
                  2 === d ? u : 0,
                ),
                e.updateMdf({ positionStep: 2 === d ? u : 0 }),
                e.update({ overlyingType: 3 === d ? 1 : d })),
              oI(e),
              a({
                catalog: "医生修改",
                event: t ? "进入对比" : "退出对比",
                value:
                  n === eM.DayNight
                    ? "日夜方案"
                    : n === eM.ORIGIN
                      ? "初始位"
                      : "修改前",
              }));
          });
      }
      let oq = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        oQ = (e) => async (t) => {
          if (!n0) return;
          let { renderingType: n, _loaded: l } = e.value;
          if (t === n) return;
          if (!l || ![n, t].includes(tt.COMPATIBILITY))
            return e.update({ renderingType: t });
          let {
            _configuration: o,
            language: i,
            bgColor: r,
            achColor: s,
            cbctJawColor: a,
            cbctCancellousColor: c,
            cbctSinusColor: d,
            cbctAirwayColor: u,
            main: h,
            mdf: f,
          } = e.value;
          (e.update({ _inited: !1 }),
            await nB(),
            e.reset(!0),
            console.log("Config ActiveToggles", o.activeToggles),
            e.update({
              _configuration: o,
              language: i,
              bgColor: r,
              achColor: s,
              cbctJawColor: a,
              cbctCancellousColor: c,
              cbctSinusColor: d,
              cbctAirwayColor: u,
              renderingType: t,
            }),
            e.updateMdf({ enabled: f.enabled }),
            (null == h ? void 0 : h.hash) &&
              (null == h ? void 0 : h.file) &&
              e.updateMain({
                hash: null == h ? void 0 : h.hash,
                file: null == h ? void 0 : h.file,
                name: null == h ? void 0 : h.name,
                dentalNotationType: null == h ? void 0 : h.dentalNotationType,
                isExpansionPlan: null == h ? void 0 : h.isExpansionPlan,
              }),
            e.update({ _inited: !0 }));
        },
        oX = (e, t) => e.every((e, n) => 1e-6 > Math.abs(e - t[n])),
        o_ = (e) =>
          function () {
            var t;
            let n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "main",
              l = e.value[n];
            if (
              !l ||
              !l.__ ||
              !(null == (t = l.analysis) ? void 0 : t.stepMetrics)
            )
              return null;
            let o = l.dentalNotationType,
              i = l.analysis.stepMetrics.treatEnd,
              r = JSON.parse(l.__.GetExpansionArchWidth(0)),
              s = JSON.parse(l.__.GetExpansionArchWidth(i)),
              a = JSON.parse(l.__.GetExpansionArchWidth(l.step));
            return r
              .filter((e) => {
                let { t1: t } = e;
                return "upper" === e1(t);
              })
              .map((e) => {
                var t, n;
                let { t1: l, t2: i, v: r } = e,
                  c = o1(r),
                  d = o1(
                    null == (t = s.find((e) => e.t1 === l && e.t2 === i))
                      ? void 0
                      : t.v,
                  ),
                  u = o1(
                    null == (n = a.find((e) => e.t1 === l && e.t2 === i))
                      ? void 0
                      : n.v,
                  );
                return {
                  t1: (0, J.B_)(l, o),
                  t2: (0, J.B_)(i, o),
                  initialValue: c,
                  targetValue: d,
                  targetBias: o1(d - c),
                  currentValue: u,
                  currentBias: o1(u - c),
                };
              });
          };
      function o1(e) {
        let t = Number(e);
        return isNaN(t) ? NaN : +t.toFixed(1);
      }
      let o0 = (e) =>
          function () {
            var t;
            let n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "main",
              l = e.value[n];
            if (
              !l ||
              !l.__ ||
              !(null == (t = l.analysis) ? void 0 : t.stepMetrics)
            )
              return null;
            let o = l.dentalNotationType,
              i = l.analysis.stepMetrics.treatEnd,
              r = e.value.mdf,
              { overbite: s, overjet: a } = JSON.parse(
                l.__.GetAnteriorPosRelation(0),
              ),
              { overbite: c, overjet: d } = JSON.parse(
                r.working
                  ? r.__.GetAnteriorPosRelation(r.__.GetTotalStep())
                  : l.__.GetAnteriorPosRelation(i),
              ),
              u = [12, 11, 21, 22],
              h = u.map((e) => (s[e] ? e : s[e + 40] ? e + 40 : "-")),
              f = u.map((e) => (a[e] ? e : a[e + 40] ? e + 40 : "-")),
              m = +(
                Object.values(s).reduce((e, t) => e + +t, 0) /
                Object.values(s).length
              ).toFixed(1),
              p = +(
                Object.values(c).reduce((e, t) => e + +t, 0) /
                Object.values(c).length
              ).toFixed(1),
              g = +(
                Object.values(a).reduce((e, t) => e + +t, 0) /
                Object.values(a).length
              ).toFixed(1),
              v = +(
                Object.values(d).reduce((e, t) => e + +t, 0) /
                Object.values(d).length
              ).toFixed(1);
            return {
              overbite: {
                cols: [
                  ...h.map((e) => ("-" === e ? "-" : (0, J.B_)(e, o))),
                  "avg",
                ],
                initial: [
                  ...h.map((e) => ("-" === e ? "-" : (+s[e]).toFixed(1))),
                  m.toFixed(1),
                ],
                target: [
                  ...h.map((e) => ("-" === e ? "-" : (+c[e]).toFixed(1))),
                  p.toFixed(1),
                ],
                delta: [
                  ...h.map((e) =>
                    "-" === e
                      ? "-"
                      : (+(+c[e]).toFixed(1) - +(+s[e]).toFixed(1)).toFixed(1),
                  ),
                  (p - m).toFixed(1),
                ],
              },
              overjet: {
                cols: [
                  ...f.map((e) => ("-" === e ? "-" : (0, J.B_)(e, o))),
                  "avg",
                ],
                initial: [
                  ...f.map((e) => ("-" === e ? "-" : (+a[e]).toFixed(1))),
                  g.toFixed(1),
                ],
                target: [
                  ...f.map((e) => ("-" === e ? "-" : (+d[e]).toFixed(1))),
                  v.toFixed(1),
                ],
                delta: [
                  ...f.map((e) =>
                    "-" === e
                      ? "-"
                      : (+(+d[e]).toFixed(1) - +(+a[e]).toFixed(1)).toFixed(1),
                  ),
                  (v - g).toFixed(1),
                ],
              },
            };
          },
        o2 = (e) =>
          function () {
            var t;
            let n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "main",
              l = e.value[n];
            if (
              !l ||
              !l.__ ||
              !(null == (t = l.analysis) ? void 0 : t.stepMetrics)
            )
              return null;
            let o = l.dentalNotationType,
              i = l.analysis.stepMetrics.treatEnd,
              r = JSON.parse(l.__.GetExpansionArchWidth(0)),
              s = JSON.parse(l.__.GetExpansionArchWidth(i)),
              a = e.value.mdf,
              c = JSON.parse(
                a.working
                  ? a.__.GetExpansionArchWidth(a.__.GetTotalStep())
                  : l.__.GetExpansionArchWidth(l.step),
              );
            return r.map((e) => {
              var t, n;
              let { t1: l, t2: i, v: r } = e,
                a = o3(r),
                d = o3(
                  null == (t = s.find((e) => e.t1 === l && e.t2 === i))
                    ? void 0
                    : t.v,
                ),
                u = o3(
                  null == (n = c.find((e) => e.t1 === l && e.t2 === i))
                    ? void 0
                    : n.v,
                );
              return {
                jawType: e1(l),
                t1: (0, J.B_)(l, o),
                t2: (0, J.B_)(i, o),
                tag: "".concat(l % 10, "-").concat(i % 10),
                initialValue: a,
                targetValue: d,
                targetBias: o3(d - a),
                currentValue: u,
                currentBias: o3(u - a),
              };
            });
          };
      function o3(e) {
        let t = Number(e);
        return isNaN(t) ? NaN : +t.toFixed(1);
      }
      let o4 = (e) =>
          function (t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (e.tapInstance((e) => {
              let { editor: l } = e;
              l.EnableExpress(t, n);
            }),
              e.updateMdf({ expressEnabled: t }));
          },
        o7 = (e) => () =>
          e.tapInstance((e) => {
            let { editor: t } = e;
            return n2(t.GetExpressRiskWarning());
          }),
        o6 = () => {
          let e = nR({ ...oM }),
            t = e.update.bind(e);
          return (
            Object.defineProperty(e, "value", { get: () => td(e) }),
            Object.assign(e, {
              getIn: (t) => nj(t, td(e)),
              update: (e) => t((t) => nV(t, "function" == typeof e ? e(t) : e)),
              _updateToggle: (t) =>
                e.update((e) => {
                  let { toggle: n } = e;
                  return { toggle: nV(n, "function" == typeof t ? t(n) : t) };
                }),
              updateMain: (t) =>
                e.update((e) => {
                  let { main: n } = e;
                  return { main: nV(n, "function" == typeof t ? t(n) : t) };
                }),
              updateSide: (t) =>
                e.update((e) => {
                  let { side: n } = e;
                  return { side: nV(n, "function" == typeof t ? t(n) : t) };
                }),
              updateMenu: (t) =>
                e.update((e) => {
                  let { menu: n } = e;
                  return { menu: nV(n, "function" == typeof t ? t(n) : t) };
                }),
              updateMdf: (t) =>
                e.update((e) => {
                  let { mdf: n } = e;
                  return { mdf: nV(n, "function" == typeof t ? t(n) : t) };
                }),
              updateCbctOpacity: (t) =>
                e.update((e) => {
                  let { cbctOpacities: n } = e;
                  return {
                    cbctOpacities: nV(n, "function" == typeof t ? t(n) : t),
                  };
                }),
              config() {
                let {
                  webgl: t = {},
                  wasmInstanceInit: n = {},
                  ...l
                } = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
                return e.update((e) => {
                  let {
                    _configuration: { webgl: o, wasmInstanceInit: i, ...r },
                  } = e;
                  return {
                    _configuration: {
                      ...r,
                      webgl: { ...o, ...t },
                      wasmInstanceInit: { ...i, ...n },
                      ...l,
                    },
                  };
                });
              },
              reset() {
                let t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return t
                  ? e.set({ ...oM, _configuration: e.getIn("_configuration") })
                  : e.set({ ...oM });
              },
              tapInstance(t, n) {
                let l = e.getIn("_instance");
                return l ? t(l) : n;
              },
              syncMdfOdsFile: (t) =>
                e.tapInstance((n) => {
                  let { stat: l } = e.value;
                  if (t ? n.editor.ForceSavePlan() : n.editor.SavePlan()) {
                    let t = oO(n);
                    if (
                      !t ||
                      (function (e, t) {
                        if (e === t) return !0;
                        if (e.length !== t.length) return !1;
                        for (let n = e.length - 1; n >= 0; n--)
                          if (e[n] !== t[n]) return !1;
                        return !0;
                      })(t, e.value.mdf.odsFile)
                    )
                      return !1;
                    let { autoComment: o, autoCommentZH: i } = e.tapInstance(
                      (t) => {
                        var n;
                        let { app: l, editor: o } = t,
                          { main: i, language: r } = e.value,
                          s =
                            null !=
                            (n = null == i ? void 0 : i.dentalNotationType)
                              ? n
                              : J.oE.FDI,
                          a = (0, J.Mp)(o.GetAutoComments(), s),
                          c = a,
                          d = "zh-CN" !== r;
                        d && l.SetLanguage("zh-CN");
                        try {
                          c = (0, J.Mp)(o.GetAutoComments(), J.oE.FDI);
                        } catch (e) {}
                        return (
                          d && l.SetLanguage(r),
                          { autoComment: a, autoCommentZH: c }
                        );
                      },
                    );
                    return (
                      e.updateMdf({
                        odsFile: t,
                        autoComment: o,
                        autoCommentZH: i,
                        hasModifications: !0,
                      }),
                      l({
                        catalog: "医生修改",
                        event: "sync-mdf-ods-file",
                        value: JSON.stringify({
                          autoComment: o,
                          autoCommentZH: i,
                          odsFile: t.byteLength,
                        }),
                      }),
                      !0
                    );
                  }
                  return !1;
                }),
              toggleSwitch: function (t, n) {
                return e.tapInstance((l) => {
                  if (
                    (null != n || (n = !e.getIn(["toggle", t])),
                    "boneCollision" === t && l.tools.ShowCBCTCollisionArea(n),
                    "deviation" === t)
                  )
                    (function (e) {
                      var t;
                      let n = (null == (t = e.main) ? void 0 : t.hash) || "",
                        l = e._instance,
                        o = (e, t, o, i) => {
                          null == l || l.tools.SetToothColor(n, e, t, o, i, 1);
                        },
                        i = (e) => {
                          null == l || l.tools.SetToothColor(n, e, 1, 1, 1, 0);
                        },
                        r = e._configuration.deviationColor;
                      return (t) => {
                        var n;
                        if (!r) return null;
                        null == (n = e._configuration.deviationData) ||
                          n.teethBias.forEach((e) => {
                            var n, l;
                            let s =
                              ((n = null == e ? void 0 : e.biasStatus),
                              (l = e.designProminent),
                              n.reduce(
                                (e, t, n) =>
                                  t < 0 || 3 === e
                                    ? 3
                                    : t > e
                                      ? 0 === t && 0 === l[n]
                                        ? -1
                                        : t
                                      : e,
                                -1,
                              ) || 0);
                            if (s >= 0 && t) {
                              let [t, n, l] = nW(r[s]);
                              o(e.toothId, t, n, l);
                            } else i(e.toothId);
                          });
                      };
                    })(e.value)(n);
                  else {
                    let e = oZ[t];
                    void 0 !== e && l.tools.ToggleTool(e, n);
                  }
                  e._updateToggle({ [t]: n });
                });
              },
              superpositionStep: function (t, n) {
                return e.tapInstance((e) => {
                  e.tools.SetSuperpositionStep(t, null != n ? n : 0);
                });
              },
              toggleCbctSegment: (t, n) =>
                e.tapInstance((l) => {
                  let { tools: o } = l;
                  (null != n || (n = !(e.getIn(["cbctOpacities", t]) > 0)),
                    e.updateCbctOpacity({
                      [t]: n ? o.GetCBCTDefaultAlpha(t) : 0,
                    }));
                }),
              getMPRPositionByFDI: (t) => {
                let n = e.value.main;
                if (!n) return;
                let l = n3.parse(n.__.GetMPRTransform()),
                  o = t < 30 ? l.upper : l.lower,
                  i = (function (e) {
                    let t = [],
                      n = e[0],
                      l = e[1],
                      o = e[2],
                      i = e[3],
                      r = e[4],
                      s = e[5],
                      a = e[6],
                      c = e[7],
                      d = e[8],
                      u = e[9],
                      h = e[10],
                      f = e[11],
                      m = e[12],
                      p = e[13],
                      g = e[14],
                      v = e[15],
                      A = n * s - l * r,
                      w = n * a - o * r,
                      x = n * c - i * r,
                      y = l * a - o * s,
                      E = l * c - i * s,
                      C = o * c - i * a,
                      b = d * p - u * m,
                      T = d * g - h * m,
                      $ = d * v - f * m,
                      I = u * g - h * p,
                      O = u * v - f * p,
                      M = h * v - f * g,
                      D = A * M - w * O + x * I + y * $ - E * T + C * b;
                    return D
                      ? ((D = 1 / D),
                        (t[0] = (s * M - a * O + c * I) * D),
                        (t[1] = (o * O - l * M - i * I) * D),
                        (t[2] = (p * C - g * E + v * y) * D),
                        (t[3] = (h * E - u * C - f * y) * D),
                        (t[4] = (a * $ - r * M - c * T) * D),
                        (t[5] = (n * M - o * $ + i * T) * D),
                        (t[6] = (g * x - m * C - v * w) * D),
                        (t[7] = (d * C - h * x + f * w) * D),
                        (t[8] = (r * O - s * $ + c * b) * D),
                        (t[9] = (l * $ - n * O - i * b) * D),
                        (t[10] = (m * E - p * x + v * A) * D),
                        (t[11] = (u * x - d * E - f * A) * D),
                        (t[12] = (s * T - r * I - a * b) * D),
                        (t[13] = (n * I - l * T + o * b) * D),
                        (t[14] = (p * w - m * y - g * A) * D),
                        (t[15] = (d * y - u * w + h * A) * D),
                        t)
                      : (console.error("Invalid mpr matrix."), oq);
                  })(16 === o.length ? o : oq),
                  r = n3.parse(n.__.GetTeethOriginPosition());
                if (!r) return;
                let s = r.find((e) => e.tid === t);
                if (!s) return;
                let a = [...s.position];
                return [
                  i[0] * a[0] + i[1] * a[1] + i[2] * a[2] + i[3],
                  i[4] * a[0] + i[5] * a[1] + i[6] * a[2] + i[7],
                  i[8] * a[0] + i[9] * a[1] + i[10] * a[2] + i[11],
                ];
              },
              stepper: (function (e) {
                let t = new Map(),
                  n = { main: 0, side: 0 },
                  l = { main: !1, side: !1 };
                function o(n) {
                  var l, o, i;
                  let r = e.value[n],
                    s =
                      null == (l = null == r ? void 0 : r.analysis)
                        ? void 0
                        : l.jawMovements,
                    a =
                      null == (o = null == r ? void 0 : r.analysis)
                        ? void 0
                        : o.stepMetrics,
                    c =
                      null == (i = null == r ? void 0 : r.analysis)
                        ? void 0
                        : i.gumJumps;
                  if (!(null == s ? void 0 : s.size) || !a) return [];
                  let {
                      toggle: d,
                      toggleEnabled: u,
                      _configuration: { visibleMinStep: h, visibleMaxStep: f },
                    } = e.value,
                    m = u.rsc && d.rsc,
                    p = u.pa && d.pa,
                    g = oc(0, a.max)(h),
                    v = oc(0, a.max)(f),
                    A = ""
                      .concat(n, "-")
                      .concat(m, "-")
                      .concat(p, "-")
                      .concat(g, "-")
                      .concat(v);
                  if (t.has(A)) return t.get(A);
                  let w = a.segments
                      .reduce(
                        (e, t) =>
                          "treat" === t.type ||
                          ("rsc" === t.type && m) ||
                          ("pa" === t.type && p)
                            ? e.concat(
                                Array.from(
                                  { length: t.length },
                                  (e, n) => t.start + n,
                                ),
                              )
                            : e,
                        [0],
                      )
                      .filter((e) => e >= g && e <= v)
                      .map((e) => {
                        var t;
                        return null != (t = s.get(e))
                          ? t
                          : {
                              step: e,
                              moving: !1,
                              rsc: !1,
                              pa: !1,
                              jumping: !1,
                              biteJump: -1,
                              upper: {
                                moving: !1,
                                rsc: !1,
                                pa: !1,
                                jumping: !1,
                              },
                              lower: {
                                moving: !1,
                                rsc: !1,
                                pa: !1,
                                jumping: !1,
                              },
                            };
                      }),
                    x = null == c ? void 0 : c.find((e) => 0 === e.step);
                  return (
                    x &&
                      ((w[0].biteJump = x.type),
                      (w[0].jumping = x.lower || x.upper),
                      (w[0].lower.jumping = x.lower),
                      (w[0].upper.jumping = x.upper)),
                    t.set(A, w),
                    w
                  );
                }
                function i(t, n) {
                  var l, i;
                  let r = e.value[t];
                  if (!r) return;
                  let s =
                    null !=
                    (i =
                      null ==
                      (l = o(t).findLast((e) => {
                        let { step: t } = e;
                        return n >= t;
                      }))
                        ? void 0
                        : l.step)
                      ? i
                      : r.step;
                  return (e.update({ [t]: { ...r, step: s } }), s);
                }
                function r(e) {
                  return i(e, 0);
                }
                function s(t) {
                  var i, s, c, d, u;
                  let h =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 500,
                    f =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    m = e.value[t],
                    p =
                      null == (i = null == m ? void 0 : m.analysis)
                        ? void 0
                        : i.stepMetrics;
                  if (
                    !m ||
                    m.playing ||
                    m.odsType === e5.TARGET_MDF ||
                    !(null == p ? void 0 : p.max) ||
                    ("main" === t &&
                      (null ==
                      (c =
                        null == (s = e.value._configuration)
                          ? void 0
                          : s.wasmInstanceInit)
                        ? void 0
                        : c.is_deviation_analysis))
                  )
                    return;
                  let g = o(t),
                    v = g.at(-1).step,
                    A = m.step;
                  (A === v && (A = r(t)),
                    e.update((e) => ({ [t]: { ...e[t], playing: !0 } })));
                  let w = e.value.toggleEnabled.rsc && e.value.toggle.rsc,
                    x =
                      null !=
                      (u =
                        null ==
                        (d = g.find((e) => {
                          let { step: t } = e;
                          return t > A;
                        }))
                          ? void 0
                          : d.step)
                        ? u
                        : 0;
                  ((l[t] = !w || x >= p.rscStart),
                    (n[t] = window.setInterval(() => {
                      var n, i, r;
                      let s = e.value[t],
                        c =
                          null == (n = null == s ? void 0 : s.analysis)
                            ? void 0
                            : n.stepMetrics;
                      s &&
                        c &&
                        ((x =
                          null !=
                          (r =
                            null ==
                            (i = o(t).find((e) => {
                              let { step: t } = e;
                              return t > s.step;
                            }))
                              ? void 0
                              : i.step)
                            ? r
                            : 0),
                        (f || l[t] || !(x >= c.rscStart)) && x
                          ? e.update({ [t]: { ...s, step: x } })
                          : a(t));
                    }, h)));
                }
                function a(t) {
                  (window.clearInterval(n[t]), (n[t] = 0));
                  let l = e.value[t];
                  l && e.update({ [t]: { ...l, playing: !1 } });
                }
                function c() {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 500,
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  (s("main", e, t), s("side", e, t));
                }
                function d() {
                  (a("main"), a("side"));
                }
                return {
                  clearCache: function (e) {
                    t.forEach((n, l) => {
                      l.startsWith(e) && t.delete(l);
                    });
                  },
                  getSteps: o,
                  get main() {
                    return o("main");
                  },
                  get side() {
                    return o("side");
                  },
                  gotoStep: i,
                  gotoStart: r,
                  gotoEnd: function (e) {
                    return i(e, 1 / 0);
                  },
                  gotoTreatEndOrEnd: function (t) {
                    var n;
                    let l = e.value[t];
                    if (!l) return;
                    let o =
                      null == (n = l.analysis)
                        ? void 0
                        : n.stepMetrics.treatEnd;
                    return i(t, l.step >= o ? 1 / 0 : o);
                  },
                  gotoPrev: function (t) {
                    var n, l;
                    let i = e.value[t];
                    if (!i) return;
                    let r =
                      null !=
                      (l =
                        null ==
                        (n = o(t).findLast((e) => {
                          let { step: t } = e;
                          return t < i.step;
                        }))
                          ? void 0
                          : n.step)
                        ? l
                        : i.step;
                    return (e.update({ [t]: { ...i, step: r } }), r);
                  },
                  gotoNext: function (t) {
                    var n, l;
                    let i = e.value[t];
                    if (!i) return;
                    let r =
                      null !=
                      (l =
                        null ==
                        (n = o(t).find((e) => {
                          let { step: t } = e;
                          return t > i.step;
                        }))
                          ? void 0
                          : n.step)
                        ? l
                        : i.step;
                    return (e.update({ [t]: { ...i, step: r } }), r);
                  },
                  playPlan: s,
                  pausePlan: a,
                  play: c,
                  pause: d,
                  playOrPause: function (t) {
                    let n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 500,
                      l =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      o = e.value[t];
                    o && (o.playing ? d() : c(n, l));
                  },
                  canPlay: function () {
                    var t;
                    let { main: n, viewMode: l, mdf: o } = e.value;
                    return (
                      null != (t = null == n ? void 0 : n.analysis) &&
                      !!t.stepMetrics.max &&
                      l !== eu.DUAL &&
                      (!o.working || !!o.comparing)
                    );
                  },
                };
              })(e),
              switchRenderingType: oQ(e),
              toggleModify: (t) =>
                e.tapInstance(async (n) => {
                  let { mdf: l } = e.value;
                  return l.enabled && t !== l.working
                    ? t
                      ? oY(e, e.value, n)
                      : (function (e, t, n) {
                          if (oF) return;
                          e.syncMdfOdsFile();
                          let l = n.editor.EndModify();
                          (console.log("Leave mdf -> ".concat(l)),
                            e.updateMdf({
                              working: !1,
                              comparing: !1,
                              toolType: ew.NONE,
                            }),
                            lu(e),
                            e.update({ viewMode: eu.SINGLE }),
                            lc(e),
                            oV(e),
                            (null == t ? void 0 : t.dayNightMode) &&
                              n.tools.SetDayNightMode(t.dayNightMode));
                        })(e, e.value, n)
                    : void 0;
                }),
              tapMdfCompare: (t, n) =>
                e.tapInstance((l) => {
                  let { tools: o } = l,
                    { mdf: i, stat: r } = e.value;
                  i.enabled &&
                    (o.SwitchCompare(t, n, i.__name),
                    r({
                      catalog: "医生修改",
                      event: t ? "进入悬浮对比" : "退出悬浮对比",
                      value:
                        n === eM.DayNight
                          ? "日夜方案"
                          : n === eM.ORIGIN
                            ? "初始位"
                            : "修改前",
                    }));
                }),
              toggleMdfCompare: oW(e),
              exitMdfCompare: () => {
                oW(e)(!1, oK);
              },
              resolveAssetURL: (t) => {
                var n;
                return (function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  console.log("^^^^^ ", t);
                  if (t[1] === "webgl2/simulator.js") {
                    // return "http://127.0.0.1:5500/sim/webgl2/simulator.js";
                    return "../sim/webgl2/simulator.js";
                  }
                  // if (t[1] === "webgl2/simulator.wasm") {
                  //   return "http://127.0.0.1:5500/sim/webgl2/simulator.wasm";
                  // }
                  // if (t[1] === "webgl2/simulator.data") {
                  //   return "http://127.0.0.1:5500/sim/webgl2/simulator.data";
                  // }
                  return t
                    .join("/")
                    .replace(/^\/{2,}/, "/")
                    .replace(
                      /(\w+:\/\/)?(.*)/,
                      (e, t, n) =>
                        (t || "") + n.replace(/([^:])\/{2,}/g, "$1/"),
                    );
                })(null != (n = e.value._configuration.assetsDir) ? n : X, t);
              },
              OPE: (function (e) {
                let t, n, l, o, i, r, s, a;
                let c = e.value.stat,
                  d = function () {
                    let d =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      { main: u, mdf: h } = e.value;
                    if (u && h.occlusalPlaneWorking)
                      return e.tapInstance((u) => {
                        let { tools: f } = u,
                          { adjusted: m } = n2(
                            h.__.GetOcclusionPlaneRotation(),
                          );
                        (f.OcclusionPlaneAdjust(!1, d),
                          e.update({ viewPose: ef.FULL_FRONT }),
                          e.toggleSwitch("fdi", t.fdi),
                          e.toggleSwitch("contact", t.contact),
                          e.toggleSwitch("tma", t.tma),
                          e.toggleSwitch("overlying", t.overlying),
                          e.update({
                            _movementType: n,
                            cbctOpacities: l,
                            upperOpacity: o,
                            lowerOpacity: i,
                          }));
                        let p = d ? m : a,
                          g = !oX(p, s);
                        (e.updateMdf((e) => ({
                          occlusalPlaneWorking: !1,
                          occlusalPlaneRotation: p,
                          occlusalPlaneChanged: d ? g : e.occlusalPlaneChanged,
                        })),
                          null == r || r({ apply: d }),
                          c({
                            catalog: "医生修改",
                            event: "退出咬合平面修改",
                            value: d ? "应用" : "取消",
                          }));
                      });
                  };
                return {
                  start: (d) => {
                    let { main: u, mdf: h } = e.value;
                    if (u && h.enabled && h.working && !h.occlusalPlaneWorking)
                      return (
                        (r = d),
                        (s = n2(u.__.GetOcclusionPlaneRotation()).original),
                        (a = h.occlusalPlaneRotation),
                        e.exitMdfCompare(),
                        e.tapInstance((r) => {
                          let { tools: s } = r;
                          ((t = e.value.toggle),
                            (l = e.value.cbctOpacities),
                            (o = e.value.upperOpacity),
                            (i = e.value.lowerOpacity),
                            (n = e.value._movementType),
                            e.update({ _movementType: e9.SIMPLE }),
                            e.toggleSwitch("fdi", !1),
                            e.toggleSwitch("contact", !1),
                            e.toggleSwitch("tma", !1),
                            e.toggleSwitch("overlying", !1),
                            s.OcclusionPlaneAdjust(!0, !1),
                            e.update({
                              upperOpacity: 1,
                              lowerOpacity: 1,
                              upperVisible: !0,
                              lowerVisible: !0,
                            }),
                            oC(e));
                          let { adjusted: a } = n2(
                            h.__.GetOcclusionPlaneRotation(),
                          );
                          (e.updateMdf({
                            occlusalPlaneWorking: !0,
                            occlusalPlaneRotation: a,
                          }),
                            c({
                              catalog: "医生修改",
                              event: "进入咬合平面修改",
                            }));
                        })
                      );
                  },
                  cancel: () => d(!1),
                  saveAndExit: () => d(!0),
                  resetRotation: () => {
                    let { mdf: t } = e.value;
                    t.occlusalPlaneWorking &&
                      (e.updateMdf({ occlusalPlaneRotation: s }),
                      c({ catalog: "医生修改", event: "重置咬合平面旋转" }));
                  },
                  setRotation: (t) => {
                    e.tapInstance((n) => {
                      let { tools: l } = n;
                      (l.SetOcclusionPlaneRotation(...t),
                        e.updateMdf({ occlusalPlaneRotation: t }),
                        c({
                          catalog: "医生修改",
                          event: "修改咬合平面旋转",
                          value: t.join(","),
                        }));
                    });
                  },
                  syncStatus: () => {
                    let { main: t, mdf: n } = e.value;
                    if (!t || n.occlusalPlaneWorking)
                      return n.occlusalPlaneChanged;
                    let { original: l } = n2(t.__.GetOcclusionPlaneRotation()),
                      { adjusted: o } = n2(n.__.GetOcclusionPlaneRotation()),
                      i = !oX(l, o);
                    return (e.updateMdf({ occlusalPlaneChanged: i }), i);
                  },
                };
              })(e),
              applyPAModifications: (t) =>
                e.tapInstance((e) => {
                  let { editor: n } = e,
                    l = n.SetPAAndGetMdScheme(JSON.stringify(t)),
                    o = new Uint8Array(l.length);
                  return (
                    o.set(l),
                    console.log("Got PA ods file: ".concat(o.length, " bytes")),
                    o
                  );
                }),
              getExpansionArchWidth: o_(e),
              getOBOJ: o0(e),
              getArchWidth: o2(e),
              toggleExpressMdf: o4(e),
              getExpressRiskWarnings: o7(e),
            })
          );
        },
        o5 = {},
        o8 = () => t9().$$.context.get(o5),
        o9 = (e) => (t9().$$.context.set(o5, e), e);
      function ie(e) {
        tI(
          e,
          "svelte-ob761p",
          ".sm-loading.svelte-ob761p{position:fixed;left:0;top:0;right:0;bottom:0;z-index:200;width:100%;height:100%;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}.sm-loading-text.svelte-ob761p{font-size:14px;line-height:20px}.spinner.svelte-ob761p{width:22px;height:22px;background-color:currentColor;background:conic-gradient(from 90deg, currentColor 0deg, transparent 90deg, currentColor 360deg);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--spinner-url);mask-image:var(--spinner-url);animation:svelte-ob761p-spin 2s linear infinite}@keyframes svelte-ob761p-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
        );
      }
      function it(e) {
        let t, n;
        return {
          c() {
            ((t = tR("div")), (n = tB(e[2])), this.h());
          },
          l(l) {
            var o = tV((t = tY(l, "DIV", { class: !0 })));
            ((n = tW(o, e[2])), o.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-loading-text svelte-ob761p");
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, t) {
            4 & t && tX(n, e[2]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function il(e) {
        let t, n, l;
        let o = e[2] && it(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tP()),
              o && o.c(),
              this.h());
          },
          l(e) {
            var i = tV((t = tY(e, "DIV", { class: !0 })));
            (tV((n = tY(i, "DIV", { class: !0 }))).forEach(tL),
              (l = tq(i)),
              o && o.l(i),
              i.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "spinner svelte-ob761p"),
              t1(n, "--spinner-url", "url(".concat(e[3], ")")),
              tG(t, "class", "sm-loading svelte-ob761p"),
              t1(t, "color", e[1]),
              t1(t, "background-color", e[0]));
          },
          m(e, i) {
            (tk(e, t, i), tD(t, n), tD(t, l), o && o.m(t, null));
          },
          p(e, n) {
            let [l] = n;
            (e[2]
              ? o
                ? o.p(e, l)
                : ((o = it(e)).c(), o.m(t, null))
              : o && (o.d(1), (o = null)),
              2 & l && t1(t, "color", e[1]),
              1 & l && t1(t, "background-color", e[0]));
          },
          i: tn,
          o: tn,
          d(e) {
            (e && tL(t), o && o.d());
          },
        };
      }
      function io(e, t, n) {
        let l = "data:image/svg+xml;base64,".concat(
            btoa(
              '<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.6875 11C3.6875 6.96141 6.96142 3.6875 11 3.6875C15.0386 3.6875 18.3125 6.96141 18.3125 11C18.3125 11.466 17.9347 11.8437 17.4687 11.8437C17.0027 11.8437 16.625 11.466 16.625 11C16.625 7.89339 14.1066 5.375 11 5.375C7.89339 5.375 5.375 7.89339 5.375 11C5.375 14.1066 7.8934 16.625 11 16.625C11.466 16.625 11.8437 17.0028 11.8437 17.4688C11.8437 17.9347 11.466 18.3125 11 18.3125C6.96141 18.3125 3.6875 15.0386 3.6875 11Z" fill="#000" /></svg>',
            ),
          ),
          { maskColor: o = "" } = t,
          { color: i = o ? nQ(o) : "#a0a3bd" } = t,
          { text: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("maskColor" in e && n(0, (o = e.maskColor)),
              "color" in e && n(1, (i = e.color)),
              "text" in e && n(2, (r = e.text)));
          }),
          [o, i, r, l]
        );
      }
      class ii extends nk {
        constructor(e) {
          (super(),
            nD(this, e, io, il, ta, { maskColor: 0, color: 1, text: 2 }, ie));
        }
      }
      function ir(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                stroke: !0,
                fill: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M10 2L2 10L10 18"),
              tG(t, "stroke", e[0]),
              tG(t, "fill", "none"),
              tG(t, "stroke-width", "3"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "stroke", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function is(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 12 20",
              $$slots: { default: [ir] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ia(e, t, n) {
        let { color: l = "#333" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class ic extends nk {
        constructor(e) {
          (super(),
            nD(this, e, ia, is, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function id(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                stroke: !0,
                fill: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M2 2L10 10L2 18"),
              tG(t, "stroke", e[0]),
              tG(t, "fill", "none"),
              tG(t, "stroke-width", "3"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "stroke", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function iu(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 12 20",
              $$slots: { default: [id] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ih(e, t, n) {
        let { color: l = "#333" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class im extends nk {
        constructor(e) {
          (super(),
            nD(this, e, ih, iu, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function ip(e) {
        let t;
        return {
          c() {
            ((t = tS("circle")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "circle", { cx: !0, cy: !0, r: !0, style: !0 })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "cx", "10"),
              tG(t, "cy", "10"),
              tG(t, "r", "5"),
              t1(t, "fill", "var(--circle-radio-color, " + e[1] + ")"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            2 & n && t1(t, "fill", "var(--circle-radio-color, " + e[1] + ")");
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ig(e) {
        let t, n, l;
        let o = e[0] && ip(e);
        return {
          c() {
            ((t = tS("circle")), (n = tP()), o && o.c(), (l = tU()), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "circle", {
                class: !0,
                style: !0,
                cx: !0,
                cy: !0,
                r: !0,
                fill: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              o && o.l(e),
              (l = tU()),
              this.h());
          },
          h() {
            (tG(t, "class", "sm-circle-ratio-outer"),
              t1(t, "stroke", "var(--circle-radio-color, " + e[1] + ")"),
              tG(t, "cx", "10"),
              tG(t, "cy", "10"),
              tG(t, "r", "9"),
              tG(t, "fill", "none"),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"));
          },
          m(e, i) {
            (tk(e, t, i), tk(e, n, i), o && o.m(e, i), tk(e, l, i));
          },
          p(e, n) {
            (2 & n &&
              t1(t, "stroke", "var(--circle-radio-color, " + e[1] + ")"),
              e[0]
                ? o
                  ? o.p(e, n)
                  : ((o = ip(e)).c(), o.m(l.parentNode, l))
                : o && (o.d(1), (o = null)));
          },
          d(e) {
            (e && tL(t), e && tL(n), o && o.d(e), e && tL(l));
          },
        };
      }
      function iv(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[2],
              height: e[3],
              style: e[4],
              viewBox: "0 0 20 20",
              $$slots: { default: [ig] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (4 & l && (o.width = e[2]),
                8 & l && (o.height = e[3]),
                16 & l && (o.style = e[4]),
                35 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iA(e, t, n) {
        let { checked: l = !1 } = t,
          { color: o = "#333" } = t,
          { width: i = 13 } = t,
          { height: r = 13 } = t,
          { style: s = "" } = t;
        return (
          (e.$$set = (e) => {
            ("checked" in e && n(0, (l = e.checked)),
              "color" in e && n(1, (o = e.color)),
              "width" in e && n(2, (i = e.width)),
              "height" in e && n(3, (r = e.height)),
              "style" in e && n(4, (s = e.style)));
          }),
          [l, o, i, r, s]
        );
      }
      class iw extends nk {
        constructor(e) {
          (super(),
            nD(this, e, iA, iv, ta, {
              checked: 0,
              color: 1,
              width: 2,
              height: 3,
              style: 4,
            }));
        }
      }
      function ix(e) {
        tI(
          e,
          "svelte-5x9gb",
          ".sm-radio-box.svelte-5x9gb{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-size:14px;color:var(--primary-foreground-color);cursor:pointer;user-select:none}.sm-radio-box.svelte-5x9gb:hover{--circle-radio-color:var(--link-color) !important}",
        );
      }
      function iy(e) {
        let t, n, l;
        t = new iw({
          props: {
            width: "1.43em",
            height: "1.43em",
            checked: e[5],
            style: "margin-right: 6px",
          },
        });
        let o = e[8].default,
          i = th(o, e, e[7], null);
        return {
          c() {
            (n$(t.$$.fragment), (n = tP()), i && i.c());
          },
          l(e) {
            (nI(t.$$.fragment, e), (n = tq(e)), i && i.l(e));
          },
          m(e, o) {
            (nO(t, e, o), tk(e, n, o), i && i.m(e, o), (l = !0));
          },
          p(e, n) {
            let r = {};
            (32 & n && (r.checked = e[5]),
              t.$set(r),
              i &&
                i.p &&
                (!l || 128 & n) &&
                tp(i, o, e, e[7], l ? tm(o, e[7], n, null) : tg(e[7]), null));
          },
          i(e) {
            l || (nx(t.$$.fragment, e), nx(i, e), (l = !0));
          },
          o(e) {
            (ny(t.$$.fragment, e), ny(i, e), (l = !1));
          },
          d(e) {
            (nM(t, e), e && tL(n), i && i.d(e));
          },
        };
      }
      function iE(e) {
        let t, n, l;
        let o = e[8].default,
          i = th(o, e, e[7], null);
        return (
          (n = new iw({
            props: {
              width: "1.43em",
              height: "1.43em",
              checked: e[5],
              style: "margin-left: 6px",
            },
          })),
          {
            c() {
              (i && i.c(), (t = tP()), n$(n.$$.fragment));
            },
            l(e) {
              (i && i.l(e), (t = tq(e)), nI(n.$$.fragment, e));
            },
            m(e, o) {
              (i && i.m(e, o), tk(e, t, o), nO(n, e, o), (l = !0));
            },
            p(e, t) {
              i &&
                i.p &&
                (!l || 128 & t) &&
                tp(i, o, e, e[7], l ? tm(o, e[7], t, null) : tg(e[7]), null);
              let r = {};
              (32 & t && (r.checked = e[5]), n.$set(r));
            },
            i(e) {
              l || (nx(i, e), nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(i, e), ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (i && i.d(e), e && tL(t), nM(n, e));
            },
          }
        );
      }
      function iC(e) {
        let t, n, l, o, i, r;
        let s = [iE, iy],
          a = [];
        return (
          (l = a[(n = e[1] ? 0 : 1)] = s[n](e)),
          {
            c() {
              ((t = tR("div")), l.c(), this.h());
            },
            l(e) {
              var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
              (l.l(n), n.forEach(tL), this.h());
            },
            h() {
              (tG(t, "class", "sm-radio-box svelte-5x9gb"),
                tG(t, "style", e[4]),
                t1(
                  t,
                  "--circle-radio-color",
                  e[5] ? "var(--link-color)" : "var(--line-color)",
                ));
            },
            m(l, s) {
              (tk(l, t, s),
                a[n].m(t, null),
                (o = !0),
                i ||
                  ((r = [
                    tj(t, "mousedown", tH(e[9])),
                    tj(t, "touchstart", tH(e[10])),
                    tj(t, "touchend", tH(e[11])),
                    tj(t, "click", e[12]),
                  ]),
                  (i = !0)));
            },
            p(e, i) {
              let [r] = i,
                c = n;
              ((n = e[1] ? 0 : 1) === c
                ? a[n].p(e, r)
                : (nA(),
                  ny(a[c], 1, 1, () => {
                    a[c] = null;
                  }),
                  nw(),
                  (l = a[n]) ? l.p(e, r) : (l = a[n] = s[n](e)).c(),
                  nx(l, 1),
                  l.m(t, null)),
                (!o || 16 & r) && tG(t, "style", e[4]),
                (16 & r || 48 & r) &&
                  t1(
                    t,
                    "--circle-radio-color",
                    e[5] ? "var(--link-color)" : "var(--line-color)",
                  ));
            },
            i(e) {
              o || (nx(l), (o = !0));
            },
            o(e) {
              (ny(l), (o = !1));
            },
            d(e) {
              (e && tL(t), a[n].d(), (i = !1), tr(r));
            },
          }
        );
      }
      function ib(e, t, n) {
        let l;
        let { $$slots: o = {}, $$scope: i } = t,
          r = nn(),
          { rtl: s = !1 } = t,
          { group: a } = t,
          { value: c } = t,
          { disabled: d = !1 } = t,
          { style: u = "" } = t;
        return (
          (e.$$set = (e) => {
            ("rtl" in e && n(1, (s = e.rtl)),
              "group" in e && n(0, (a = e.group)),
              "value" in e && n(2, (c = e.value)),
              "disabled" in e && n(3, (d = e.disabled)),
              "style" in e && n(4, (u = e.style)),
              "$$scope" in e && n(7, (i = e.$$scope)));
          }),
          (e.$$.update = () => {
            5 & e.$$.dirty && n(5, (l = a === c));
          }),
          [
            a,
            s,
            c,
            d,
            u,
            l,
            r,
            i,
            o,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            (e) => {
              d || (n(0, (a = c)), r("click", e));
            },
          ]
        );
      }
      class iT extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              ib,
              iC,
              ta,
              { rtl: 1, group: 0, value: 2, disabled: 3, style: 4 },
              ix,
            ));
        }
      }
      function i$(e) {
        tI(
          e,
          "svelte-7elx9p",
          ".sm-occl-mode-selector.svelte-7elx9p{display:inline-flex;flex-flow:row;align-items:center}.sm-occl-mode.svelte-7elx9p{left:calc(16.6667% - 2px);display:flex;flex-flow:row;justify-content:center;align-items:center;white-space:nowrap;width:0}.sm-occl-mode.svelte-7elx9p{position:absolute;bottom:50px;z-index:1}",
        );
      }
      function iI(e) {
        let t,
          n = e[1].t("bone_section.vertical") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            2 & l &&
              n !== (n = e[1].t("bone_section.vertical") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function iO(e) {
        let t,
          n = e[1].t("bone_section.horizontal") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            2 & l &&
              n !== (n = e[1].t("bone_section.horizontal") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function iM(e) {
        let t, n, l, o, i, r, s, a;
        function c(t) {
          e[4](t);
        }
        let d = { value: !0, $$slots: { default: [iI] }, $$scope: { ctx: e } };
        function u(t) {
          e[5](t);
        }
        (void 0 !== e[0] && (d.group = e[0]),
          (l = new iT({ props: d })),
          ni.push(() => nT(l, "group", c)));
        let h = {
          style: "margin-left: 30px",
          value: !1,
          $$slots: { default: [iO] },
          $$scope: { ctx: e },
        };
        return (
          void 0 !== e[0] && (h.group = e[0]),
          (r = new iT({ props: h })),
          ni.push(() => nT(r, "group", u)),
          {
            c() {
              ((t = tR("div")),
                (n = tR("div")),
                n$(l.$$.fragment),
                (i = tP()),
                n$(r.$$.fragment),
                this.h());
            },
            l(e) {
              var o = tV((t = tY(e, "DIV", { class: !0 }))),
                s = tV((n = tY(o, "DIV", { class: !0 })));
              (nI(l.$$.fragment, s),
                (i = tq(s)),
                nI(r.$$.fragment, s),
                s.forEach(tL),
                o.forEach(tL),
                this.h());
            },
            h() {
              (tG(n, "class", "sm-occl-mode-selector svelte-7elx9p"),
                tG(t, "class", "sm-occl-mode svelte-7elx9p"));
            },
            m(e, o) {
              (tk(e, t, o),
                tD(t, n),
                nO(l, n, null),
                tD(n, i),
                nO(r, n, null),
                (a = !0));
            },
            p(e, t) {
              let [n] = t,
                i = {};
              (130 & n && (i.$$scope = { dirty: n, ctx: e }),
                !o && 1 & n && ((o = !0), (i.group = e[0]), nu(() => (o = !1))),
                l.$set(i));
              let a = {};
              (130 & n && (a.$$scope = { dirty: n, ctx: e }),
                !s && 1 & n && ((s = !0), (a.group = e[0]), nu(() => (s = !1))),
                r.$set(a));
            },
            i(e) {
              a || (nx(l.$$.fragment, e), nx(r.$$.fragment, e), (a = !0));
            },
            o(e) {
              (ny(l.$$.fragment, e), ny(r.$$.fragment, e), (a = !1));
            },
            d(e) {
              (e && tL(t), nM(l), nM(r));
            },
          }
        );
      }
      function iD(e, t, n) {
        let l, o;
        let i = o8();
        tu(e, i, (e) => n(3, (o = e)));
        let r = !0,
          s = (e) => {
            var t;
            null === (t = o._instance) ||
              void 0 === t ||
              t.tools.SetOcclusionVerticalMode(e);
          };
        return (
          (e.$$.update = () => {
            (8 & e.$$.dirty && n(1, (l = l0(o.language))),
              1 & e.$$.dirty && s(r));
          }),
          [
            r,
            l,
            i,
            o,
            function (e) {
              n(0, (r = e));
            },
            function (e) {
              n(0, (r = e));
            },
          ]
        );
      }
      class ik extends nk {
        constructor(e) {
          (super(), nD(this, e, iD, iM, ta, {}, i$));
        }
      }
      function iL(e) {
        tI(
          e,
          "svelte-rfotql",
          ".sm-occl-btn.svelte-rfotql{width:76px;height:36px;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;background-color:var(--link-color);border-radius:8px}.sm-occl-btn.svelte-rfotql:hover{cursor:pointer;background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));background-blend-mode:darken}.sm-occl-left.svelte-rfotql,.sm-occl-right.svelte-rfotql{position:absolute;bottom:50px;z-index:1}.sm-occl-left.svelte-rfotql{left:calc(55.5556% - 42px)}.sm-occl-right.svelte-rfotql{right:calc(22.2222% - 50px)}",
        );
      }
      function iN(e) {
        let t, n;
        return (
          (t = new ik({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iR(e) {
        let t, n, l, o, i, r, s, a, c, d;
        let u = e[0].toggle.boneSection && iN();
        return (
          (o = new ic({ props: { color: "#fff" } })),
          (s = new im({ props: { color: "#fff" } })),
          {
            c() {
              ((t = tR("div")),
                u && u.c(),
                (n = tP()),
                (l = tR("div")),
                n$(o.$$.fragment),
                (i = tP()),
                (r = tR("div")),
                n$(s.$$.fragment),
                this.h());
            },
            l(e) {
              var a = tV((t = tY(e, "DIV", {})));
              (u && u.l(a), (n = tq(a)));
              var c = tV((l = tY(a, "DIV", { class: !0 })));
              (nI(o.$$.fragment, c), c.forEach(tL), (i = tq(a)));
              var d = tV((r = tY(a, "DIV", { class: !0 })));
              (nI(s.$$.fragment, d), d.forEach(tL), a.forEach(tL), this.h());
            },
            h() {
              (tG(l, "class", "sm-occl-btn sm-occl-left svelte-rfotql"),
                tG(r, "class", "sm-occl-btn sm-occl-right svelte-rfotql"));
            },
            m(h, f) {
              (tk(h, t, f),
                u && u.m(t, null),
                tD(t, n),
                tD(t, l),
                nO(o, l, null),
                tD(t, i),
                tD(t, r),
                nO(s, r, null),
                (a = !0),
                c ||
                  ((d = [
                    tj(l, "touchstart", tz(e[2](!1, !0))),
                    tj(l, "touchend", e[3], { passive: !0 }),
                    tj(l, "mousedown", e[2](!1, !1)),
                    tj(l, "mouseleave", e[3]),
                    tj(l, "mouseup", e[3]),
                    tj(r, "touchstart", tz(e[2](!0, !0))),
                    tj(r, "touchend", e[3], { passive: !0 }),
                    tj(r, "mousedown", e[2](!0, !1)),
                    tj(r, "mouseleave", e[3]),
                    tj(r, "mouseup", e[3]),
                  ]),
                  (c = !0)));
            },
            p(e, l) {
              let [o] = l;
              e[0].toggle.boneSection
                ? u
                  ? 1 & o && nx(u, 1)
                  : ((u = iN()).c(), nx(u, 1), u.m(t, n))
                : u &&
                  (nA(),
                  ny(u, 1, 1, () => {
                    u = null;
                  }),
                  nw());
            },
            i(e) {
              a ||
                (nx(u), nx(o.$$.fragment, e), nx(s.$$.fragment, e), (a = !0));
            },
            o(e) {
              (ny(u), ny(o.$$.fragment, e), ny(s.$$.fragment, e), (a = !1));
            },
            d(e) {
              (e && tL(t), u && u.d(), nM(o), nM(s), (c = !1), tr(d));
            },
          }
        );
      }
      function iS(e, t, n) {
        let l;
        let o = o8();
        tu(e, o, (e) => n(0, (l = e)));
        let i = 0;
        return [
          l,
          o,
          (e, t) => (n) => {
            (n.stopPropagation(),
              clearInterval(i),
              (t || 0 === n.button) &&
                (function t() {
                  var n;
                  (null === (n = l._instance) ||
                    void 0 === n ||
                    n.tools.ClippingMeasureRun(e),
                    (i = window.setTimeout(() => t(), 16)));
                })());
          },
          () => {
            (clearInterval(i), (i = 0));
          },
        ];
      }
      class iB extends nk {
        constructor(e) {
          (super(), nD(this, e, iS, iR, ta, {}, iL));
        }
      }
      function iP(e, t) {
        if (!e || !t) return;
        t(e.getBoundingClientRect());
        let n = new ResizeObserver(() => {
          t(e.getBoundingClientRect());
        });
        return (
          n.observe(e),
          {
            destroy: () => {
              n.disconnect();
            },
          }
        );
      }
      function iU(e) {
        tI(
          e,
          "svelte-xnns4g",
          ".sm-graphic.svelte-xnns4g{width:100%;height:100%;position:relative;user-select:none;transform-style:preserve-3d;background-color:var(--background-color)}",
        );
      }
      function ij(e) {
        let t, n;
        return (
          (t = new ii({ props: { text: e[4] } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (16 & n && (l.text = e[4]), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iz(e) {
        let t, n, l;
        let o = e[11].default,
          i = th(o, e, e[10], null),
          r = e[2].viewMode === eu.SECTION && iH();
        return {
          c() {
            (i && i.c(), (t = tP()), r && r.c(), (n = tU()));
          },
          l(e) {
            (i && i.l(e), (t = tq(e)), r && r.l(e), (n = tU()));
          },
          m(e, o) {
            (i && i.m(e, o),
              tk(e, t, o),
              r && r.m(e, o),
              tk(e, n, o),
              (l = !0));
          },
          p(e, t) {
            (i &&
              i.p &&
              (!l || 1024 & t) &&
              tp(i, o, e, e[10], l ? tm(o, e[10], t, null) : tg(e[10]), null),
              e[2].viewMode === eu.SECTION
                ? r
                  ? 4 & t && nx(r, 1)
                  : ((r = iH()).c(), nx(r, 1), r.m(n.parentNode, n))
                : r &&
                  (nA(),
                  ny(r, 1, 1, () => {
                    r = null;
                  }),
                  nw()));
          },
          i(e) {
            l || (nx(i, e), nx(r), (l = !0));
          },
          o(e) {
            (ny(i, e), ny(r), (l = !1));
          },
          d(e) {
            (i && i.d(e), e && tL(t), r && r.d(e), e && tL(n));
          },
        };
      }
      function iH(e) {
        let t, n;
        return (
          (t = new iB({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iG(e) {
        let t, n;
        return (
          (t = new ii({ props: { maskColor: "rgba(0,0,0,.4)", text: e[4] } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (16 & n && (l.text = e[4]), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iV(e) {
        let t, n, l, o, i, r, s, a;
        let c = [iz, ij],
          d = [];
        l = d[(n = e[5] ? 0 : 1)] = c[n](e);
        let u = e[2].mdf.entering && iG(e);
        return {
          c() {
            ((t = tR("div")), l.c(), (o = tP()), u && u.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0 })));
            (l.l(n), (o = tq(n)), u && u.l(n), n.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-graphic svelte-xnns4g");
          },
          m(l, c) {
            (tk(l, t, c),
              d[n].m(t, null),
              tD(t, o),
              u && u.m(t, null),
              e[12](t),
              (r = !0),
              s || ((a = tA((i = iP.call(null, t, e[13])))), (s = !0)));
          },
          p(e, r) {
            let [s] = r,
              a = n;
            ((n = e[5] ? 0 : 1) === a
              ? d[n].p(e, s)
              : (nA(),
                ny(d[a], 1, 1, () => {
                  d[a] = null;
                }),
                nw(),
                (l = d[n]) ? l.p(e, s) : (l = d[n] = c[n](e)).c(),
                nx(l, 1),
                l.m(t, o)),
              e[2].mdf.entering
                ? u
                  ? (u.p(e, s), 4 & s && nx(u, 1))
                  : ((u = iG(e)).c(), nx(u, 1), u.m(t, null))
                : u &&
                  (nA(),
                  ny(u, 1, 1, () => {
                    u = null;
                  }),
                  nw()),
              i && ts(i.update) && 3 & s && i.update.call(null, e[13]));
          },
          i(e) {
            r || (nx(l), nx(u), (r = !0));
          },
          o(e) {
            (ny(l), ny(u), (r = !1));
          },
          d(l) {
            (l && tL(t), d[n].d(), u && u.d(), e[12](null), (s = !1), a());
          },
        };
      }
      function iZ(e, t, n) {
        let l, o, i, r, s, a, c, d;
        let { $$slots: u = {}, $$scope: h } = t,
          f = o8();
        tu(e, f, (e) => n(2, (a = e)));
        let m = nn(),
          p = 0,
          g = 0,
          v = (e) => {
            var t, n;
            try {
              let l = a[e];
              if (!l) return;
              let o =
                null !==
                  (n =
                    null === (t = a._instance) || void 0 === t
                      ? void 0
                      : t.$$.HEAP8.byteLength) && void 0 !== n
                  ? n
                  : 0;
              a.stat({
                catalog: "性能",
                event: { main: "主方案摘要", side: "对比方案摘要" }[e],
                value: JSON.stringify({
                  name: l.name,
                  hash: l.hash,
                  ft: l.ft,
                  ddmSize: l.file.ddmBuffer.byteLength,
                  odsSize: l.file.odsBuffer.byteLength,
                  wasmMemory: o,
                  stepMetrics: l.analysis.stepMetrics,
                  features: l.analysis.bf,
                  cbctType: l.analysis.cbctType,
                }),
              });
            } catch (e) {}
          },
          A = (e, t, n) => {
            let l = oL([e, t], n);
            if (l[0] !== a.size[0] || l[1] !== a.size[1]) {
              let t = l[0] / e;
              f.update({ size: l, pixelRatio: t });
              let n = Math.round(1e3 * t) / 1e3;
              a.stat({
                catalog: "性能",
                event: "Canvas",
                value: JSON.stringify({
                  size: l,
                  pixelRatio: n,
                  devicePixelRatio: et,
                  summary: ""
                    .concat(l.join("x"), " ")
                    .concat(n, "/")
                    .concat(et),
                }),
              });
            }
          },
          w = (e) => {
            e !== eY.NONE &&
              (m("error", { code: e, message: a._errorMessage || "" }),
              setTimeout(() => {
                f.update({ _errorCode: eY.NONE, _errorMessage: "" });
              }));
          };
        return (
          ne(async () => {
            try {
              let e = await oB(c, f);
              ((d = nP(e, oH(f))), m("inited", f));
            } catch (e) {
              (console.error(e),
                m("error", {
                  code: e.code || eY.UNKNOWN,
                  message: e.message || "",
                }));
            }
          }),
          nt(() => {
            (null == d || d(), m("destroyed", null));
          }),
          (e.$$set = (e) => {
            "$$scope" in e && n(10, (h = e.$$scope));
          }),
          (e.$$.update = () => {
            (4 & e.$$.dirty && n(9, (l = l0(a.language))),
              4 & e.$$.dirty && n(8, (o = a.main && a.main.loaded)),
              4 & e.$$.dirty && n(7, (i = a.side && a.side.loaded)),
              4 & e.$$.dirty && n(5, (r = a._loaded)),
              512 & e.$$.dirty && n(4, (s = l.t("loading"))),
              256 & e.$$.dirty && o && (m("loaded", "main"), v("main")),
              128 & e.$$.dirty && i && (m("loaded", "side"), v("side")),
              7 & e.$$.dirty && a._autoResizable && A(p, g, a.renderingType),
              4 & e.$$.dirty && w(a._errorCode));
          }),
          [
            p,
            g,
            a,
            c,
            s,
            r,
            f,
            i,
            o,
            l,
            h,
            u,
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(3, (c = e));
              });
            },
            (e) => n(0, ({ width: p, height: g } = e), p, n(1, g)),
          ]
        );
      }
      class iF extends nk {
        constructor(e) {
          (super(), nD(this, e, iZ, iV, ta, {}, iU));
        }
      }
      function iJ(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("path")), (n = tP()), (l = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M5.8114 10.6666L1.33335 5.99996L5.8114 1.33329"),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"),
              tG(
                l,
                "d",
                "M1.33331 6L5.99998 6C10.7864 6 14.6666 9.8802 14.6666 14.6667V14.6667",
              ),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "2"),
              tG(l, "stroke-linecap", "round"),
              tG(l, "stroke-linejoin", "round"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (1 & n && tG(t, "stroke", e[0]), 1 & n && tG(l, "stroke", e[0]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function iY(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 16 16",
              $$slots: { default: [iJ] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iK(e, t, n) {
        let { color: l = "#14142B" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class iW extends nk {
        constructor(e) {
          (super(),
            nD(this, e, iK, iY, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function iq(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("path")), (n = tP()), (l = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M10.1886 10.6666L14.6667 5.99996L10.1886 1.33329"),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"),
              tG(
                l,
                "d",
                "M14.6667 6L9.99999 6C5.21352 6 1.33332 9.8802 1.33332 14.6667V14.6667",
              ),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "2"),
              tG(l, "stroke-linecap", "round"),
              tG(l, "stroke-linejoin", "round"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (1 & n && tG(t, "stroke", e[0]), 1 & n && tG(l, "stroke", e[0]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function iQ(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 16 16",
              $$slots: { default: [iq] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function iX(e, t, n) {
        let { color: l = "#14142B" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class i_ extends nk {
        constructor(e) {
          (super(),
            nD(this, e, iX, iQ, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function i1(e) {
        let t, n, l, o, i, r, s;
        return {
          c() {
            ((t = tS("path")),
              (n = tP()),
              (l = tS("path")),
              (o = tP()),
              (i = tS("path")),
              (r = tP()),
              (s = tS("path")),
              this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              (o = tq(e)),
              tV(
                (i = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              (r = tq(e)),
              tV(
                (s = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M3.47831 6.43809C3.80816 5.28777 4.49371 4.2714 5.43671 3.53465C6.37971 2.79789 7.53174 2.37859 8.72769 2.33683C9.92365 2.29506 11.1021 2.63299 12.0942 3.30216C13.0863 3.97134 13.8411 4.93741 14.2504 6.06193",
            ),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"),
              tG(
                l,
                "d",
                "M14.1464 10.2029C13.7201 11.2132 13.0099 12.0781 12.1018 12.6927C11.1937 13.3074 10.1268 13.6453 9.03046 13.6657C7.9341 13.686 6.85541 13.3878 5.92517 12.8072C4.99494 12.2266 4.25314 11.3886 3.78972 10.3948",
              ),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "2"),
              tG(l, "stroke-linecap", "round"),
              tG(l, "stroke-linejoin", "round"),
              tG(i, "d", "M4.80933 9.95654L3.09803 10.2103L2.27426 11.7316"),
              tG(i, "stroke", e[0]),
              tG(i, "stroke-width", "2"),
              tG(i, "stroke-linecap", "round"),
              tG(i, "stroke-linejoin", "round"),
              tG(s, "d", "M13.089 6.48657L14.8003 6.2328L15.624 4.7115"),
              tG(s, "stroke", e[0]),
              tG(s, "stroke-width", "2"),
              tG(s, "stroke-linecap", "round"),
              tG(s, "stroke-linejoin", "round"));
          },
          m(e, a) {
            (tk(e, t, a),
              tk(e, n, a),
              tk(e, l, a),
              tk(e, o, a),
              tk(e, i, a),
              tk(e, r, a),
              tk(e, s, a));
          },
          p(e, n) {
            (1 & n && tG(t, "stroke", e[0]),
              1 & n && tG(l, "stroke", e[0]),
              1 & n && tG(i, "stroke", e[0]),
              1 & n && tG(s, "stroke", e[0]));
          },
          d(e) {
            (e && tL(t),
              e && tL(n),
              e && tL(l),
              e && tL(o),
              e && tL(i),
              e && tL(r),
              e && tL(s));
          },
        };
      }
      function i0(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 16 16",
              $$slots: { default: [i1] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function i2(e, t, n) {
        let { color: l = "#A0A3BD" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class i3 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, i2, i0, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function i4(e) {
        let t = e - 1;
        return t * t * t + 1;
      }
      function i7(e) {
        let {
            delay: t = 0,
            duration: n = 400,
            easing: l = tl,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          o = +getComputedStyle(e).opacity;
        return {
          delay: t,
          duration: n,
          easing: l,
          css: (e) => "opacity: ".concat(e * o),
        };
      }
      function i6(e) {
        let {
            delay: t = 0,
            duration: n = 400,
            easing: l = i4,
            x: o = 0,
            y: i = 0,
            opacity: r = 0,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          s = getComputedStyle(e),
          a = +s.opacity,
          c = "none" === s.transform ? "" : s.transform,
          d = a * (1 - r),
          [u, h] = tw(o),
          [f, m] = tw(i);
        return {
          delay: t,
          duration: n,
          easing: l,
          css: (e, t) =>
            "\n			transform: "
              .concat(c, " translate(")
              .concat((1 - e) * u)
              .concat(h, ", ")
              .concat((1 - e) * f)
              .concat(m, ");\n			opacity: ")
              .concat(a - d * t),
        };
      }
      function i5(e) {
        let t, n, l;
        let o = e[3].default,
          i = th(o, e, e[2], null);
        return {
          c() {
            ((t = tR("div")), (n = tR("div")), i && i.c(), this.h());
          },
          l(e) {
            var l = tV((t = tY(e, "DIV", { class: !0, style: !0 }))),
              o = tV((n = tY(l, "DIV", {})));
            (i && i.l(o), o.forEach(tL), l.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "portal-wrapper"), t1(t, "display", "contents"));
          },
          m(o, r) {
            (tk(o, t, r), tD(t, n), i && i.m(n, null), e[4](n), (l = !0));
          },
          p(e, t) {
            let [n] = t;
            i &&
              i.p &&
              (!l || 4 & n) &&
              tp(i, o, e, e[2], l ? tm(o, e[2], n, null) : tg(e[2]), null);
          },
          i(e) {
            l || (nx(i, e), (l = !0));
          },
          o(e) {
            (ny(i, e), (l = !1));
          },
          d(n) {
            (n && tL(t), i && i.d(n), e[4](null));
          },
        };
      }
      function i8(e, t, n) {
        let l,
          { $$slots: o = {}, $$scope: i } = t,
          { container: r = document.body } = t;
        return (
          ne(() => {
            null == r || r.appendChild(l);
          }),
          nt(() => {
            null == r || r.removeChild(l);
          }),
          (e.$$set = (e) => {
            ("container" in e && n(1, (r = e.container)),
              "$$scope" in e && n(2, (i = e.$$scope)));
          }),
          [
            l,
            r,
            i,
            o,
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(0, (l = e));
              });
            },
          ]
        );
      }
      class i9 extends nk {
        constructor(e) {
          (super(), nD(this, e, i8, i5, ta, { container: 1 }));
        }
      }
      function re(e, t, n, l, o) {
        let i =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          r =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          s =
            arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 20,
          a = e.clientWidth,
          c = e.clientHeight,
          d = t + i;
        (d < s && (d = s), d + l + s > a && (d = a - l - s));
        let u = n + r;
        return (
          u < s && (u = n + s),
          u + o + s > c && (u = c - o - s),
          "transform: translate(".concat(d, "px, ").concat(u, "px)")
        );
      }
      function rt(e) {
        tI(
          e,
          "svelte-1coc0tk",
          ".sm-tooltip.svelte-1coc0tk{position:absolute;left:0;top:0;z-index:10;transform-style:preserve-3d;background-color:rgba(20, 20, 43, 0.8);box-shadow:1px 1px 4px #c4c6d4;color:#fff;border-radius:4px;padding:6px 10px;font-size:14px;line-height:22px;letter-spacing:0.25px;max-width:50%}.sm-tooltip-wrapper.svelte-1coc0tk{display:contents}",
        );
      }
      function rn(e) {
        let t, n;
        return (
          (t = new i9({
            props: {
              container: e[7],
              $$slots: { default: [rl] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (65639 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rl(e) {
        let t, n, l, o, i, r, s;
        return {
          c() {
            ((t = tR("div")), (n = tB(e[0])), this.h());
          },
          l(l) {
            var o = tV((t = tY(l, "DIV", { class: !0, style: !0 })));
            ((n = tW(o, e[0])), o.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-tooltip svelte-1coc0tk"), tG(t, "style", e[6]));
          },
          m(o, a) {
            (tk(o, t, a),
              tD(t, n),
              e[13](t),
              (i = !0),
              r || ((s = tA((l = iP.call(null, t, e[14])))), (r = !0)));
          },
          p(e, o) {
            ((!i || 1 & o) && tX(n, e[0]),
              (!i || 64 & o) && tG(t, "style", e[6]),
              l && ts(l.update) && 6 & o && l.update.call(null, e[14]));
          },
          i(e) {
            i ||
              (nd(() => {
                i &&
                  (o || (o = nb(t, i7, { delay: 100, duration: 300 }, !0)),
                  o.run(1));
              }),
              (i = !0));
          },
          o(e) {
            (o || (o = nb(t, i7, { delay: 100, duration: 300 }, !1)),
              o.run(0),
              (i = !1));
          },
          d(n) {
            (n && tL(t), e[13](null), n && o && o.end(), (r = !1), s());
          },
        };
      }
      function ro(e) {
        let t, n, l, o, i;
        let r = e[3] && rn(e),
          s = e[12].default,
          a = th(s, e, e[16], null);
        return {
          c() {
            (r && r.c(), (t = tP()), (n = tR("div")), a && a.c(), this.h());
          },
          l(e) {
            (r && r.l(e), (t = tq(e)));
            var l = tV((n = tY(e, "DIV", { class: !0 })));
            (a && a.l(l), l.forEach(tL), this.h());
          },
          h() {
            tG(n, "class", "sm-tooltip-wrapper svelte-1coc0tk");
          },
          m(s, c) {
            (r && r.m(s, c),
              tk(s, t, c),
              tk(s, n, c),
              a && a.m(n, null),
              e[15](n),
              (l = !0),
              o ||
                ((i = [tj(n, "mouseenter", e[8]), tj(n, "mouseleave", e[9])]),
                (o = !0)));
          },
          p(e, n) {
            let [o] = n;
            (e[3]
              ? r
                ? (r.p(e, o), 8 & o && nx(r, 1))
                : ((r = rn(e)).c(), nx(r, 1), r.m(t.parentNode, t))
              : r &&
                (nA(),
                ny(r, 1, 1, () => {
                  r = null;
                }),
                nw()),
              a &&
                a.p &&
                (!l || 65536 & o) &&
                tp(
                  a,
                  s,
                  e,
                  e[16],
                  l ? tm(s, e[16], o, null) : tg(e[16]),
                  null,
                ));
          },
          i(e) {
            l || (nx(r), nx(a, e), (l = !0));
          },
          o(e) {
            (ny(r), ny(a, e), (l = !1));
          },
          d(l) {
            (r && r.d(l),
              l && tL(t),
              l && tL(n),
              a && a.d(l),
              e[15](null),
              (o = !1),
              tr(i));
          },
        };
      }
      function ri(e, t, n) {
        let l, o, i, r, s, a, c;
        let { $$slots: d = {}, $$scope: u } = t,
          { label: h = "" } = t,
          f = !1,
          m = document.body;
        return (
          (e.$$set = (e) => {
            ("label" in e && n(0, (h = e.label)),
              "$$scope" in e && n(16, (u = e.$$scope)));
          }),
          (e.$$.update = () => {
            3078 & e.$$.dirty && n(6, (l = re(m, a, c, r, s, -r / 2, 10)));
          }),
          [
            h,
            r,
            s,
            f,
            o,
            i,
            l,
            m,
            function () {
              let e = null == o ? void 0 : o.children[0];
              if (!e) return;
              n(3, (f = !0));
              let {
                left: t,
                top: l,
                width: i,
                height: r,
              } = e.getBoundingClientRect();
              (n(10, (a = t + i / 2)), n(11, (c = l + r)));
            },
            function () {
              n(3, (f = !1));
            },
            a,
            c,
            d,
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(5, (i = e));
              });
            },
            (e) => n(1, ({ width: r, height: s } = e), r, n(2, s)),
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(4, (o = e));
              });
            },
            u,
          ]
        );
      }
      class rr extends nk {
        constructor(e) {
          (super(), nD(this, e, ri, ro, ta, { label: 0 }, rt));
        }
      }
      function rs(e) {
        tI(
          e,
          "svelte-1fhw4iv",
          ".sm-box.svelte-1fhw4iv.svelte-1fhw4iv{position:absolute;right:0px;display:flex;flex-direction:column;margin-top:-20px;width:158px;align-items:center;height:32px;background:#eff0f7;box-shadow:-2px -2px 5px rgba(255, 255, 255, 0.3), 2px 2px 5px rgba(110, 113, 145, 0.1);border-radius:8px}.sm-btn-group.svelte-1fhw4iv.svelte-1fhw4iv{width:100%;display:flex;height:100%;align-items:center}.sm-reset-menu.svelte-1fhw4iv.svelte-1fhw4iv{position:absolute;top:33px;right:10px;box-shadow:0 2px 8px 0 rgba(166, 166, 166, 0.56);border-radius:4px;white-space:nowrap;background-color:#fff;overflow:hidden;z-index:1000}.sm-reset-menu-item.svelte-1fhw4iv.svelte-1fhw4iv{height:32px;line-height:32px;font-size:12px;color:#333;padding:0 20px;display:flex;align-items:center}.sm-reset-menu-item.svelte-1fhw4iv.svelte-1fhw4iv:hover{cursor:pointer;background-color:#eee}.sm-reset-menu-item.svelte-1fhw4iv+.sm-reset-menu-item.svelte-1fhw4iv{border-top:1px solid #e8e8e8}",
        );
      }
      function ra(e) {
        let t, n, l;
        return (
          (n = new iW({
            props: { color: e[2].canUndo ? "#14142B" : "#A0A3BD" },
          })),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { style: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              (t1(t, "display", "flex"),
                t1(t, "flex-direction", "column"),
                t1(t, "align-items", "center"));
            },
            m(e, o) {
              (tk(e, t, o), nO(n, t, null), (l = !0));
            },
            p(e, t) {
              let l = {};
              (4 & t && (l.color = e[2].canUndo ? "#14142B" : "#A0A3BD"),
                n.$set(l));
            },
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n));
            },
          }
        );
      }
      function rc(e) {
        let t, n;
        return (
          (t = new lv({
            props: {
              disabled: !e[2].canUndo,
              width: "auto",
              height: "28px",
              style: "flex:1",
              $$slots: { default: [ra] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[27]),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (4 & n && (l.disabled = !e[2].canUndo),
                1073741828 & n && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rd(e) {
        let t, n, l;
        return (
          (n = new i_({
            props: { color: e[2].canRedo ? "#14142B" : "#A0A3BD" },
          })),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { style: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              (t1(t, "display", "flex"),
                t1(t, "flex-direction", "column"),
                t1(t, "align-items", "center"));
            },
            m(e, o) {
              (tk(e, t, o), nO(n, t, null), (l = !0));
            },
            p(e, t) {
              let l = {};
              (4 & t && (l.color = e[2].canRedo ? "#14142B" : "#A0A3BD"),
                n.$set(l));
            },
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n));
            },
          }
        );
      }
      function ru(e) {
        let t, n;
        return (
          (t = new lv({
            props: {
              disabled: !e[2].canRedo,
              width: "auto",
              height: "28px",
              style: "flex:1",
              $$slots: { default: [rd] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[28]),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (4 & n && (l.disabled = !e[2].canRedo),
                1073741828 & n && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rh(e) {
        let t, n, l;
        return (
          (n = new i3({
            props: { color: e[2].canReset ? "#14142B" : "#A0A3BD" },
          })),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { style: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              (t1(t, "display", "flex"),
                t1(t, "flex-direction", "column"),
                t1(t, "align-items", "center"));
            },
            m(e, o) {
              (tk(e, t, o), nO(n, t, null), (l = !0));
            },
            p(e, t) {
              let l = {};
              (4 & t && (l.color = e[2].canReset ? "#14142B" : "#A0A3BD"),
                n.$set(l));
            },
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n));
            },
          }
        );
      }
      function rf(e) {
        let t, n;
        return (
          (t = new lv({
            props: {
              disabled: !e[2].canReset,
              width: "auto",
              height: "28px",
              style: "flex:1",
              $$slots: { default: [rh] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[29]),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (4 & n && (l.disabled = !e[2].canReset),
                1073741828 & n && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rm(e) {
        let t,
          n,
          l,
          o,
          i,
          r,
          s,
          a,
          c,
          d,
          u,
          h,
          f,
          m,
          p,
          g,
          v,
          A,
          w,
          x,
          y,
          E,
          C,
          b,
          T,
          $,
          I;
        let O = e[4].t("mdf.controls.reset") + "",
          M = e[4].t("mdf.controls.resetTarget") + "",
          D = e[4].t("mdf.controls.reset") + "",
          k = e[4].t("mdf.controls.resetAttach") + "",
          L = e[4].t("mdf.controls.reset") + "",
          N = e[4].t("mdf.controls.resetOcclPlane") + "",
          R = e[4].t("mdf.controls.reset") + "",
          S = e[4].t("mdf.controls.resetAll") + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("span")),
              (o = tB(O)),
              (i = tB("-")),
              (r = tP()),
              (s = tB(M)),
              (a = tP()),
              (c = tR("div")),
              (d = tR("span")),
              (u = tB(D)),
              (h = tB("-")),
              (f = tB(k)),
              (m = tP()),
              (p = tR("div")),
              (g = tR("span")),
              (v = tB(L)),
              (A = tB("-")),
              (w = tB(N)),
              (x = tP()),
              (y = tR("div")),
              (E = tR("span")),
              (C = tB(R)),
              (b = tB("-")),
              (T = tB(S)),
              this.h());
          },
          l(e) {
            var $ = tV((t = tY(e, "DIV", { class: !0 }))),
              I = tV((n = tY($, "DIV", { class: !0 }))),
              B = tV((l = tY(I, "SPAN", { style: !0 })));
            ((o = tW(B, O)),
              (i = tW(B, "-")),
              B.forEach(tL),
              (r = tq(I)),
              (s = tW(I, M)),
              I.forEach(tL),
              (a = tq($)));
            var P = tV((c = tY($, "DIV", { class: !0 }))),
              U = tV((d = tY(P, "SPAN", { style: !0 })));
            ((u = tW(U, D)),
              (h = tW(U, "-")),
              U.forEach(tL),
              (f = tW(P, k)),
              P.forEach(tL),
              (m = tq($)));
            var j = tV((p = tY($, "DIV", { class: !0 }))),
              z = tV((g = tY(j, "SPAN", { style: !0 })));
            ((v = tW(z, L)),
              (A = tW(z, "-")),
              z.forEach(tL),
              (w = tW(j, N)),
              j.forEach(tL),
              (x = tq($)));
            var H = tV((y = tY($, "DIV", { class: !0 }))),
              G = tV((E = tY(H, "SPAN", { style: !0 })));
            ((C = tW(G, R)),
              (b = tW(G, "-")),
              G.forEach(tL),
              (T = tW(H, S)),
              H.forEach(tL),
              $.forEach(tL),
              this.h());
          },
          h() {
            (t1(l, "color", "#6E7191"),
              tG(n, "class", "sm-reset-menu-item svelte-1fhw4iv"),
              t1(d, "color", "#6E7191"),
              tG(c, "class", "sm-reset-menu-item svelte-1fhw4iv"),
              t1(g, "color", "#6E7191"),
              tG(p, "class", "sm-reset-menu-item svelte-1fhw4iv"),
              t1(E, "color", "#6E7191"),
              tG(y, "class", "sm-reset-menu-item svelte-1fhw4iv"),
              tG(t, "class", "sm-reset-menu svelte-1fhw4iv"));
          },
          m(O, M) {
            (tk(O, t, M),
              tD(t, n),
              tD(n, l),
              tD(l, o),
              tD(l, i),
              tD(n, r),
              tD(n, s),
              tD(t, a),
              tD(t, c),
              tD(c, d),
              tD(d, u),
              tD(d, h),
              tD(c, f),
              tD(t, m),
              tD(t, p),
              tD(p, g),
              tD(g, v),
              tD(g, A),
              tD(p, w),
              tD(t, x),
              tD(t, y),
              tD(y, E),
              tD(E, C),
              tD(E, b),
              tD(y, T),
              $ ||
                ((I = [
                  tj(n, "touchstart", tH(e[21])),
                  tj(n, "touchend", tH(e[22])),
                  tj(n, "mousedown", tH(e[23])),
                  tj(n, "click", e[7](ex.TARGET)),
                  tj(c, "touchstart", tH(e[18])),
                  tj(c, "touchend", tH(e[19])),
                  tj(c, "mousedown", tH(e[20])),
                  tj(c, "click", e[7](ex.ATTACHMENT)),
                  tj(p, "touchstart", tH(e[15])),
                  tj(p, "touchend", tH(e[16])),
                  tj(p, "mousedown", tH(e[17])),
                  tj(p, "click", e[7](ex.OCCL_PLANE)),
                  tj(y, "touchstart", tH(e[12])),
                  tj(y, "touchend", tH(e[13])),
                  tj(y, "mousedown", tH(e[14])),
                  tj(y, "click", e[7](ex.ALL)),
                ]),
                ($ = !0)));
          },
          p(e, t) {
            (16 & t &&
              O !== (O = e[4].t("mdf.controls.reset") + "") &&
              tX(o, O),
              16 & t &&
                M !== (M = e[4].t("mdf.controls.resetTarget") + "") &&
                tX(s, M),
              16 & t &&
                D !== (D = e[4].t("mdf.controls.reset") + "") &&
                tX(u, D),
              16 & t &&
                k !== (k = e[4].t("mdf.controls.resetAttach") + "") &&
                tX(f, k),
              16 & t &&
                L !== (L = e[4].t("mdf.controls.reset") + "") &&
                tX(v, L),
              16 & t &&
                N !== (N = e[4].t("mdf.controls.resetOcclPlane") + "") &&
                tX(w, N),
              16 & t &&
                R !== (R = e[4].t("mdf.controls.reset") + "") &&
                tX(C, R),
              16 & t &&
                S !== (S = e[4].t("mdf.controls.resetAll") + "") &&
                tX(T, S));
          },
          d(e) {
            (e && tL(t), ($ = !1), tr(I));
          },
        };
      }
      function rp(e) {
        let t, n, l, o, i, r, s, a, c, d, u;
        ((l = new rr({
          props: {
            label: e[4].t("mdf.controls.undo"),
            $$slots: { default: [rc] },
            $$scope: { ctx: e },
          },
        })),
          (i = new rr({
            props: {
              label: e[4].t("mdf.controls.redo"),
              $$slots: { default: [ru] },
              $$scope: { ctx: e },
            },
          })),
          (s = new rr({
            props: {
              label: e[4].t("mdf.controls.reset"),
              $$slots: { default: [rf] },
              $$scope: { ctx: e },
            },
          })));
        let h = e[0] && rm(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              n$(l.$$.fragment),
              (o = tP()),
              n$(i.$$.fragment),
              (r = tP()),
              n$(s.$$.fragment),
              (a = tP()),
              h && h.c(),
              this.h());
          },
          l(e) {
            var c = tV((t = tY(e, "DIV", { class: !0 }))),
              d = tV((n = tY(c, "DIV", { class: !0 })));
            (nI(l.$$.fragment, d),
              (o = tq(d)),
              nI(i.$$.fragment, d),
              (r = tq(d)),
              nI(s.$$.fragment, d),
              d.forEach(tL),
              (a = tq(c)),
              h && h.l(c),
              c.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "sm-btn-group svelte-1fhw4iv"),
              tG(t, "class", "sm-box svelte-1fhw4iv"));
          },
          m(f, m) {
            (tk(f, t, m),
              tD(t, n),
              nO(l, n, null),
              tD(n, o),
              nO(i, n, null),
              tD(n, r),
              nO(s, n, null),
              tD(t, a),
              h && h.m(t, null),
              (c = !0),
              d ||
                ((u = [
                  tj(window, "touchstart", e[24]),
                  tj(window, "mousedown", e[25]),
                  tj(window, "click", e[26]),
                  tj(t, "mousedown", tH(e[10])),
                  tj(t, "mousemove", tH(e[11])),
                ]),
                (d = !0)));
          },
          p(e, n) {
            let [o] = n,
              r = {};
            (16 & o && (r.label = e[4].t("mdf.controls.undo")),
              1073741838 & o && (r.$$scope = { dirty: o, ctx: e }),
              l.$set(r));
            let a = {};
            (16 & o && (a.label = e[4].t("mdf.controls.redo")),
              1073741838 & o && (a.$$scope = { dirty: o, ctx: e }),
              i.$set(a));
            let c = {};
            (16 & o && (c.label = e[4].t("mdf.controls.reset")),
              1073741829 & o && (c.$$scope = { dirty: o, ctx: e }),
              s.$set(c),
              e[0]
                ? h
                  ? h.p(e, o)
                  : ((h = rm(e)).c(), h.m(t, null))
                : h && (h.d(1), (h = null)));
          },
          i(e) {
            c ||
              (nx(l.$$.fragment, e),
              nx(i.$$.fragment, e),
              nx(s.$$.fragment, e),
              (c = !0));
          },
          o(e) {
            (ny(l.$$.fragment, e),
              ny(i.$$.fragment, e),
              ny(s.$$.fragment, e),
              (c = !1));
          },
          d(e) {
            (e && tL(t), nM(l), nM(i), nM(s), h && h.d(), (d = !1), tr(u));
          },
        };
      }
      function rg(e, t, n) {
        let l, o, i, r, s;
        let a = o8();
        tu(e, a, (e) => n(9, (s = e)));
        let c = !1,
          d = (e) => n(0, (c = e)),
          u = () => {
            if (r.toolType === ew.ATTACHMENT) {
              let e = !i.IsNeedCalBHLocations();
              a.updateMdf({ angelButtonReady: e });
            }
          };
        return (
          (e.$$.update = () => {
            (512 & e.$$.dirty && n(4, (l = l0(s.language))),
              512 & e.$$.dirty && n(3, (o = s.stat)),
              512 & e.$$.dirty && n(1, (i = s._instance.editor)),
              512 & e.$$.dirty && n(2, (r = s.mdf)));
          }),
          [
            c,
            i,
            r,
            o,
            l,
            a,
            d,
            (e) => () => {
              (i.Reset(e),
                (e === ex.ALL || e === ex.OCCL_PLANE) && a.OPE.syncStatus(),
                u(),
                o({
                  catalog: "医生修改",
                  event: "点击重置按钮",
                  value: ex[e],
                }));
            },
            u,
            s,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => d(!1),
            () => d(!1),
            () => d(!1),
            () => {
              (i.Undo(),
                a.OPE.syncStatus(),
                u(),
                o({ catalog: "医生修改", event: "点击撤销按钮" }));
            },
            () => {
              (i.Redo(),
                a.OPE.syncStatus(),
                u(),
                o({ catalog: "医生修改", event: "点击重做按钮" }));
            },
            (e) => {
              (e.detail.stopPropagation(), d(!c));
            },
          ]
        );
      }
      class rv extends nk {
        constructor(e) {
          (super(), nD(this, e, rg, rp, ta, {}, rs));
        }
      }
      function rA(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M6 0a6 6 0 11-6 6 6 6 0 016-6zm.8 5.99l2.03 2.03a.562.562 0 010 .81.58.58 0 01-.81 0L5.99 6.8 3.96 8.83a.592.592 0 01-.82 0 .58.58 0\n        010-.81l2.03-2.03-2.03-2.03a.58.58 0 010-.81.592.592 0 01.82 0l2.03 2.03 2.03-2.03a.58.58 0 01.81 0 .562.562 0 010 .81z",
            ),
              tG(t, "fill", e[0]),
              tG(t, "fill-rule", "evenodd"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function rw(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 12 12",
              $$slots: { default: [rA] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rx(e, t, n) {
        let { color: l = "#333" } = t,
          { width: o = 12 } = t,
          { height: i = 12 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class ry extends nk {
        constructor(e) {
          (super(),
            nD(this, e, rx, rw, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function rE(e) {
        tI(
          e,
          "svelte-nqq9j2",
          ".sm-menu.svelte-nqq9j2{position:absolute;z-index:100;background-color:#fff;box-shadow:0 0 6px 0 rgba(130, 130, 130, 0.65);border-radius:4px;overflow:hidden;font-size:14px;user-select:none}.sm-menu-item.svelte-nqq9j2{padding:10px 14px;display:flex;flex-flow:row nowrap;align-items:center;cursor:pointer;white-space:nowrap}.sm-menu-item.svelte-nqq9j2:hover{background:#eee;color:#0086cd}.sm-menu-divider.svelte-nqq9j2{height:1px;width:100%;background-color:#eee}",
        );
      }
      function rC(e, t, n) {
        let l = e.slice();
        return ((l[12] = t[n]), (l[14] = n), l);
      }
      function rb(e) {
        let t;
        return {
          c() {
            ((t = tR("div")), this.h());
          },
          l(e) {
            (tV((t = tY(e, "DIV", { class: !0 }))).forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-menu-divider svelte-nqq9j2");
          },
          m(e, n) {
            tk(e, t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function rT(e) {
        let t, n;
        return (
          (t = new ry({
            props: {
              style: "margin-right: 10px",
              width: "13",
              height: "13",
              color: "red",
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function r$(e) {
        let t, n;
        return (
          (t = new iw({
            props: {
              style: "margin-right: 10px",
              width: "13",
              height: "13",
              color: "#0086cd",
              checked: e[12].selected,
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (1 & n && (l.checked = e[12].selected), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rI(e) {
        let t, n, l, o, i, r, s, a, c, d, u;
        let h = e[12].text + "",
          f = e[14] > 1 && e[12].type === eC.REMOVE && rb(),
          m = [r$, rT],
          p = [];
        function g(e, t) {
          return e[12].type === eC.RATIO
            ? 0
            : e[12].type === eC.REMOVE
              ? 1
              : -1;
        }
        return (
          ~(l = g(e)) && (o = p[l] = m[l](e)),
          {
            c() {
              (f && f.c(),
                (t = tP()),
                (n = tR("div")),
                o && o.c(),
                (i = tP()),
                (r = tR("span")),
                (s = tB(h)),
                (a = tP()),
                this.h());
            },
            l(e) {
              (f && f.l(e), (t = tq(e)));
              var l = tV((n = tY(e, "DIV", { class: !0 })));
              (o && o.l(l), (i = tq(l)));
              var c = tV((r = tY(l, "SPAN", { class: !0 })));
              ((s = tW(c, h)),
                c.forEach(tL),
                (a = tq(l)),
                l.forEach(tL),
                this.h());
            },
            h() {
              (tG(r, "class", "sm-menu-text"),
                tG(n, "class", "sm-menu-item svelte-nqq9j2"));
            },
            m(o, h) {
              (f && f.m(o, h),
                tk(o, t, h),
                tk(o, n, h),
                ~l && p[l].m(n, null),
                tD(n, i),
                tD(n, r),
                tD(r, s),
                tD(n, a),
                (c = !0),
                d || ((u = tj(n, "click", e[4](e[14]))), (d = !0)));
            },
            p(r, a) {
              (e = r)[14] > 1 && e[12].type === eC.REMOVE
                ? f || ((f = rb()).c(), f.m(t.parentNode, t))
                : f && (f.d(1), (f = null));
              let d = l;
              ((l = g(e)) === d
                ? ~l && p[l].p(e, a)
                : (o &&
                    (nA(),
                    ny(p[d], 1, 1, () => {
                      p[d] = null;
                    }),
                    nw()),
                  ~l
                    ? ((o = p[l]) ? o.p(e, a) : (o = p[l] = m[l](e)).c(),
                      nx(o, 1),
                      o.m(n, i))
                    : (o = null)),
                (!c || 1 & a) && h !== (h = e[12].text + "") && tX(s, h));
            },
            i(e) {
              c || (nx(o), (c = !0));
            },
            o(e) {
              (ny(o), (c = !1));
            },
            d(e) {
              (f && f.d(e),
                e && tL(t),
                e && tL(n),
                ~l && p[l].d(),
                (d = !1),
                u());
            },
          }
        );
      }
      function rO(e) {
        let t, n, l, o;
        let i = e[0].list,
          r = [];
        for (let t = 0; t < i.length; t += 1) r[t] = rI(rC(e, i, t));
        let s = (e) =>
          ny(r[e], 1, 1, () => {
            r[e] = null;
          });
        return {
          c() {
            t = tR("div");
            for (let e = 0; e < r.length; e += 1) r[e].c();
            this.h();
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            for (let e = 0; e < r.length; e += 1) r[e].l(n);
            (n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-menu svelte-nqq9j2"),
              t1(t, "left", e[2][0] + "px"),
              t1(t, "top", e[2][1] + "px"));
          },
          m(i, s) {
            tk(i, t, s);
            for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(t, null);
            (e[9](t),
              (n = !0),
              l ||
                ((o = [
                  tj(t, "mousedown", tH(e[6])),
                  tj(t, "touchstart", tH(e[7])),
                  tj(t, "touchend", tH(e[8])),
                ]),
                (l = !0)));
          },
          p(e, l) {
            let [o] = l;
            if (17 & o) {
              let n;
              for (n = 0, i = e[0].list; n < i.length; n += 1) {
                let l = rC(e, i, n);
                r[n]
                  ? (r[n].p(l, o), nx(r[n], 1))
                  : ((r[n] = rI(l)), r[n].c(), nx(r[n], 1), r[n].m(t, null));
              }
              for (nA(), n = i.length; n < r.length; n += 1) s(n);
              nw();
            }
            ((!n || 4 & o) && t1(t, "left", e[2][0] + "px"),
              (!n || 4 & o) && t1(t, "top", e[2][1] + "px"));
          },
          i(e) {
            if (!n) {
              for (let e = 0; e < i.length; e += 1) nx(r[e]);
              n = !0;
            }
          },
          o(e) {
            r = r.filter(Boolean);
            for (let e = 0; e < r.length; e += 1) ny(r[e]);
            n = !1;
          },
          d(n) {
            (n && tL(t), tN(r, n), e[9](null), (l = !1), tr(o));
          },
        };
      }
      function rM(e, t, n) {
        let l, o, i, r;
        let s = o8();
        tu(e, s, (e) => n(5, (i = e)));
        let a = (e) => {
            !r.contains(e.target) &&
              l.list.length &&
              s.updateMenu({ list: [], triggerIndex: -1 });
          },
          c = (e) => {
            e.stopPropagation();
          };
        return (
          ne(() => {
            (document.addEventListener("touchstart", a, !0),
              document.addEventListener("mousedown", a, !0),
              document.addEventListener("wheel", c, !0));
          }),
          nt(() => {
            (document.removeEventListener("touchstart", a, !0),
              document.removeEventListener("mousedown", a, !0),
              document.removeEventListener("wheel", c, !0));
          }),
          (e.$$.update = () => {
            (32 & e.$$.dirty && n(0, (l = i.menu)),
              1 & e.$$.dirty && n(2, (o = l.pointerPosition)));
          }),
          [
            l,
            r,
            o,
            s,
            (e) => () => s.updateMenu({ triggerIndex: e }),
            i,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(1, (r = e));
              });
            },
          ]
        );
      }
      class rD extends nk {
        constructor(e) {
          (super(), nD(this, e, rM, rO, ta, {}, rE));
        }
      }
      function rk(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                fill: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M2.75922 4.24078L6.2408 7.72237L9.72239 4.24078"),
              tG(t, "fill", "none"),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "stroke", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function rL(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 12 12",
              $$slots: { default: [rk] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rN(e, t, n) {
        let { color: l = "#6E7191" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class rR extends nk {
        constructor(e) {
          (super(),
            nD(this, e, rN, rL, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function rS(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                fill: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M2.7592 7.72238L6.24079 4.24079L9.72237 7.72238"),
              tG(t, "fill", "none"),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "stroke-linejoin", "round"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "stroke", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function rB(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 12 12",
              $$slots: { default: [rS] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rP(e, t, n) {
        let { color: l = "#6E7191" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class rU extends nk {
        constructor(e) {
          (super(),
            nD(this, e, rP, rB, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function rj(e) {
        tI(
          e,
          "svelte-uykm68",
          ".sm-box.svelte-uykm68{height:100%}.sm-box-hd.svelte-uykm68{display:flex;padding:10px 0;flex-flow:row nowrap;justify-content:space-between;align-items:center;cursor:pointer;color:#14142b}.sm-box-hd.svelte-uykm68:hover{color:#0086cd}.sm-box-title.svelte-uykm68{font-weight:bold;color:#14142b;font-size:16px;display:flex;flex-flow:row nowrap;align-items:center}.sm-box-main.svelte-uykm68{height:calc(100% - 40px)}",
        );
      }
      let rz = (e) => ({}),
        rH = (e) => ({});
      function rG(e) {
        let t, n;
        return (
          (t = new rR({ props: { color: "currentColor" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rV(e) {
        let t, n;
        return (
          (t = new rU({ props: { color: "currentColor" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function rZ(e) {
        let t, n;
        let l = e[4].default,
          o = th(l, e, e[3], null);
        return {
          c() {
            ((t = tR("div")), o && o.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0 })));
            (o && o.l(n), n.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-box-main svelte-uykm68");
          },
          m(e, l) {
            (tk(e, t, l), o && o.m(t, null), (n = !0));
          },
          p(e, t) {
            o &&
              o.p &&
              (!n || 8 & t) &&
              tp(o, l, e, e[3], n ? tm(l, e[3], t, null) : tg(e[3]), null);
          },
          i(e) {
            n || (nx(o, e), (n = !0));
          },
          o(e) {
            (ny(o, e), (n = !1));
          },
          d(e) {
            (e && tL(t), o && o.d(e));
          },
        };
      }
      function rF(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h;
        let f = e[4].title,
          m = th(f, e, e[3], rH),
          p = m || {
            c() {
              h = tB(e[0]);
            },
            l(t) {
              h = tW(t, e[0]);
            },
            m(e, t) {
              tk(e, h, t);
            },
            p(e, t) {
              1 & t && tX(h, e[0]);
            },
            d(e) {
              e && tL(h);
            },
          },
          g = [rV, rG],
          v = [];
        s = v[(r = e[1] ? 0 : 1)] = g[r](e);
        let A = e[1] && rZ(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              p && p.c(),
              (o = tP()),
              (i = tR("div")),
              s.c(),
              (a = tP()),
              A && A.c(),
              this.h());
          },
          l(e) {
            var r = tV((t = tY(e, "DIV", { class: !0 }))),
              c = tV((n = tY(r, "DIV", { class: !0 }))),
              d = tV((l = tY(c, "DIV", { class: !0 })));
            (p && p.l(d), d.forEach(tL), (o = tq(c)));
            var u = tV((i = tY(c, "DIV", { class: !0 })));
            (s.l(u),
              u.forEach(tL),
              c.forEach(tL),
              (a = tq(r)),
              A && A.l(r),
              r.forEach(tL),
              this.h());
          },
          h() {
            (tG(l, "class", "sm-box-title svelte-uykm68"),
              tG(i, "class", "sm-box-btn-hide"),
              tG(n, "class", "sm-box-hd svelte-uykm68"),
              tG(t, "class", "sm-box svelte-uykm68"));
          },
          m(s, h) {
            (tk(s, t, h),
              tD(t, n),
              tD(n, l),
              p && p.m(l, null),
              tD(n, o),
              tD(n, i),
              v[r].m(i, null),
              tD(t, a),
              A && A.m(t, null),
              (c = !0),
              d ||
                ((u = [
                  tj(n, "mousedown", tH(e[5])),
                  tj(n, "touchstart", tH(tz(e[2]))),
                  tj(n, "click", e[2]),
                ]),
                (d = !0)));
          },
          p(e, n) {
            let [l] = n;
            m
              ? m.p &&
                (!c || 8 & l) &&
                tp(m, f, e, e[3], c ? tm(f, e[3], l, rz) : tg(e[3]), rH)
              : p && p.p && (!c || 1 & l) && p.p(e, c ? l : -1);
            let o = r;
            ((r = e[1] ? 0 : 1) !== o &&
              (nA(),
              ny(v[o], 1, 1, () => {
                v[o] = null;
              }),
              nw(),
              (s = v[r]) || (s = v[r] = g[r](e)).c(),
              nx(s, 1),
              s.m(i, null)),
              e[1]
                ? A
                  ? (A.p(e, l), 2 & l && nx(A, 1))
                  : ((A = rZ(e)).c(), nx(A, 1), A.m(t, null))
                : A &&
                  (nA(),
                  ny(A, 1, 1, () => {
                    A = null;
                  }),
                  nw()));
          },
          i(e) {
            c || (nx(p, e), nx(s), nx(A), (c = !0));
          },
          o(e) {
            (ny(p, e), ny(s), ny(A), (c = !1));
          },
          d(e) {
            (e && tL(t), p && p.d(e), v[r].d(), A && A.d(), (d = !1), tr(u));
          },
        };
      }
      function rJ(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          { title: i = "" } = t,
          r = !0;
        return (
          (e.$$set = (e) => {
            ("title" in e && n(0, (i = e.title)),
              "$$scope" in e && n(3, (o = e.$$scope)));
          }),
          [
            i,
            r,
            () => n(1, (r = !r)),
            o,
            l,
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class rY extends nk {
        constructor(e) {
          (super(), nD(this, e, rJ, rF, ta, { title: 0 }, rj));
        }
      }
      function rK(e) {
        tI(
          e,
          "svelte-xumaah",
          ".sm-section.svelte-xumaah{padding:10px 0px}.sm-section:nth-child(1){padding-top:0px}",
        );
      }
      function rW(e) {
        let t, n;
        let l = e[2].default,
          o = th(l, e, e[1], null);
        return {
          c() {
            ((t = tR("div")), o && o.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            (o && o.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-section svelte-xumaah"), tG(t, "style", e[0]));
          },
          m(e, l) {
            (tk(e, t, l), o && o.m(t, null), (n = !0));
          },
          p(e, i) {
            let [r] = i;
            (o &&
              o.p &&
              (!n || 2 & r) &&
              tp(o, l, e, e[1], n ? tm(l, e[1], r, null) : tg(e[1]), null),
              (!n || 1 & r) && tG(t, "style", e[0]));
          },
          i(e) {
            n || (nx(o, e), (n = !0));
          },
          o(e) {
            (ny(o, e), (n = !1));
          },
          d(e) {
            (e && tL(t), o && o.d(e));
          },
        };
      }
      function rq(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          { style: i = "" } = t;
        return (
          (e.$$set = (e) => {
            ("style" in e && n(0, (i = e.style)),
              "$$scope" in e && n(1, (o = e.$$scope)));
          }),
          [i, o, l]
        );
      }
      class rQ extends nk {
        constructor(e) {
          (super(), nD(this, e, rq, rW, ta, { style: 0 }, rK));
        }
      }
      function rX(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("rect")), (n = tP()), (l = tS("rect")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "rect", { width: !0, height: !0, rx: !0, fill: !0 })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "rect", {
                  x: !0,
                  y: !0,
                  width: !0,
                  height: !0,
                  rx: !0,
                  fill: !0,
                  stroke: !0,
                  "stroke-width": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "width", "32"),
              tG(t, "height", "16"),
              tG(t, "rx", "8"),
              tG(t, "fill", e[2]),
              tG(l, "x", "1"),
              tG(l, "y", "1"),
              tG(l, "width", "14"),
              tG(l, "height", "14"),
              tG(l, "rx", "7"),
              tG(l, "fill", "#FCFCFC"),
              tG(l, "stroke", e[2]),
              tG(l, "stroke-width", "2"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (4 & n && tG(t, "fill", e[2]), 4 & n && tG(l, "stroke", e[2]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function r_(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("rect")), (n = tP()), (l = tS("rect")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "rect", { width: !0, height: !0, rx: !0, fill: !0 })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "rect", {
                  x: !0,
                  y: !0,
                  width: !0,
                  height: !0,
                  rx: !0,
                  fill: !0,
                  stroke: !0,
                  "stroke-width": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "width", "32"),
              tG(t, "height", "16"),
              tG(t, "rx", "8"),
              tG(t, "fill", e[1]),
              tG(l, "x", "17"),
              tG(l, "y", "1"),
              tG(l, "width", "14"),
              tG(l, "height", "14"),
              tG(l, "rx", "7"),
              tG(l, "fill", "#FCFCFC"),
              tG(l, "stroke", e[1]),
              tG(l, "stroke-width", "2"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (2 & n && tG(t, "fill", e[1]), 2 & n && tG(l, "stroke", e[1]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function r1(e) {
        let t;
        let n = e[0] ? r_ : rX,
          l = n(e);
        return {
          c() {
            (l.c(), (t = tU()));
          },
          l(e) {
            (l.l(e), (t = tU()));
          },
          m(e, n) {
            (l.m(e, n), tk(e, t, n));
          },
          p(e, o) {
            n === (n = e[0] ? r_ : rX) && l
              ? l.p(e, o)
              : (l.d(1), (l = n(e)) && (l.c(), l.m(t.parentNode, t)));
          },
          d(e) {
            (l.d(e), e && tL(t));
          },
        };
      }
      function r0(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[3],
              height: e[4],
              style: e[5],
              viewBox: "0 0 32 16",
              $$slots: { default: [r1] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (8 & l && (o.width = e[3]),
                16 & l && (o.height = e[4]),
                32 & l && (o.style = e[5]),
                71 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function r2(e, t, n) {
        let { active: l = !1 } = t,
          { activeColor: o = "#0086cd" } = t,
          { defaultColor: i = "#D9DBE9" } = t,
          { width: r = 32 } = t,
          { height: s = 16 } = t,
          { style: a = "" } = t;
        return (
          (e.$$set = (e) => {
            ("active" in e && n(0, (l = e.active)),
              "activeColor" in e && n(1, (o = e.activeColor)),
              "defaultColor" in e && n(2, (i = e.defaultColor)),
              "width" in e && n(3, (r = e.width)),
              "height" in e && n(4, (s = e.height)),
              "style" in e && n(5, (a = e.style)));
          }),
          [l, o, i, r, s, a]
        );
      }
      class r3 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, r2, r0, ta, {
              active: 0,
              activeColor: 1,
              defaultColor: 2,
              width: 3,
              height: 4,
              style: 5,
            }));
        }
      }
      function r4(e) {
        tI(
          e,
          "svelte-1v2r2vv",
          ".sm-checkbox.svelte-1v2r2vv{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-size:12px;line-height:16px;color:#333;cursor:pointer;user-select:none}",
        );
      }
      function r7(e) {
        let t, n, l, o, i, r;
        let s = e[5].default,
          a = th(s, e, e[4], null);
        return (
          (l = new r3({ props: { style: "margin-left:6px;", active: e[0] } })),
          {
            c() {
              ((t = tR("div")),
                a && a.c(),
                (n = tP()),
                n$(l.$$.fragment),
                this.h());
            },
            l(e) {
              var o = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
              (a && a.l(o),
                (n = tq(o)),
                nI(l.$$.fragment, o),
                o.forEach(tL),
                this.h());
            },
            h() {
              (tG(t, "class", "sm-checkbox svelte-1v2r2vv"),
                tG(t, "style", e[2]));
            },
            m(s, c) {
              (tk(s, t, c),
                a && a.m(t, null),
                tD(t, n),
                nO(l, t, null),
                (o = !0),
                i ||
                  ((r = [
                    tj(t, "mousedown", tH(e[6])),
                    tj(t, "touchstart", tH(e[7])),
                    tj(t, "touchend", tH(e[8])),
                    tj(t, "click", e[9]),
                  ]),
                  (i = !0)));
            },
            p(e, n) {
              let [i] = n;
              a &&
                a.p &&
                (!o || 16 & i) &&
                tp(a, s, e, e[4], o ? tm(s, e[4], i, null) : tg(e[4]), null);
              let r = {};
              (1 & i && (r.active = e[0]),
                l.$set(r),
                (!o || 4 & i) && tG(t, "style", e[2]));
            },
            i(e) {
              o || (nx(a, e), nx(l.$$.fragment, e), (o = !0));
            },
            o(e) {
              (ny(a, e), ny(l.$$.fragment, e), (o = !1));
            },
            d(e) {
              (e && tL(t), a && a.d(e), nM(l), (i = !1), tr(r));
            },
          }
        );
      }
      function r6(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          i = nn(),
          { checked: r = !1 } = t,
          { disabled: s = !1 } = t,
          { style: a = "" } = t;
        return (
          (e.$$set = (e) => {
            ("checked" in e && n(0, (r = e.checked)),
              "disabled" in e && n(1, (s = e.disabled)),
              "style" in e && n(2, (a = e.style)),
              "$$scope" in e && n(4, (o = e.$$scope)));
          }),
          [
            r,
            s,
            a,
            i,
            o,
            l,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            (e) => {
              (s || n(0, (r = !r)), i("click", e));
            },
          ]
        );
      }
      class r5 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, r6, r7, ta, { checked: 0, disabled: 1, style: 2 }, r4));
        }
      }
      function r8(e) {
        let t, n, l, o, i, r, s, a, c;
        return {
          c() {
            ((t = tS("g")),
              (n = tS("path")),
              (l = tS("path")),
              (o = tS("path")),
              (i = tS("path")),
              (r = tP()),
              (s = tS("defs")),
              (a = tS("clipPath")),
              (c = tS("rect")),
              this.h());
          },
          l(e) {
            var d = tV((t = tK(e, "g", { "clip-path": !0 })));
            (tV((n = tK(d, "path", { opacity: !0, d: !0, fill: !0 }))).forEach(
              tL,
            ),
              tV((l = tK(d, "path", { d: !0, fill: !0 }))).forEach(tL),
              tV(
                (o = tK(d, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                  "stroke-linejoin": !0,
                })),
              ).forEach(tL),
              tV((i = tK(d, "path", { d: !0, fill: !0 }))).forEach(tL),
              d.forEach(tL),
              (r = tq(e)));
            var u = tV((s = tK(e, "defs", {}))),
              h = tV((a = tK(u, "clipPath", { id: !0 })));
            (tV(
              (c = tK(h, "rect", {
                width: !0,
                height: !0,
                fill: !0,
                transform: !0,
              })),
            ).forEach(tL),
              h.forEach(tL),
              u.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "opacity", "0.3"),
              tG(
                n,
                "d",
                "M10 7.64941C16.9359 7.64941 19.5 16.0589 19.5 21.1577C19.5 22.6313 19.5 24.3506 17.9576 24.3506C14.2048 24.3506 16.4643 10.8325 10 10.8325C3.53568 10.8325 5.79524 24.3506 2.0424 24.3506C0.5 24.3506 0.5 22.6313 0.5 21.1577C0.5 16.0589 3.05429 7.64941 10 7.64941Z",
              ),
              tG(n, "fill", e[0]),
              tG(l, "d", "M10 5.13428V26.8654V5.13428Z"),
              tG(l, "fill", e[0]),
              tG(o, "d", "M10 5.13428V26.8654"),
              tG(o, "stroke", "#0086CD"),
              tG(o, "stroke-width", "2.35781"),
              tG(o, "stroke-linecap", "round"),
              tG(o, "stroke-linejoin", "round"),
              tG(
                i,
                "d",
                "M15.7275 5.90085H4.27246L9.99997 0.17334L15.7275 5.90085ZM15.7275 26.0994H4.27246L9.99997 31.8269L15.7275 26.0994Z",
              ),
              tG(i, "fill", e[0]),
              tG(t, "clip-path", "url(#clip0_1090_35204)"),
              tG(c, "width", "19"),
              tG(c, "height", "32"),
              tG(c, "fill", "white"),
              tG(c, "transform", "translate(0.5)"),
              tG(a, "id", "clip0_1090_35204"));
          },
          m(e, d) {
            (tk(e, t, d),
              tD(t, n),
              tD(t, l),
              tD(t, o),
              tD(t, i),
              tk(e, r, d),
              tk(e, s, d),
              tD(s, a),
              tD(a, c));
          },
          p(e, t) {
            (1 & t && tG(n, "fill", e[0]),
              1 & t && tG(l, "fill", e[0]),
              1 & t && tG(i, "fill", e[0]));
          },
          d(e) {
            (e && tL(t), e && tL(r), e && tL(s));
          },
        };
      }
      function r9(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 20 32",
              $$slots: { default: [r8] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function se(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 20 } = t,
          { height: i = 32 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class st extends nk {
        constructor(e) {
          (super(),
            nD(this, e, se, r9, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function sn(e) {
        let t, n, l, o, i, r, s, a, c, d;
        return {
          c() {
            ((t = tS("g")),
              (n = tS("g")),
              (l = tS("path")),
              (o = tS("circle")),
              (i = tS("circle")),
              (r = tS("circle")),
              (s = tS("circle")),
              (a = tS("circle")),
              (c = tS("circle")),
              (d = tS("path")),
              this.h());
          },
          l(e) {
            var u = tV((t = tK(e, "g", { opacity: !0 }))),
              h = tV((n = tK(u, "g", { opacity: !0 })));
            (tV(
              (l = tK(h, "path", {
                d: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              tV(
                (o = tK(h, "circle", { cx: !0, cy: !0, r: !0, fill: !0 })),
              ).forEach(tL),
              tV(
                (i = tK(h, "circle", { cx: !0, cy: !0, r: !0, fill: !0 })),
              ).forEach(tL),
              tV(
                (r = tK(h, "circle", { cx: !0, cy: !0, r: !0, fill: !0 })),
              ).forEach(tL),
              tV(
                (s = tK(h, "circle", { cx: !0, cy: !0, r: !0, fill: !0 })),
              ).forEach(tL),
              tV(
                (a = tK(h, "circle", { cx: !0, cy: !0, r: !0, fill: !0 })),
              ).forEach(tL),
              tV(
                (c = tK(h, "circle", { cx: !0, cy: !0, r: !0, fill: !0 })),
              ).forEach(tL),
              h.forEach(tL),
              tV(
                (d = tK(u, "path", {
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              u.forEach(tL),
              this.h());
          },
          h() {
            (tG(
              l,
              "d",
              "M27.0548 14.9575C27.0548 7.27243 23.0498 1.04248 18.1094 1.04248C13.169 1.04248 9.16406 7.27243 9.16406 14.9575",
            ),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "1.6"),
              tG(l, "stroke-linecap", "round"),
              tG(l, "stroke-linejoin", "round"),
              tG(o, "cx", "9.16412"),
              tG(o, "cy", "13.9634"),
              tG(o, "r", "1.98785"),
              tG(o, "fill", e[0]),
              tG(i, "cx", "10.6548"),
              tG(i, "cy", "7.00592"),
              tG(i, "r", "1.98785"),
              tG(i, "fill", e[0]),
              tG(r, "cx", "14.6309"),
              tG(r, "cy", "2.03668"),
              tG(r, "r", "1.98785"),
              tG(r, "fill", e[0]),
              tG(s, "cx", "27.0547"),
              tG(s, "cy", "13.9634"),
              tG(s, "r", "1.98785"),
              tG(s, "fill", e[0]),
              tG(a, "cx", "25.5638"),
              tG(a, "cy", "7.00592"),
              tG(a, "r", "1.98785"),
              tG(a, "fill", e[0]),
              tG(c, "cx", "22.0853"),
              tG(c, "cy", "2.03668"),
              tG(c, "r", "1.98785"),
              tG(c, "fill", e[0]),
              tG(n, "opacity", "0.6"),
              tG(d, "fill-rule", "evenodd"),
              tG(d, "clip-rule", "evenodd"),
              tG(
                d,
                "d",
                "M30.2054 2.09228V6.69857L5.79454 6.69857V2.09232L-5.34058e-05 7.89685L5.79454 13.6915V9.09857L30.2054 9.09857V13.6914L36 7.89681L30.2054 2.09228Z",
              ),
              tG(d, "fill", e[0]),
              tG(t, "opacity", "0.8"));
          },
          m(e, u) {
            (tk(e, t, u),
              tD(t, n),
              tD(n, l),
              tD(n, o),
              tD(n, i),
              tD(n, r),
              tD(n, s),
              tD(n, a),
              tD(n, c),
              tD(t, d));
          },
          p(e, t) {
            (1 & t && tG(l, "stroke", e[0]),
              1 & t && tG(o, "fill", e[0]),
              1 & t && tG(i, "fill", e[0]),
              1 & t && tG(r, "fill", e[0]),
              1 & t && tG(s, "fill", e[0]),
              1 & t && tG(a, "fill", e[0]),
              1 & t && tG(c, "fill", e[0]),
              1 & t && tG(d, "fill", e[0]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sl(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 36 16",
              $$slots: { default: [sn] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function so(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 36 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class si extends nk {
        constructor(e) {
          (super(),
            nD(this, e, so, sl, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function sr(e) {
        tI(
          e,
          "svelte-sctwmz",
          ".archCheckMain.svelte-sctwmz{padding:3px 3px 13px;border-top:1px solid #d9dbe9}",
        );
      }
      function ss(e) {
        let t, n;
        return (
          (t = new st({ props: { color: "#0086CD" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function sa(e) {
        let t, n;
        return (
          (t = new si({ props: { color: "#0086CD" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function sc(e) {
        let t, n, l, o;
        return (
          (t = new lv({
            props: {
              title: e[4].t("mdf.arch.moveArch"),
              height: "40px",
              style: "margin: auto;",
              width: "100%",
              active: e[2] === ew.MOVE_ARCH,
              secondary: !0,
              $$slots: { default: [ss] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[7]),
          (l = new lv({
            props: {
              title: e[4].t("mdf.arch.title"),
              height: "40px",
              width: "100%",
              style: "margin: auto;",
              active: e[2] === ew.ARCH,
              secondary: !0,
              $$slots: { default: [sa] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[8]),
          {
            c() {
              (n$(t.$$.fragment), (n = tP()), n$(l.$$.fragment));
            },
            l(e) {
              (nI(t.$$.fragment, e), (n = tq(e)), nI(l.$$.fragment, e));
            },
            m(e, i) {
              (nO(t, e, i), tk(e, n, i), nO(l, e, i), (o = !0));
            },
            p(e, n) {
              let o = {};
              (16 & n && (o.title = e[4].t("mdf.arch.moveArch")),
                4 & n && (o.active = e[2] === ew.MOVE_ARCH),
                8192 & n && (o.$$scope = { dirty: n, ctx: e }),
                t.$set(o));
              let i = {};
              (16 & n && (i.title = e[4].t("mdf.arch.title")),
                4 & n && (i.active = e[2] === ew.ARCH),
                8192 & n && (i.$$scope = { dirty: n, ctx: e }),
                l.$set(i));
            },
            i(e) {
              o || (nx(t.$$.fragment, e), nx(l.$$.fragment, e), (o = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), ny(l.$$.fragment, e), (o = !1));
            },
            d(e) {
              (nM(t, e), e && tL(n), nM(l, e));
            },
          }
        );
      }
      function sd(e) {
        let t, n, l;
        function o(t) {
          e[9](t);
        }
        let i = {
          style: "margin-top:8px;",
          $$slots: { default: [su] },
          $$scope: { ctx: e },
        };
        return (
          void 0 !== e[0] && (i.checked = e[0]),
          (t = new r5({ props: i })),
          ni.push(() => nT(t, "checked", o)),
          t.$on("click", e[10]),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, n) {
              (nO(t, e, n), (l = !0));
            },
            p(e, l) {
              let o = {};
              (8208 & l && (o.$$scope = { dirty: l, ctx: e }),
                !n &&
                  1 & l &&
                  ((n = !0), (o.checked = e[0]), nu(() => (n = !1))),
                t.$set(o));
            },
            i(e) {
              l || (nx(t.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (l = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function su(e) {
        let t,
          n = e[4].t("mdf.arch.symmetrically") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            16 & l &&
              n !== (n = e[4].t("mdf.arch.symmetrically") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sh(e) {
        let t,
          n = e[4].t("mdf.arch.match") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            16 & l && n !== (n = e[4].t("mdf.arch.match") + "") && tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sf(e) {
        let t, n, l, o, i, r, s;
        t = new rQ({
          props: { $$slots: { default: [sc] }, $$scope: { ctx: e } },
        });
        let a = e[2] === ew.ARCH && sd(e);
        function c(t) {
          e[11](t);
        }
        let d = {
          style: "margin-top:8px;",
          $$slots: { default: [sh] },
          $$scope: { ctx: e },
        };
        return (
          void 0 !== e[1] && (d.checked = e[1]),
          (i = new r5({ props: d })),
          ni.push(() => nT(i, "checked", c)),
          i.$on("click", e[12]),
          {
            c() {
              (n$(t.$$.fragment),
                (n = tP()),
                (l = tR("div")),
                a && a.c(),
                (o = tP()),
                n$(i.$$.fragment),
                this.h());
            },
            l(e) {
              (nI(t.$$.fragment, e), (n = tq(e)));
              var r = tV((l = tY(e, "DIV", { class: !0 })));
              (a && a.l(r),
                (o = tq(r)),
                nI(i.$$.fragment, r),
                r.forEach(tL),
                this.h());
            },
            h() {
              tG(l, "class", "archCheckMain svelte-sctwmz");
            },
            m(e, r) {
              (nO(t, e, r),
                tk(e, n, r),
                tk(e, l, r),
                a && a.m(l, null),
                tD(l, o),
                nO(i, l, null),
                (s = !0));
            },
            p(e, n) {
              let s = {};
              (8220 & n && (s.$$scope = { dirty: n, ctx: e }),
                t.$set(s),
                e[2] === ew.ARCH
                  ? a
                    ? (a.p(e, n), 4 & n && nx(a, 1))
                    : ((a = sd(e)).c(), nx(a, 1), a.m(l, o))
                  : a &&
                    (nA(),
                    ny(a, 1, 1, () => {
                      a = null;
                    }),
                    nw()));
              let c = {};
              (8208 & n && (c.$$scope = { dirty: n, ctx: e }),
                !r &&
                  2 & n &&
                  ((r = !0), (c.checked = e[1]), nu(() => (r = !1))),
                i.$set(c));
            },
            i(e) {
              s ||
                (nx(t.$$.fragment, e), nx(a), nx(i.$$.fragment, e), (s = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), ny(a), ny(i.$$.fragment, e), (s = !1));
            },
            d(e) {
              (nM(t, e), e && tL(n), e && tL(l), a && a.d(), nM(i));
            },
          }
        );
      }
      function sm(e) {
        let t, n;
        return (
          (t = new rY({
            props: {
              title: e[4].t("mdf.arch.title"),
              $$slots: { default: [sf] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (16 & l && (o.title = e[4].t("mdf.arch.title")),
                8223 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function sp(e, t, n) {
        let l, o, i, r;
        let s = o8();
        tu(e, s, (e) => n(6, (r = e)));
        let a = r.mdf.archSymmetricEnabled,
          c = r.mdf.archMatchEnabled;
        return (
          (e.$$.update = () => {
            (64 & e.$$.dirty && n(4, (l = l0(r.language))),
              64 & e.$$.dirty && n(3, (o = r.stat)),
              64 & e.$$.dirty && n(2, (i = r.mdf.toolType)),
              1 & e.$$.dirty && s.updateMdf({ archSymmetricEnabled: a }),
              2 & e.$$.dirty && s.updateMdf({ archMatchEnabled: c }));
          }),
          [
            a,
            c,
            i,
            o,
            l,
            s,
            r,
            () => {
              (s.updateMdf({ toolType: ew.MOVE_ARCH }),
                o({ catalog: "医生修改", event: "点击整体移动牙列按钮" }));
            },
            () => {
              (s.updateMdf({ toolType: ew.ARCH }),
                o({ catalog: "医生修改", event: "点击牙弓曲线按钮" }));
            },
            function (e) {
              n(0, (a = e));
            },
            () => {
              o({
                catalog: "医生修改",
                event: "牙弓曲线-设置左右对称调整",
                value: a ? "on" : "off",
              });
            },
            function (e) {
              n(1, (c = e));
            },
            () => {
              o({
                catalog: "医生修改",
                event: "牙弓曲线-设置对颌匹配调整",
                value: c ? "on" : "off",
              });
            },
          ]
        );
      }
      class sg extends nk {
        constructor(e) {
          (super(), nD(this, e, sp, sm, ta, {}, sr));
        }
      }
      function sv(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { fill: !0, "fill-rule": !0, d: !0 })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill", e[0]),
              tG(t, "fill-rule", "evenodd"),
              tG(t, "d", "M-.002-.002l6 5.888-6 6.112v-12z"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sA(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 6 12",
              $$slots: { default: [sv] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function sw(e, t, n) {
        let { color: l = "#4E4B66" } = t,
          { width: o = 6 } = t,
          { height: i = 12 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class sx extends nk {
        constructor(e) {
          (super(),
            nD(this, e, sw, sA, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function sy(e) {
        tI(
          e,
          "svelte-17ut3u0",
          ".sm-init-view.svelte-17ut3u0.svelte-17ut3u0{display:flex;align-items:center;width:100%;height:100%}.sm-btn-init-left.svelte-17ut3u0.svelte-17ut3u0,.sm-btn-init-right.svelte-17ut3u0.svelte-17ut3u0{display:flex;height:100%;justify-content:center;align-items:center}.sm-btn-init-left.svelte-17ut3u0.svelte-17ut3u0{width:16px}.sm-btn-init-right.svelte-17ut3u0.svelte-17ut3u0{width:20px}.sm-btn-icon.svelte-17ut3u0.svelte-17ut3u0{cursor:pointer}.sm-value-init.svelte-17ut3u0.svelte-17ut3u0{flex:1;text-align:left}.sm-new-label.svelte-17ut3u0.svelte-17ut3u0{position:absolute;top:0;left:10px;font-size:12px;line-height:12px;padding:4px;border-radius:999px;transform-origin:100% 50%;transform:scale(0.7);background-color:#ff0000;color:#fff}.sm-switch.svelte-17ut3u0.svelte-17ut3u0{height:34px;display:flex;flex-flow:row nowrap;align-items:center;user-select:none;border-radius:8px;border:1px solid transparent}.sm-value.svelte-17ut3u0.svelte-17ut3u0{text-align:center;color:#14142b;font-size:12px;display:flex;align-items:center;font-weight:500}.sm-value-input.svelte-17ut3u0.svelte-17ut3u0{width:38px;padding:0 6px;height:24px;display:flex;justify-content:center;align-items:center;border-radius:5px;background-color:#eff0f6;border:1px solid transparent;margin-right:2px;font-weight:500}input.svelte-17ut3u0.svelte-17ut3u0:focus{border:1px solid #14142b}.sm-value-label.svelte-17ut3u0.svelte-17ut3u0{width:24px;height:24px;display:flex;justify-content:center;align-items:center;background-color:#eff0f6;border-radius:5px;cursor:pointer}.sm-left.svelte-17ut3u0.svelte-17ut3u0{width:34px;height:100%;position:relative;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.sm-right.svelte-17ut3u0.svelte-17ut3u0{flex:1;height:100%;display:flex;justify-content:center;align-items:center}.sm-transfer.svelte-17ut3u0.svelte-17ut3u0{transform:rotate(180deg)}.sm-switch.sm-active.svelte-17ut3u0.svelte-17ut3u0{background:#d9dbe9}.sm-switch.svelte-17ut3u0.svelte-17ut3u0:hover{border-color:#0086cd}.sm-btn-a.svelte-17ut3u0.svelte-17ut3u0{visibility:hidden}.sm-switch.sm-active.svelte-17ut3u0 .sm-btn-a.svelte-17ut3u0{visibility:visible}",
        );
      }
      let sE = (e) => ({ active: 2048 & e[0] }),
        sC = (e) => ({ active: e[11] });
      function sb(e) {
        let t, n;
        return {
          c() {
            ((t = tR("div")), (n = tB("NEW")), this.h());
          },
          l(e) {
            var l = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(l, "NEW")), l.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-new-label svelte-17ut3u0");
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sT(e) {
        let t, n, l, o, i, r, s, a, c, d;
        function u(e, t) {
          return e[12] && e[11] && e[13] && !e[7] ? sO : sI;
        }
        n = new sx({
          props: {
            style: "opacity:" + (e[11] ? 1 : 0),
            color: e[14] && e[13] ? "#0086CD" : "#A0A3BD",
          },
        });
        let h = u(e),
          f = h(e);
        return (
          (s = new sx({
            props: {
              style: "opacity:" + (e[11] ? 1 : 0),
              color: e[14] && e[13] ? "#84BB4C" : "#A0A3BD",
            },
          })),
          {
            c() {
              ((t = tR("div")),
                n$(n.$$.fragment),
                (l = tP()),
                (o = tR("div")),
                f.c(),
                (i = tP()),
                (r = tR("div")),
                n$(s.$$.fragment),
                this.h());
            },
            l(e) {
              var a = tV((t = tY(e, "DIV", { class: !0 })));
              (nI(n.$$.fragment, a), a.forEach(tL), (l = tq(e)));
              var c = tV((o = tY(e, "DIV", { class: !0 })));
              (f.l(c), c.forEach(tL), (i = tq(e)));
              var d = tV((r = tY(e, "DIV", { class: !0 })));
              (nI(s.$$.fragment, d), d.forEach(tL), this.h());
            },
            h() {
              (tG(
                t,
                "class",
                "sm-btn-init-left sm-btn-icon sm-btn-a sm-transfer svelte-17ut3u0",
              ),
                tG(o, "class", "sm-value-init svelte-17ut3u0"),
                tG(
                  r,
                  "class",
                  "sm-btn-init-right sm-btn-icon sm-btn-a svelte-17ut3u0",
                ));
            },
            m(u, h) {
              (tk(u, t, h),
                nO(n, t, null),
                tk(u, l, h),
                tk(u, o, h),
                f.m(o, null),
                tk(u, i, h),
                tk(u, r, h),
                nO(s, r, null),
                (a = !0),
                c ||
                  ((d = [
                    tj(t, "mousedown", e[31]),
                    tj(t, "click", e[32]),
                    tj(t, "mouseleave", e[19]),
                    tj(t, "mouseup", e[19]),
                    tj(r, "mousedown", e[35]),
                    tj(r, "click", e[36]),
                    tj(r, "mouseleave", e[19]),
                    tj(r, "mouseup", e[19]),
                  ]),
                  (c = !0)));
            },
            p(e, t) {
              let l = {};
              (2048 & t[0] && (l.style = "opacity:" + (e[11] ? 1 : 0)),
                24576 & t[0] &&
                  (l.color = e[14] && e[13] ? "#0086CD" : "#A0A3BD"),
                n.$set(l),
                h === (h = u(e)) && f
                  ? f.p(e, t)
                  : (f.d(1), (f = h(e)) && (f.c(), f.m(o, null))));
              let i = {};
              (2048 & t[0] && (i.style = "opacity:" + (e[11] ? 1 : 0)),
                24576 & t[0] &&
                  (i.color = e[14] && e[13] ? "#84BB4C" : "#A0A3BD"),
                s.$set(i));
            },
            i(e) {
              a || (nx(n.$$.fragment, e), nx(s.$$.fragment, e), (a = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), ny(s.$$.fragment, e), (a = !1));
            },
            d(e) {
              (e && tL(t),
                nM(n),
                e && tL(l),
                e && tL(o),
                f.d(),
                e && tL(i),
                e && tL(r),
                nM(s),
                (c = !1),
                tr(d));
            },
          }
        );
      }
      function s$(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h;
        return (
          (l = new sx({ props: { color: "#A0A3BD" } })),
          (u = new sx({ props: { color: "#A0A3BD" } })),
          {
            c() {
              ((t = tR("div")),
                (n = tR("div")),
                n$(l.$$.fragment),
                (o = tP()),
                (i = tR("div")),
                (r = tB(e[1])),
                (s = tP()),
                (a = tB(e[4])),
                (c = tP()),
                (d = tR("div")),
                n$(u.$$.fragment),
                this.h());
            },
            l(h) {
              var f = tV((t = tY(h, "DIV", { class: !0 }))),
                m = tV((n = tY(f, "DIV", { class: !0, style: !0 })));
              (nI(l.$$.fragment, m), m.forEach(tL), (o = tq(f)));
              var p = tV((i = tY(f, "DIV", { class: !0, style: !0 })));
              ((r = tW(p, e[1])),
                (s = tq(p)),
                (a = tW(p, e[4])),
                p.forEach(tL),
                (c = tq(f)));
              var g = tV((d = tY(f, "DIV", { class: !0, style: !0 })));
              (nI(u.$$.fragment, g), g.forEach(tL), f.forEach(tL), this.h());
            },
            h() {
              (tG(n, "class", "sm-btn-init-left sm-transfer svelte-17ut3u0"),
                t1(n, "opacity", e[11] ? 1 : 0),
                tG(i, "class", "sm-value-init svelte-17ut3u0"),
                t1(i, "margin-left", "5px"),
                tG(d, "class", "sm-btn-init-right svelte-17ut3u0"),
                t1(d, "opacity", e[11] ? 1 : 0),
                tG(t, "class", "sm-init-view svelte-17ut3u0"));
            },
            m(e, f) {
              (tk(e, t, f),
                tD(t, n),
                nO(l, n, null),
                tD(t, o),
                tD(t, i),
                tD(i, r),
                tD(i, s),
                tD(i, a),
                tD(t, c),
                tD(t, d),
                nO(u, d, null),
                (h = !0));
            },
            p(e, t) {
              ((!h || 2048 & t[0]) && t1(n, "opacity", e[11] ? 1 : 0),
                (!h || 2 & t[0]) && tX(r, e[1]),
                (!h || 16 & t[0]) && tX(a, e[4]),
                (!h || 2048 & t[0]) && t1(d, "opacity", e[11] ? 1 : 0));
            },
            i(e) {
              h || (nx(l.$$.fragment, e), nx(u.$$.fragment, e), (h = !0));
            },
            o(e) {
              (ny(l.$$.fragment, e), ny(u.$$.fragment, e), (h = !1));
            },
            d(e) {
              (e && tL(t), nM(l), nM(u));
            },
          }
        );
      }
      function sI(e) {
        let t, n, l;
        return {
          c() {
            ((t = tR("div")), (n = tB(e[1])), (l = tB(e[4])), this.h());
          },
          l(o) {
            var i = tV((t = tY(o, "DIV", { class: !0 })));
            ((n = tW(i, e[1])), (l = tW(i, e[4])), i.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-value svelte-17ut3u0");
          },
          m(e, o) {
            (tk(e, t, o), tD(t, n), tD(t, l));
          },
          p(e, t) {
            (2 & t[0] && tX(n, e[1]), 16 & t[0] && tX(l, e[4]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sO(e) {
        let t, n, l, o, i;
        let r = e[6] && sM(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("input")),
              (l = tP()),
              r && r.c(),
              this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tY(o, "INPUT", {
              type: !0,
              inputmode: !0,
              class: !0,
              style: !0,
            })),
              (l = tq(o)),
              r && r.l(o),
              o.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "type", "text"),
              tG(n, "inputmode", "numeric"),
              tG(n, "class", "sm-value-input svelte-17ut3u0"),
              t1(n, "width", e[6] ? "38px" : "62px"),
              tG(t, "class", "sm-value svelte-17ut3u0"));
          },
          m(s, a) {
            (tk(s, t, a),
              tD(t, n),
              t_(n, e[1]),
              tD(t, l),
              r && r.m(t, null),
              o ||
                ((i = [
                  tj(n, "wheel", e[22]),
                  tj(n, "input", e[33]),
                  tj(n, "keyup", e[23]),
                  tj(n, "input", e[21]),
                ]),
                (o = !0)));
          },
          p(e, l) {
            (64 & l[0] && t1(n, "width", e[6] ? "38px" : "62px"),
              2 & l[0] && n.value !== e[1] && t_(n, e[1]),
              e[6]
                ? r
                  ? r.p(e, l)
                  : ((r = sM(e)).c(), r.m(t, null))
                : r && (r.d(1), (r = null)));
          },
          d(e) {
            (e && tL(t), r && r.d(), (o = !1), tr(i));
          },
        };
      }
      function sM(e) {
        let t, n, l, o;
        let i = (0 === parseFloat(e[1]) ? "-" : e[4]) + "";
        return {
          c() {
            ((t = tR("div")), (n = tB(i)), this.h());
          },
          l(e) {
            var l = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(l, i)), l.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-value-label svelte-17ut3u0");
          },
          m(i, r) {
            (tk(i, t, r),
              tD(t, n),
              l || ((o = tj(t, "click", e[34])), (l = !0)));
          },
          p(e, t) {
            18 & t[0] &&
              i !== (i = (0 === parseFloat(e[1]) ? "-" : e[4]) + "") &&
              tX(n, i);
          },
          d(e) {
            (e && tL(t), (l = !1), o());
          },
        };
      }
      function sD(e) {
        let t, n, l, o, i, r, s, a, c, d;
        let u = e[27].default,
          h = th(u, e, e[26], sC),
          f = e[10] && e[8] && sb(),
          m = [s$, sT],
          p = [];
        return (
          (s = p[(r = e[14] ? 1 : 0)] = m[r](e)),
          {
            c() {
              ((t = tR("div")),
                (n = tR("div")),
                h && h.c(),
                (l = tP()),
                f && f.c(),
                (o = tP()),
                (i = tR("div")),
                s.c(),
                this.h());
            },
            l(e) {
              var r = tV(
                  (t = tY(e, "DIV", { class: !0, style: !0, title: !0 })),
                ),
                a = tV((n = tY(r, "DIV", { class: !0 })));
              (h && h.l(a),
                (l = tq(a)),
                f && f.l(a),
                a.forEach(tL),
                (o = tq(r)));
              var c = tV((i = tY(r, "DIV", { class: !0 })));
              (s.l(c), c.forEach(tL), r.forEach(tL), this.h());
            },
            h() {
              (tG(n, "class", "sm-left svelte-17ut3u0"),
                tG(i, "class", "sm-right svelte-17ut3u0"),
                tG(t, "class", "sm-switch svelte-17ut3u0"),
                tG(t, "style", e[3]),
                tG(t, "title", e[5]),
                t0(t, "sm-active", e[11]));
            },
            m(s, u) {
              (tk(s, t, u),
                tD(t, n),
                h && h.m(n, null),
                tD(n, l),
                f && f.m(n, null),
                tD(t, o),
                tD(t, i),
                p[r].m(i, null),
                (a = !0),
                c ||
                  ((d = [
                    tj(n, "click", e[17]),
                    tj(i, "click", e[37]),
                    tj(t, "touchstart", tH(e[28])),
                    tj(t, "touchend", tH(e[29])),
                    tj(t, "mousedown", tH(e[30])),
                  ]),
                  (c = !0)));
            },
            p(e, l) {
              (h &&
                h.p &&
                (!a || 67110912 & l[0]) &&
                tp(h, u, e, e[26], a ? tm(u, e[26], l, sE) : tg(e[26]), sC),
                e[10] && e[8]
                  ? f || ((f = sb()).c(), f.m(n, null))
                  : f && (f.d(1), (f = null)));
              let o = r;
              ((r = e[14] ? 1 : 0) === o
                ? p[r].p(e, l)
                : (nA(),
                  ny(p[o], 1, 1, () => {
                    p[o] = null;
                  }),
                  nw(),
                  (s = p[r]) ? s.p(e, l) : (s = p[r] = m[r](e)).c(),
                  nx(s, 1),
                  s.m(i, null)),
                (!a || 8 & l[0]) && tG(t, "style", e[3]),
                (!a || 32 & l[0]) && tG(t, "title", e[5]),
                (!a || 2048 & l[0]) && t0(t, "sm-active", e[11]));
            },
            i(e) {
              a || (nx(h, e), nx(s), (a = !0));
            },
            o(e) {
              (ny(h, e), ny(s), (a = !1));
            },
            d(e) {
              (e && tL(t), h && h.d(e), f && f.d(), p[r].d(), (c = !1), tr(d));
            },
          }
        );
      }
      function sk(e, t, n) {
        let l, o, i, r, s, a;
        let { $$slots: c = {}, $$scope: d } = t,
          u = nn(),
          h = o8();
        tu(e, h, (e) => n(25, (s = e)));
        let { name: f = NaN } = t,
          { activeName: m = -1 } = t,
          { style: p = "" } = t,
          { value: g = "" } = t,
          { symbol: v = "" } = t,
          { title: A = "" } = t,
          { directionVisible: w = !0 } = t,
          { cancelable: x = !1 } = t,
          { disabled: y = !1 } = t,
          { newVisable: E = !1 } = t,
          C = !0,
          b = !1,
          T = ""
            .concat(s._user.account, "::3d::new-feature-label::")
            .concat(f, "::read"),
          $ = !localStorage.getItem(T),
          I = (e) => {
            a = setInterval(() => {
              (u("change", e), n(9, (C = !1)));
            }, 100);
          },
          O = () => {
            E && (n(10, ($ = !1)), localStorage.setItem(T, "1"));
          },
          M = (e) => {
            b &&
              (e.stopPropagation(),
              u("keyPressEnter", parseFloat(g)),
              (b = !1));
          };
        return (
          ne(() => {
            document.addEventListener("mousedown", M, !0);
          }),
          nt(() => {
            document.removeEventListener("mousedown", M, !0);
          }),
          (e.$$set = (e) => {
            ("name" in e && n(2, (f = e.name)),
              "activeName" in e && n(0, (m = e.activeName)),
              "style" in e && n(3, (p = e.style)),
              "value" in e && n(1, (g = e.value)),
              "symbol" in e && n(4, (v = e.symbol)),
              "title" in e && n(5, (A = e.title)),
              "directionVisible" in e && n(6, (w = e.directionVisible)),
              "cancelable" in e && n(24, (x = e.cancelable)),
              "disabled" in e && n(7, (y = e.disabled)),
              "newVisable" in e && n(8, (E = e.newVisable)),
              "$$scope" in e && n(26, (d = e.$$scope)));
          }),
          (e.$$.update = () => {
            (5 & e.$$.dirty[0] && n(11, (l = f === m)),
              33554432 & e.$$.dirty[0] &&
                n(14, (o = -1 !== s.selectedFdi && -2 !== s.selectedFdi)),
              33554432 & e.$$.dirty[0] && n(13, (i = s.mdf.isMovable)),
              33554432 & e.$$.dirty[0] &&
                n(12, (r = s._configuration.toothModifyToolInput)));
          }),
          [
            m,
            g,
            f,
            p,
            v,
            A,
            w,
            y,
            E,
            C,
            $,
            l,
            r,
            i,
            o,
            u,
            h,
            () => {
              (O(), l ? x && n(0, (m = -1)) : n(0, (m = f)));
            },
            I,
            () => {
              a &&
                (clearInterval(a),
                setTimeout(() => {
                  n(9, (C = !0));
                }),
                (a = null));
            },
            O,
            (e) => {
              let t = e.target.value;
              (/^[\+\-]?\d+(\.\d+)?$/.test(t)
                ? parseFloat(t) >= 99.9
                  ? n(1, (g = "99.9"))
                  : -99.9 >= parseFloat(t)
                    ? n(1, (g = "-99.9"))
                    : n(1, (g = t))
                : n(1, (g = t.replace(/[^0-9.\-]+/g, ""))),
                (b = !0));
            },
            (e) => {
              (e.preventDefault(),
                e.deltaY < 0 ? u("change", !0) : u("change", !1));
            },
            (e) => {
              ("ArrowUp" === e.key && u("change", !0),
                "ArrowDown" === e.key && u("change", !1),
                "Enter" === e.key &&
                  (u("keyPressEnter", parseFloat(g)), (b = !1)));
            },
            x,
            s,
            d,
            c,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            (e) => {
              0 == (e || window.event).button && I(!1);
            },
            () => {
              C && u("change", !1);
            },
            function () {
              n(1, (g = this.value));
            },
            (e) => {
              (e.stopPropagation(), u("direction", -parseFloat(g)));
            },
            (e) => {
              0 == (e || window.event).button && I(!0);
            },
            () => {
              C && u("change", !0);
            },
            () => {
              (n(0, (m = f)), O());
            },
          ]
        );
      }
      class sL extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              sk,
              sD,
              ta,
              {
                name: 2,
                activeName: 0,
                style: 3,
                value: 1,
                symbol: 4,
                title: 5,
                directionVisible: 6,
                cancelable: 24,
                disabled: 7,
                newVisable: 8,
              },
              sy,
              [-1, -1],
            ));
        }
      }
      function sN(e) {
        tI(
          e,
          "svelte-lhw57x",
          ".border.svelte-lhw57x.svelte-lhw57x{width:100%;height:1px}.sm-patent-switch.svelte-lhw57x.svelte-lhw57x{height:68px;user-select:none;border-radius:8px;overflow:hidden;margin-bottom:10px;border:1px solid #d9dbe9}.sm-flex.svelte-lhw57x.svelte-lhw57x{display:flex;align-items:center;width:100%;height:100%}.sm-flex-left.svelte-lhw57x.svelte-lhw57x{flex:1;height:100%;display:flex;align-items:center;flex-direction:column}.sm-flex-right.svelte-lhw57x.svelte-lhw57x{height:100%;width:50px;display:flex;align-items:center;justify-content:center;color:#666;font-size:12px;border-left-width:1px;border-left-style:solid;border-left-color:#d9dbe9}.sm-patent-switch.sm-active.svelte-lhw57x.svelte-lhw57x{background:#d9dbe9}.sm-patent-switch.svelte-lhw57x.svelte-lhw57x:hover{border-color:#0086cd}.sm-patent-switch.sm-active.svelte-lhw57x:hover .sm-patent-btn.svelte-lhw57x{cursor:pointer}.sm-patent-btn.svelte-lhw57x.svelte-lhw57x{font-weight:bold;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;flex:1;width:100%;color:#4e4b66}",
        );
      }
      function sR(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p, g;
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              (o = tR("div")),
              (i = tB(e[2])),
              (r = tP()),
              (s = tR("div")),
              (a = tP()),
              (c = tR("div")),
              (d = tB(e[3])),
              (u = tP()),
              (h = tR("div")),
              (f = tB(e[6])),
              (m = tB(e[5])),
              this.h());
          },
          l(p) {
            var g = tV((t = tY(p, "DIV", { class: !0, style: !0, title: !0 }))),
              v = tV((n = tY(g, "DIV", { class: !0 }))),
              A = tV((l = tY(v, "DIV", { class: !0 }))),
              w = tV((o = tY(A, "DIV", { class: !0, style: !0 })));
            ((i = tW(w, e[2])),
              w.forEach(tL),
              (r = tq(A)),
              tV((s = tY(A, "DIV", { style: !0, class: !0 }))).forEach(tL),
              (a = tq(A)));
            var x = tV((c = tY(A, "DIV", { class: !0, style: !0 })));
            ((d = tW(x, e[3])), x.forEach(tL), A.forEach(tL), (u = tq(v)));
            var y = tV((h = tY(v, "DIV", { class: !0, style: !0 })));
            ((f = tW(y, e[6])),
              (m = tW(y, e[5])),
              y.forEach(tL),
              v.forEach(tL),
              g.forEach(tL),
              this.h());
          },
          h() {
            (tG(o, "class", "sm-patent-btn svelte-lhw57x"),
              t1(o, "color", e[9] && e[11] && e[10] ? "#0086CD" : "#4E4B66"),
              t1(s, "background", e[9] ? "#EFF0F7" : "#D9DBE9"),
              tG(s, "class", "border svelte-lhw57x"),
              tG(c, "class", "sm-patent-btn svelte-lhw57x"),
              t1(c, "color", e[9] && e[11] && e[10] ? "#0086CD" : "#4E4B66"),
              tG(l, "class", "sm-flex-left svelte-lhw57x"),
              tG(h, "class", "sm-flex-right svelte-lhw57x"),
              t1(h, "border-color", e[9] ? "#EFF0F7" : "#D9DBE9"),
              tG(n, "class", "sm-flex svelte-lhw57x"),
              tG(t, "class", "sm-patent-switch svelte-lhw57x"),
              tG(t, "style", e[4]),
              tG(t, "title", e[7]),
              t0(t, "sm-active", e[9]));
          },
          m(v, A) {
            (tk(v, t, A),
              tD(t, n),
              tD(n, l),
              tD(l, o),
              tD(o, i),
              tD(l, r),
              tD(l, s),
              tD(l, a),
              tD(l, c),
              tD(c, d),
              tD(n, u),
              tD(n, h),
              tD(h, f),
              tD(h, m),
              p ||
                ((g = [
                  tj(o, "mousedown", e[20]),
                  tj(o, "mouseleave", e[15]),
                  tj(o, "click", e[21]),
                  tj(o, "mouseup", e[15]),
                  tj(c, "mousedown", e[22]),
                  tj(c, "click", e[23]),
                  tj(c, "mouseleave", e[15]),
                  tj(c, "mouseup", e[15]),
                  tj(n, "click", e[24]),
                  tj(t, "mousedown", tH(e[17])),
                  tj(t, "touchstart", tH(e[18])),
                  tj(t, "touchend", tH(e[19])),
                ]),
                (p = !0)));
          },
          p(e, n) {
            let [l] = n;
            (4 & l && tX(i, e[2]),
              3584 & l &&
                t1(o, "color", e[9] && e[11] && e[10] ? "#0086CD" : "#4E4B66"),
              512 & l && t1(s, "background", e[9] ? "#EFF0F7" : "#D9DBE9"),
              8 & l && tX(d, e[3]),
              3584 & l &&
                t1(c, "color", e[9] && e[11] && e[10] ? "#0086CD" : "#4E4B66"),
              64 & l && tX(f, e[6]),
              32 & l && tX(m, e[5]),
              512 & l && t1(h, "border-color", e[9] ? "#EFF0F7" : "#D9DBE9"),
              16 & l && tG(t, "style", e[4]),
              128 & l && tG(t, "title", e[7]),
              512 & l && t0(t, "sm-active", e[9]));
          },
          i: tn,
          o: tn,
          d(e) {
            (e && tL(t), (p = !1), tr(g));
          },
        };
      }
      function sS(e, t, n) {
        let l, o, i, r, s;
        let a = nn(),
          c = o8();
        tu(e, c, (e) => n(16, (r = e)));
        let { name: d = NaN } = t,
          { upText: u = "" } = t,
          { downText: h = "" } = t,
          { activeName: f = -1 } = t,
          { style: m = "" } = t,
          { symbol: p = "" } = t,
          { value: g = "" } = t,
          { title: v = "" } = t,
          A = !0,
          w = (e) => {
            if (!l) return !1;
            s = setInterval(() => {
              (a("change", e), n(8, (A = !1)));
            }, 100);
          };
        return (
          (e.$$set = (e) => {
            ("name" in e && n(1, (d = e.name)),
              "upText" in e && n(2, (u = e.upText)),
              "downText" in e && n(3, (h = e.downText)),
              "activeName" in e && n(0, (f = e.activeName)),
              "style" in e && n(4, (m = e.style)),
              "symbol" in e && n(5, (p = e.symbol)),
              "value" in e && n(6, (g = e.value)),
              "title" in e && n(7, (v = e.title)));
          }),
          (e.$$.update = () => {
            (3 & e.$$.dirty && n(9, (l = d === f)),
              65536 & e.$$.dirty &&
                n(11, (o = -1 !== r.selectedFdi && -2 !== r.selectedFdi)),
              65536 & e.$$.dirty && n(10, (i = r.mdf.isMovable)));
          }),
          [
            f,
            d,
            u,
            h,
            m,
            p,
            g,
            v,
            A,
            l,
            i,
            o,
            a,
            c,
            w,
            () => {
              s &&
                (clearInterval(s),
                setTimeout(() => {
                  n(8, (A = !0));
                }),
                (s = null));
            },
            r,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            (e) => {
              0 == (e || window.event).button && w(!1);
            },
            () => {
              l && A && a("change", !1);
            },
            (e) => {
              0 == (e || window.event).button && w(!0);
            },
            () => {
              l && A && a("change", !0);
            },
            () => {
              n(0, (f = d));
            },
          ]
        );
      }
      class sB extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              sS,
              sR,
              ta,
              {
                name: 1,
                upText: 2,
                downText: 3,
                activeName: 0,
                style: 4,
                symbol: 5,
                value: 6,
                title: 7,
              },
              sN,
            ));
        }
      }
      function sP(e) {
        tI(
          e,
          "svelte-iybmuq",
          ".tooth-tab.svelte-iybmuq{display:flex;height:24px;font-size:12px;color:#4e4b66;cursor:pointer}.tooth-tab-checked.svelte-iybmuq{background-color:#d9dbe9;color:#14142b;border:none}.tooth-tab-final.svelte-iybmuq{padding:3px 8px;margin-right:2px;border-radius:10px;line-height:normal;border:1px solid #d9dbe9}.tooth-tab-comparison.svelte-iybmuq{flex:1;padding:3px 8px;border-radius:10px;line-height:normal;border:1px solid #d9dbe9;text-align:center}",
        );
      }
      function sU(e) {
        let t, n, l, o, i, r, s, a;
        let c = e[1].t("mdf.tooth.total") + "",
          d = e[1].t("mdf.tooth.modifyamount") + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tB(c)),
              (o = tP()),
              (i = tR("div")),
              (r = tB(d)),
              this.h());
          },
          l(e) {
            var s = tV((t = tY(e, "DIV", { class: !0 }))),
              a = tV((n = tY(s, "DIV", { class: !0 })));
            ((l = tW(a, c)), a.forEach(tL), (o = tq(s)));
            var u = tV((i = tY(s, "DIV", { class: !0 })));
            ((r = tW(u, d)), u.forEach(tL), s.forEach(tL), this.h());
          },
          h() {
            (tG(n, "class", "tooth-tab-final svelte-iybmuq"),
              t0(n, "tooth-tab-checked", e[0] == e_.TOTAL),
              tG(i, "class", "tooth-tab-comparison svelte-iybmuq"),
              t0(i, "tooth-tab-checked", e[0] === e_.MOVE),
              tG(t, "class", "tooth-tab svelte-iybmuq"));
          },
          m(c, d) {
            (tk(c, t, d),
              tD(t, n),
              tD(n, l),
              tD(t, o),
              tD(t, i),
              tD(i, r),
              s ||
                ((a = [
                  tj(n, "click", e[8]),
                  tj(i, "click", e[9]),
                  tj(t, "mousedown", tH(e[5])),
                  tj(t, "touchstart", tH(e[6])),
                  tj(t, "touchend", tH(e[7])),
                ]),
                (s = !0)));
          },
          p(e, t) {
            let [o] = t;
            (2 & o && c !== (c = e[1].t("mdf.tooth.total") + "") && tX(l, c),
              1 & o && t0(n, "tooth-tab-checked", e[0] == e_.TOTAL),
              2 & o &&
                d !== (d = e[1].t("mdf.tooth.modifyamount") + "") &&
                tX(r, d),
              1 & o && t0(i, "tooth-tab-checked", e[0] === e_.MOVE));
          },
          i: tn,
          o: tn,
          d(e) {
            (e && tL(t), (s = !1), tr(a));
          },
        };
      }
      function sj(e, t, n) {
        let l, o, i;
        let r = o8();
        tu(e, r, (e) => n(4, (i = e)));
        let s = "".concat(
          i._user.account,
          "::3d::new-feature-label::toothTabType",
        );
        return (
          (e.$$.update = () => {
            (16 & e.$$.dirty && n(1, (l = l0(i.language))),
              16 & e.$$.dirty &&
                n(
                  0,
                  (o = localStorage.getItem(s)
                    ? Number(localStorage.getItem(s))
                    : i.mdf.toothTabType),
                ),
              1 & e.$$.dirty && r.updateMdf({ toothTabType: o }));
          }),
          [
            o,
            l,
            r,
            s,
            i,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => {
              if (o == e_.TOTAL) return !1;
              (r.updateMdf({ toothTabType: e_.TOTAL }),
                localStorage.setItem(s, e_.TOTAL.toString()));
            },
            () => {
              if (o == e_.MOVE) return !1;
              (r.updateMdf({ toothTabType: e_.MOVE }),
                localStorage.setItem(s, e_.MOVE.toString()));
            },
          ]
        );
      }
      class sz extends nk {
        constructor(e) {
          (super(), nD(this, e, sj, sU, ta, {}, sP));
        }
      }
      function sH(e) {
        tI(
          e,
          "svelte-1hnacio",
          ".sm-switch.svelte-1hnacio{height:34px;display:flex;flex-flow:row nowrap;align-items:center;user-select:none;border-radius:8px;border:1px solid transparent}.sm-left.svelte-1hnacio{height:100%;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.sm-right.svelte-1hnacio{flex:1;height:100%;display:flex;padding-left:18px;align-items:center;font-size:12px;color:#4d4e50}.sm-switch.sm-active.svelte-1hnacio{background:#d9dbe9}.sm-switch.svelte-1hnacio:hover{border-color:#0086cd}",
        );
      }
      let sG = (e) => ({ active: 32 & e }),
        sV = (e) => ({ active: e[5] });
      function sZ(e) {
        let t, n, l, o, i, r, s, a;
        let c = e[9].default,
          d = th(c, e, e[8], sV);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              d && d.c(),
              (l = tP()),
              (o = tR("div")),
              (i = tB(e[2])),
              this.h());
          },
          l(r) {
            var s = tV((t = tY(r, "DIV", { class: !0, style: !0, title: !0 }))),
              a = tV((n = tY(s, "DIV", { class: !0 })));
            (d && d.l(a), a.forEach(tL), (l = tq(s)));
            var c = tV((o = tY(s, "DIV", { class: !0 })));
            ((i = tW(c, e[2])), c.forEach(tL), s.forEach(tL), this.h());
          },
          h() {
            (tG(n, "class", "sm-left svelte-1hnacio"),
              tG(o, "class", "sm-right svelte-1hnacio"),
              tG(t, "class", "sm-switch svelte-1hnacio"),
              tG(t, "style", e[3]),
              tG(t, "title", e[4]),
              t0(t, "sm-active", e[5]));
          },
          m(c, u) {
            (tk(c, t, u),
              tD(t, n),
              d && d.m(n, null),
              tD(t, l),
              tD(t, o),
              tD(o, i),
              (r = !0),
              s ||
                ((a = [
                  tj(n, "click", e[6]),
                  tj(o, "click", e[13]),
                  tj(t, "mousedown", tH(e[10])),
                  tj(t, "touchstart", tH(e[11])),
                  tj(t, "touchend", tH(e[12])),
                ]),
                (s = !0)));
          },
          p(e, n) {
            let [l] = n;
            (d &&
              d.p &&
              (!r || 288 & l) &&
              tp(d, c, e, e[8], r ? tm(c, e[8], l, sG) : tg(e[8]), sV),
              (!r || 4 & l) && tX(i, e[2]),
              (!r || 8 & l) && tG(t, "style", e[3]),
              (!r || 16 & l) && tG(t, "title", e[4]),
              (!r || 32 & l) && t0(t, "sm-active", e[5]));
          },
          i(e) {
            r || (nx(d, e), (r = !0));
          },
          o(e) {
            (ny(d, e), (r = !1));
          },
          d(e) {
            (e && tL(t), d && d.d(e), (s = !1), tr(a));
          },
        };
      }
      function sF(e, t, n) {
        let l;
        let { $$slots: o = {}, $$scope: i } = t,
          { name: r = NaN } = t,
          { text: s = "" } = t,
          { activeName: a = -1 } = t,
          { style: c = "" } = t,
          { title: d = "" } = t,
          { cancelable: u = !1 } = t;
        return (
          (e.$$set = (e) => {
            ("name" in e && n(1, (r = e.name)),
              "text" in e && n(2, (s = e.text)),
              "activeName" in e && n(0, (a = e.activeName)),
              "style" in e && n(3, (c = e.style)),
              "title" in e && n(4, (d = e.title)),
              "cancelable" in e && n(7, (u = e.cancelable)),
              "$$scope" in e && n(8, (i = e.$$scope)));
          }),
          (e.$$.update = () => {
            3 & e.$$.dirty && n(5, (l = r === a));
          }),
          [
            a,
            r,
            s,
            c,
            d,
            l,
            () => {
              l ? u && n(0, (a = -1)) : n(0, (a = r));
            },
            u,
            i,
            o,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => n(0, (a = r)),
          ]
        );
      }
      class sJ extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              sF,
              sZ,
              ta,
              {
                name: 1,
                text: 2,
                activeName: 0,
                style: 3,
                title: 4,
                cancelable: 7,
              },
              sH,
            ));
        }
      }
      function sY(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M19.32 8.65685H16.7909V21.5532H19.32L15.6569 25.21L12 21.5532H14.5229V8.65685H12L15.6569 5L19.32 8.65685Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sK(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [sY] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function sW(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class sq extends nk {
        constructor(e) {
          (super(),
            nD(this, e, sW, sK, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function sQ(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M22.88 13.3733L20.896 11.3893L11.472 20.896L13.3733 22.88H8V17.5067L9.984 19.4907L19.408 9.984L17.5067 8H22.88V13.3733Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function sX(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [sQ] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function s_(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class s1 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, s_, sX, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function s0(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M7.6477 15.6044V18.4314L4 14.7157L7.6477 11V13.8245H22.6023V11L26.25 14.7157L22.6023 18.4314V15.6044H7.6477Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function s2(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [s0] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function s3(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class s4 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, s3, s2, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function s7(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M9.34197 11.2714L9.72129 12.8366L11.5535 9.83222L8.54913 8L8.93297 9.58382C7.88702 9.94138 6.97241 10.4072 6.2891 10.9763C5.55299 11.5893 5 12.4004 5 13.3771C5 14.1944 5.39229 14.8995 5.94888 15.4609C6.50198 16.0188 7.25892 16.4816 8.1249 16.8517C8.72701 17.1089 9.40123 17.3297 10.1305 17.5082C10.0123 17.7212 10.0503 17.9951 10.2375 18.1673L11.2617 19.109C11.4813 19.3109 11.8229 19.2965 12.0248 19.077C12.2266 18.8574 12.2123 18.5158 11.9927 18.314L11.397 17.7662C12.4373 17.9382 13.5575 18.0307 14.7178 18.0307C15.8746 18.0307 16.991 17.9382 18.028 17.7665L17.4298 18.3127C17.2096 18.5138 17.194 18.8554 17.3951 19.0756C17.5962 19.2958 17.9378 19.3114 18.158 19.1103L19.1894 18.1685C19.378 17.9963 19.4164 17.7211 19.2973 17.5073C20.029 17.3278 20.7052 17.1057 21.3088 16.847C22.174 16.4762 22.9298 16.0131 23.482 15.4561C24.0373 14.8959 24.43 14.1923 24.43 13.3771C24.43 12.4004 23.877 11.5891 23.1405 10.9766C22.457 10.4082 21.5424 9.94378 20.4964 9.58869L20.8798 8.00663L17.8754 9.83885L19.7077 12.8432L20.0875 11.2759C20.9315 11.5763 21.5885 11.9334 22.0355 12.3052C22.5494 12.7325 22.702 13.102 22.702 13.3771C22.702 13.6032 22.5975 13.8939 22.2548 14.2395C21.9091 14.5883 21.3661 14.9424 20.6281 15.2587C19.1553 15.8899 17.064 16.3027 14.7178 16.3027C12.371 16.3027 10.278 15.8925 8.80389 15.2626C8.06526 14.947 7.522 14.5933 7.17606 14.2443C6.83361 13.8989 6.72801 13.6068 6.72801 13.3771C6.72801 13.102 6.88059 12.7324 7.3949 12.3041C7.84192 11.9319 8.49856 11.5738 9.34197 11.2714ZM16.0954 20.9937C16.3156 20.7926 16.3311 20.451 16.13 20.2308C15.9289 20.0106 15.5874 19.995 15.3671 20.1961L14.7012 20.8042L14.0412 20.1974C13.8216 19.9955 13.48 20.0099 13.2782 20.2294C13.0763 20.449 13.0907 20.7906 13.3102 20.9924L14.3344 21.9341C14.5405 22.1236 14.8573 22.1242 15.064 21.9354L16.0954 20.9937Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function s6(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [s7] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function s5(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class s8 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, s5, s6, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function s9(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M9.50642 9L9.91281 10.399C7.6765 11.3317 6 13.1308 6 15.3554C6 17.5782 7.66943 19.3818 9.90895 20.3243L9.50642 21.71L12.1767 20.2418L10.8526 17.8334C10.8572 17.7606 10.8421 17.6857 10.8049 17.6168C10.6992 17.4212 10.455 17.3482 10.2593 17.4539L9.32531 17.9585C9.20135 18.0255 9.12666 18.1481 9.11546 18.2787C8.01607 17.4754 7.40911 16.4248 7.40911 15.3554C7.40911 14.2855 8.01938 13.2363 9.12072 12.4374C9.10632 12.5939 9.1848 12.7511 9.33211 12.8297L10.2657 13.3281C10.4619 13.4328 10.7058 13.3587 10.8105 13.1626C10.8578 13.0739 10.8686 12.9755 10.8481 12.8846L12.1767 10.4682L9.50642 9ZM10.5412 12.5624L10.3088 11.7622C10.0774 11.8642 9.8585 11.9751 9.65247 12.0937C9.67243 12.1006 9.69211 12.1091 9.71132 12.1194L10.5412 12.5624ZM9.71426 18.6636C9.90097 18.7691 10.098 18.8683 10.3051 18.9605L10.5174 18.2297L9.71426 18.6636ZM19.9158 10.3974L20.3217 9L17.6514 10.4682L19.1196 13.1385L19.5196 11.7611C19.7514 11.8644 19.9707 11.9764 20.1771 12.0962L19.5996 12.4081C19.404 12.5138 19.3311 12.7581 19.4368 12.9537C19.5424 13.1493 19.7867 13.2222 19.9823 13.1166L20.9164 12.612C20.9191 12.6105 20.9218 12.609 20.9245 12.6074C21.8895 13.3863 22.4209 14.3669 22.4209 15.3653C22.4209 16.3593 21.8965 17.3369 20.9398 18.115C20.9317 18.1099 20.9233 18.105 20.9147 18.1004L19.9811 17.602C19.785 17.4973 19.5411 17.5714 19.4364 17.7676C19.3316 17.9637 19.4058 18.2076 19.6019 18.3123L20.1941 18.6285C19.9846 18.7507 19.7617 18.8649 19.5258 18.97L19.1196 17.5715L17.6514 20.2418L20.3217 21.71L19.9219 20.3338C22.161 19.3912 23.83 17.5878 23.83 15.3653C23.83 13.1381 22.1496 11.3378 19.9158 10.3974ZM18.1143 14.1257C18.3099 14.02 18.3828 13.7758 18.2771 13.5801C18.1715 13.3845 17.9272 13.3116 17.7316 13.4173L15.8635 14.4264C15.6679 14.5321 15.595 14.7764 15.7006 14.972C15.8063 15.1676 16.0506 15.2406 16.2462 15.1349L18.1143 14.1257ZM12.5122 13.6146C12.316 13.5099 12.0721 13.584 11.9674 13.7802C11.8627 13.9763 11.9368 14.2202 12.133 14.325L14.0002 15.3218C14.1964 15.4265 14.4402 15.3524 14.545 15.1563C14.6497 14.9601 14.5756 14.7162 14.3794 14.6115L12.5122 13.6146ZM14.3782 16.144C14.5738 16.0384 14.6467 15.7941 14.541 15.5985C14.4353 15.4028 14.1911 15.3299 13.9955 15.4356L12.1274 16.4448C11.9318 16.5504 11.8588 16.7947 11.9645 16.9903C12.0702 17.186 12.3145 17.2589 12.5101 17.1532L14.3782 16.144ZM16.2466 15.6083C16.0505 15.5036 15.8066 15.5777 15.7019 15.7739C15.5972 15.97 15.6713 16.2139 15.8674 16.3186L17.7347 17.3155C17.9308 17.4202 18.1747 17.3461 18.2794 17.1499C18.3842 16.9538 18.31 16.7099 18.1139 16.6052L16.2466 15.6083Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ae(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [s9] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function at(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class an extends nk {
        constructor(e) {
          (super(),
            nD(this, e, at, ae, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function al(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M7.54176 7.00002C7.7566 7.00221 7.92899 7.17815 7.92679 7.39298L7.9175 8.30498C7.91531 8.51982 7.73937 8.6922 7.52453 8.69001C7.30969 8.68782 7.13731 8.51189 7.1395 8.29705L7.1488 7.38505C7.15099 7.17022 7.32693 6.99783 7.54176 7.00002ZM7.51387 9.73601C7.7287 9.7382 7.90109 9.91414 7.8989 10.129L7.8803 11.953C7.87811 12.1678 7.70217 12.3402 7.48734 12.338C7.2725 12.3358 7.10012 12.1599 7.10231 11.945L7.1209 10.121C7.12309 9.90621 7.29903 9.73382 7.51387 9.73601ZM7.47667 13.384C7.69151 13.3862 7.86389 13.5621 7.8617 13.777L7.84311 15.601C7.84092 15.8158 7.66498 15.9882 7.45014 15.986C7.23531 15.9838 7.06292 15.8079 7.06511 15.593L7.08371 13.769C7.0859 13.5542 7.26183 13.3818 7.47667 13.384ZM7.43948 17.032C7.65432 17.0342 7.8267 17.2101 7.82451 17.425L7.80591 19.249C7.80372 19.4638 7.62779 19.6362 7.41295 19.634C7.19811 19.6318 7.02573 19.4559 7.02792 19.241L7.04651 17.417C7.0487 17.2022 7.22464 17.0298 7.43948 17.032ZM7.40228 20.68C7.61712 20.6822 7.78951 20.8581 7.78732 21.0729L7.77802 21.9849C7.77583 22.1998 7.59989 22.3722 7.38505 22.37C7.17021 22.3678 6.99783 22.1919 7.00002 21.977L7.00932 21.065C7.01151 20.8502 7.18745 20.6778 7.40228 20.68ZM12.041 9.36208C11.0862 9.36208 10.1561 9.41866 9.26834 9.52578V11.4662C10.1396 11.3505 11.0707 11.2872 12.041 11.2872C14.6555 11.2872 16.9872 11.7441 18.6294 12.4458C19.4522 12.7975 20.0574 13.1915 20.4428 13.5803C20.8243 13.9651 20.942 14.2906 20.942 14.5464C20.942 14.8529 20.772 15.2646 20.199 15.7418C19.701 16.1565 18.9695 16.5553 18.0299 16.8922L17.6073 15.1485L15.5662 18.4956L18.9132 20.5367L18.4856 18.7723C19.6508 18.374 20.6697 17.855 21.4309 17.2211C22.251 16.5382 22.867 15.6345 22.867 14.5464C22.867 13.6359 22.43 12.8504 21.8099 12.225C21.1938 11.6034 20.3505 11.0879 19.3858 10.6756C18.715 10.389 17.9639 10.1431 17.1515 9.94423L15.7405 9.65674C14.5816 9.46513 13.3336 9.36208 12.041 9.36208Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ao(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [al] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ai(e, t, n) {
        let { color: l = "#4E4B66" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class ar extends nk {
        constructor(e) {
          (super(),
            nD(this, e, ai, ao, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function as(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M22.5071 7.00002C22.7239 7.00223 22.8979 7.17977 22.8957 7.39656L22.8863 8.31687C22.8841 8.53366 22.7065 8.70762 22.4897 8.70541C22.2729 8.7032 22.099 8.52566 22.1012 8.30886L22.1106 7.38856C22.1128 7.17177 22.2903 6.99781 22.5071 7.00002ZM22.479 9.76093C22.6958 9.76315 22.8697 9.94068 22.8675 10.1575L22.8487 11.9981C22.8465 12.2149 22.669 12.3888 22.4522 12.3866C22.2354 12.3844 22.0615 12.2069 22.0637 11.9901L22.0824 10.1495C22.0846 9.93268 22.2622 9.75872 22.479 9.76093ZM22.4414 13.4422C22.6582 13.4444 22.8322 13.6219 22.83 13.8387L22.8112 15.6793C22.809 15.8961 22.6315 16.0701 22.4147 16.0678C22.1979 16.0656 22.0239 15.8881 22.0261 15.6713L22.0449 13.8307C22.0471 13.6139 22.2246 13.4399 22.4414 13.4422ZM22.4039 17.1234C22.6207 17.1256 22.7947 17.3031 22.7924 17.5199L22.7737 19.3605C22.7715 19.5773 22.5939 19.7513 22.3771 19.7491C22.1603 19.7469 21.9864 19.5693 21.9886 19.3525L22.0074 17.5119C22.0096 17.2951 22.1871 17.1212 22.4039 17.1234ZM22.3664 20.8046C22.5832 20.8068 22.7571 20.9843 22.7549 21.2011L22.7455 22.1214C22.7433 22.3382 22.5658 22.5122 22.349 22.51C22.1322 22.5078 21.9582 22.3302 21.9604 22.1134L21.9698 21.1931C21.972 20.9763 22.1496 20.8024 22.3664 20.8046ZM17.9247 9.38288C18.8882 9.38288 19.8268 9.43998 20.7227 9.54809V11.5062C19.8435 11.3894 18.9038 11.3255 17.9247 11.3255C15.2863 11.3255 12.9334 11.7866 11.2763 12.4947C10.4459 12.8496 9.8352 13.2472 9.4463 13.6395C9.06132 14.0278 8.94261 14.3562 8.94261 14.6144C8.94261 14.9237 9.11414 15.3392 9.69232 15.8207C10.1948 16.2392 10.933 16.6416 11.8812 16.9816L12.3076 15.2221L14.3674 18.5995L10.9899 20.6593L11.4214 18.8788C10.2456 18.4768 9.21736 17.9531 8.44919 17.3134C7.62167 16.6243 7 15.7125 7 14.6144C7 13.6956 7.44101 12.903 8.06672 12.2718C8.68851 11.6446 9.53945 11.1244 10.513 10.7084C11.1899 10.4191 11.9478 10.171 12.7676 9.97033L14.1914 9.68022C15.361 9.48687 16.6203 9.38288 17.9247 9.38288Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function aa(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [as] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ac(e, t, n) {
        let { color: l = "#4E4B66" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class ad extends nk {
        constructor(e) {
          (super(),
            nD(this, e, ac, aa, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function au(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M15.4166 7.13118C15.3644 7.05001 15.2748 7.00068 15.1783 7.00001C15.0818 6.99934 14.9915 7.04743 14.9382 7.12786L14.84 7.27604C14.8029 7.33205 14.7881 7.39637 14.7935 7.45848C14.7342 7.4777 14.6808 7.51638 14.6436 7.57239L14.5455 7.72057C14.4583 7.85208 14.4943 8.02933 14.6258 8.11647C14.7573 8.20361 14.9345 8.16765 15.0217 8.03614L15.1199 7.88796C15.157 7.83195 15.1718 7.76763 15.1663 7.70552L15.173 7.70328L15.1814 7.70627C15.1749 7.7685 15.1888 7.83327 15.2253 7.89L15.3217 8.03996C15.407 8.17266 15.5837 8.21108 15.7164 8.12578C15.8491 8.04047 15.8875 7.86374 15.8022 7.73103L15.7058 7.58107C15.6694 7.52434 15.6162 7.48485 15.5569 7.46488C15.5633 7.40264 15.5495 7.33787 15.513 7.28114L15.4166 7.13118ZM14.629 8.62906C14.7163 8.49763 14.6805 8.32035 14.5491 8.23309C14.4177 8.14582 14.2404 8.18162 14.1531 8.31304L13.7827 8.87094C13.6954 9.00236 13.7312 9.17965 13.8626 9.26691C13.9941 9.35418 14.1713 9.31838 14.2586 9.18695L14.629 8.62906ZM16.5602 8.91759C16.4755 8.78449 16.299 8.74524 16.1659 8.82992C16.0328 8.9146 15.9935 9.09115 16.0782 9.22425L16.4326 9.78126C16.5172 9.91436 16.6938 9.95361 16.8269 9.86893C16.96 9.78425 16.9992 9.6077 16.9146 9.4746L16.5602 8.91759ZM13.5177 10.3028C13.605 10.1713 13.5692 9.99405 13.4378 9.90678C13.3063 9.81952 13.1291 9.85532 13.0418 9.98674L12.3009 11.1025C12.2136 11.234 12.2494 11.4112 12.3809 11.4985C12.5123 11.5858 12.6896 11.55 12.7768 11.4186L13.5177 10.3028ZM17.6233 10.5886C17.5386 10.4555 17.3621 10.4163 17.229 10.5009C17.0959 10.5856 17.0566 10.7622 17.1413 10.8953L17.8501 12.0093C17.9348 12.1424 18.1113 12.1816 18.2444 12.097C18.3775 12.0123 18.4168 11.8357 18.3321 11.7026L17.6233 10.5886ZM12.0359 12.5344C12.1232 12.4029 12.0874 12.2256 11.956 12.1384C11.8246 12.0511 11.6473 12.0869 11.56 12.2183L10.8191 13.3341C10.7319 13.4656 10.7676 13.6428 10.8991 13.7301C11.0305 13.8174 11.2078 13.7816 11.295 13.6501L12.0359 12.5344ZM19.0408 12.8166C18.9561 12.6835 18.7796 12.6443 18.6465 12.729C18.5134 12.8136 18.4741 12.9902 18.5588 13.1233L19.2676 14.2373C19.3523 14.3704 19.5288 14.4097 19.6619 14.325C19.795 14.2403 19.8343 14.0638 19.7496 13.9307L19.0408 12.8166ZM10.5542 14.7659C10.6414 14.6345 10.6056 14.4572 10.4742 14.37C10.3428 14.2827 10.1655 14.3185 10.0782 14.4499L9.33734 15.5657C9.25007 15.6972 9.28587 15.8744 9.41729 15.9617C9.54872 16.049 9.726 16.0132 9.81326 15.8817L10.5542 14.7659ZM20.4583 15.0447C20.3737 14.9116 20.1971 14.8723 20.064 14.957C19.9309 15.0417 19.8917 15.2182 19.9763 15.3513L20.6851 16.4653C20.7698 16.5984 20.9463 16.6377 21.0794 16.553C21.2125 16.4683 21.2518 16.2918 21.1671 16.1587L20.4583 15.0447ZM9.07237 16.9975C9.15964 16.8661 9.12384 16.6888 8.99242 16.6016C8.86099 16.5143 8.68371 16.5501 8.59645 16.6815L8.226 17.2394C8.13874 17.3709 8.17453 17.5481 8.30596 17.6354C8.43738 17.7227 8.61466 17.6869 8.70193 17.5554L9.07237 16.9975ZM21.8758 17.2727C21.7912 17.1396 21.6146 17.1003 21.4815 17.185C21.3484 17.2697 21.3092 17.4462 21.3938 17.5794L21.7482 18.1364C21.8329 18.2695 22.0095 18.3087 22.1426 18.224C22.2757 18.1393 22.3149 17.9628 22.2302 17.8297L21.8758 17.2727ZM6 22.3823L7.83115 21.0529C9.91059 22.7137 12.5121 23.5872 15.1762 23.5154C17.8432 23.5918 20.4487 22.7181 22.5292 21.0537L24.3594 22.3824L23.6667 18.0192L19.3035 18.7119L21.081 20.0023C19.3789 21.2305 17.3133 21.8668 15.2034 21.8016C15.1862 21.801 15.169 21.801 15.1518 21.8015C13.044 21.8632 10.9811 21.2268 9.27969 20.0013L11.0559 18.7118L6.69269 18.0191L6 22.3823Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ah(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [au] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function af(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class am extends nk {
        constructor(e) {
          (super(),
            nD(this, e, af, ah, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function ap(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M15.4166 23.8688C15.3644 23.95 15.2748 23.9993 15.1783 24C15.0818 24.0007 14.9915 23.9526 14.9382 23.8721L14.84 23.724C14.8029 23.6679 14.7881 23.6036 14.7935 23.5415C14.7342 23.5223 14.6808 23.4836 14.6436 23.4276L14.5455 23.2794C14.4583 23.1479 14.4943 22.9707 14.6258 22.8835C14.7573 22.7964 14.9345 22.8324 15.0217 22.9639L15.1199 23.112C15.157 23.1681 15.1718 23.2324 15.1663 23.2945L15.173 23.2967L15.1814 23.2937C15.1749 23.2315 15.1888 23.1667 15.2253 23.11L15.3217 22.96C15.407 22.8273 15.5837 22.7889 15.7164 22.8742C15.8491 22.9595 15.8875 23.1363 15.8022 23.269L15.7058 23.4189C15.6694 23.4757 15.6162 23.5152 15.5569 23.5351C15.5633 23.5974 15.5495 23.6621 15.513 23.7189L15.4166 23.8688ZM14.629 22.3709C14.7163 22.5024 14.6805 22.6796 14.5491 22.7669C14.4177 22.8542 14.2404 22.8184 14.1531 22.687L13.7827 22.1291C13.6954 21.9976 13.7312 21.8204 13.8626 21.7331C13.9941 21.6458 14.1713 21.6816 14.2586 21.813L14.629 22.3709ZM16.5602 22.0824C16.4755 22.2155 16.299 22.2548 16.1659 22.1701C16.0328 22.0854 15.9935 21.9088 16.0782 21.7757L16.4326 21.2187C16.5172 21.0856 16.6938 21.0464 16.8269 21.1311C16.96 21.2158 16.9992 21.3923 16.9146 21.5254L16.5602 22.0824ZM13.5177 20.6972C13.605 20.8287 13.5692 21.006 13.4378 21.0932C13.3063 21.1805 13.1291 21.1447 13.0418 21.0133L12.3009 19.8975C12.2136 19.766 12.2494 19.5888 12.3809 19.5015C12.5123 19.4142 12.6896 19.45 12.7768 19.5814L13.5177 20.6972ZM17.6233 20.4114C17.5386 20.5445 17.3621 20.5837 17.229 20.4991C17.0959 20.4144 17.0566 20.2378 17.1413 20.1047L17.8501 18.9907C17.9347 18.8576 18.1113 18.8184 18.2444 18.903C18.3775 18.9877 18.4168 19.1643 18.3321 19.2974L17.6233 20.4114ZM12.0359 18.4656C12.1232 18.5971 12.0874 18.7744 11.956 18.8616C11.8246 18.9489 11.6473 18.9131 11.56 18.7817L10.8191 17.6659C10.7319 17.5344 10.7676 17.3572 10.8991 17.2699C11.0305 17.1826 11.2078 17.2184 11.295 17.3499L12.0359 18.4656ZM19.0408 18.1834C18.9561 18.3165 18.7796 18.3557 18.6465 18.271C18.5134 18.1864 18.4741 18.0098 18.5588 17.8767L19.2676 16.7627C19.3523 16.6296 19.5288 16.5903 19.6619 16.675C19.795 16.7597 19.8343 16.9362 19.7496 17.0693L19.0408 18.1834ZM10.5542 16.2341C10.6414 16.3655 10.6056 16.5428 10.4742 16.63C10.3428 16.7173 10.1655 16.6815 10.0782 16.5501L9.33734 15.4343C9.25007 15.3028 9.28587 15.1256 9.41729 15.0383C9.54871 14.951 9.726 14.9868 9.81326 15.1183L10.5542 16.2341ZM20.4583 15.9553C20.3737 16.0884 20.1971 16.1277 20.064 16.043C19.9309 15.9583 19.8916 15.7818 19.9763 15.6487L20.6851 14.5347C20.7698 14.4016 20.9463 14.3623 21.0794 14.447C21.2125 14.5317 21.2518 14.7082 21.1671 14.8413L20.4583 15.9553ZM9.07237 14.0025C9.15964 14.1339 9.12384 14.3112 8.99242 14.3984C8.86099 14.4857 8.68371 14.4499 8.59645 14.3185L8.226 13.7606C8.13874 13.6291 8.17453 13.4519 8.30596 13.3646C8.43738 13.2773 8.61466 13.3131 8.70193 13.4446L9.07237 14.0025ZM21.8758 13.7273C21.7912 13.8604 21.6146 13.8997 21.4815 13.815C21.3484 13.7303 21.3092 13.5538 21.3938 13.4206L21.7482 12.8636C21.8329 12.7305 22.0094 12.6913 22.1426 12.776C22.2757 12.8607 22.3149 13.0372 22.2302 13.1703L21.8758 13.7273ZM6 8.61769L7.83114 9.94708C9.91059 8.28632 12.5121 7.41281 15.1762 7.48462C17.8432 7.40821 20.4487 8.28187 22.5292 9.94635L24.3594 8.61759L23.6667 12.9808L19.3035 12.2881L21.081 10.9977C19.3789 9.76947 17.3133 9.13316 15.2034 9.19843C15.1862 9.19897 15.169 9.19898 15.1518 9.19848C13.044 9.13685 10.9811 9.77319 9.27969 10.9987L11.0559 12.2882L6.69269 12.9809L6 8.61769Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ag(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [ap] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function av(e, t, n) {
        let { color: l = "#0086cd" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class aA extends nk {
        constructor(e) {
          (super(),
            nD(this, e, av, ag, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function aw(e) {
        let t, n, l, o, i, r, s, a, c, d, u;
        return {
          c() {
            ((t = tS("path")),
              (n = tP()),
              (l = tS("path")),
              (o = tP()),
              (i = tS("path")),
              (r = tP()),
              (s = tS("path")),
              (a = tP()),
              (c = tS("path")),
              (d = tP()),
              (u = tS("path")),
              this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              (o = tq(e)),
              tV(
                (i = tK(e, "path", {
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              (r = tq(e)),
              tV(
                (s = tK(e, "path", {
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              (a = tq(e)),
              tV(
                (c = tK(e, "path", {
                  opacity: !0,
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              (d = tq(e)),
              tV(
                (u = tK(e, "path", {
                  opacity: !0,
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M21.7419 9.81543L21.4352 10.871C23.2788 11.6442 24.6877 13.1374 24.6877 15.0036C24.6877 16.8656 23.2886 18.3613 21.4407 19.1365L21.7418 20.1733L19.5654 18.9767L20.762 16.8003L21.0692 17.8576C22.5454 17.1962 23.3663 16.102 23.3663 15.0036C23.3663 13.9043 22.5401 12.8112 21.0637 12.1499L20.7621 13.1884L19.5655 11.012L21.7419 9.81543Z",
              ),
              tG(t, "fill", e[0]),
              tG(l, "fill-rule", "evenodd"),
              tG(l, "clip-rule", "evenodd"),
              tG(
                l,
                "d",
                "M9.61955 13.1884L9.31821 12.151C7.84173 12.8054 7.01677 13.8975 7.01677 14.996C7.01677 16.0945 7.8379 17.1889 9.31466 17.8503L9.61955 16.8007L10.8162 18.9771L8.63978 20.1737L8.94317 19.1292C7.09479 18.3541 5.69531 16.8583 5.69531 14.996C5.69531 13.1319 7.10096 11.6396 8.94688 10.8727L8.63978 9.81543L10.8162 11.012L9.61955 13.1884Z",
              ),
              tG(l, "fill", e[0]),
              tG(i, "fill-rule", "evenodd"),
              tG(i, "clip-rule", "evenodd"),
              tG(
                i,
                "d",
                "M15.1715 9.65889C14.8524 11.0016 14.6486 12.8902 14.6486 14.9998C14.6486 17.1094 14.8524 18.9981 15.1715 20.3408C15.3323 21.0173 15.5139 21.5187 15.6916 21.8349C15.7504 21.9396 15.7985 22.0069 15.8341 22.0497C15.8564 22.0227 15.8835 21.9863 15.9151 21.9376C16.0623 21.7107 16.2227 21.3373 16.3743 20.8105C16.4752 20.4598 16.8413 20.2574 17.192 20.3583C17.5427 20.4592 17.7451 20.8253 17.6442 21.176C17.4766 21.7586 17.2726 22.2731 17.0238 22.6568C16.7947 23.0098 16.4083 23.4298 15.8343 23.4298C15.185 23.4298 14.7732 22.898 14.5395 22.4822C14.2754 22.0121 14.0592 21.3757 13.8859 20.6463C13.5367 19.1771 13.3271 17.1811 13.3271 14.9998C13.3271 12.8186 13.5367 10.8226 13.8859 9.35335C14.0592 8.62396 14.2754 7.98755 14.5395 7.51744C14.7732 7.10162 15.185 6.56982 15.8343 6.56982C16.4083 6.56982 16.7947 6.98982 17.0238 7.34288C17.2726 7.72654 17.4766 8.24107 17.6442 8.82369C17.7451 9.17437 17.5427 9.54046 17.192 9.64137C16.8413 9.74229 16.4752 9.53981 16.3743 9.18913C16.2227 8.66238 16.0623 8.28898 15.9151 8.06205C15.8835 8.01334 15.8564 7.97695 15.8341 7.94996C15.7985 7.99273 15.7504 8.06008 15.6916 8.16476C15.5139 8.48094 15.3323 8.98232 15.1715 9.65889ZM15.7595 7.87723C15.7595 7.87717 15.7603 7.87757 15.7619 7.8786C15.7603 7.8778 15.7594 7.87728 15.7595 7.87723ZM15.7595 22.1224C15.7594 22.1224 15.7603 22.1219 15.7619 22.1211C15.7603 22.1221 15.7595 22.1225 15.7595 22.1224Z",
              ),
              tG(i, "fill", e[0]),
              tG(s, "fill-rule", "evenodd"),
              tG(s, "clip-rule", "evenodd"),
              tG(
                s,
                "d",
                "M11.1744 15.8567C12.1874 16.1773 13.6277 16.3861 15.2479 16.3861C16.8681 16.3861 18.3084 16.1773 19.3215 15.8567C19.8318 15.6952 20.1968 15.5168 20.42 15.3498C20.5754 15.2335 20.6171 15.1592 20.6275 15.1339C20.6193 15.1146 20.5933 15.0695 20.517 14.9991C20.384 14.8764 20.1534 14.732 19.806 14.5875C19.4691 14.4474 19.3096 14.0607 19.4497 13.7237C19.5898 13.3868 19.9766 13.2273 20.3135 13.3674C20.7385 13.5441 21.1234 13.7608 21.4128 14.0276C21.7022 14.2945 21.9514 14.6667 21.9514 15.1344C21.9514 15.7028 21.5883 16.126 21.2117 16.4078C20.8233 16.6984 20.3033 16.932 19.7202 17.1166C18.5461 17.4882 16.9651 17.7075 15.2479 17.7075C13.5308 17.7075 11.9497 17.4882 10.7757 17.1166C10.1925 16.932 9.67256 16.6984 9.2842 16.4078C8.90758 16.126 8.54443 15.7028 8.54443 15.1344C8.54443 14.6667 8.79369 14.2945 9.08307 14.0276C9.37244 13.7608 9.75737 13.5441 10.1824 13.3674C10.5193 13.2273 10.906 13.3868 11.0462 13.7237C11.1863 14.0607 11.0268 14.4474 10.6898 14.5875C10.3424 14.732 10.1119 14.8764 9.97889 14.9991C9.90251 15.0695 9.87659 15.1146 9.86836 15.1339C9.87879 15.1592 9.9205 15.2335 10.0759 15.3498C10.2991 15.5168 10.6641 15.6952 11.1744 15.8567ZM9.86484 15.1448C9.86476 15.1448 9.86488 15.1438 9.86549 15.1417C9.86524 15.1438 9.86493 15.1448 9.86484 15.1448ZM20.631 15.1448C20.6309 15.1448 20.6306 15.1438 20.6304 15.1417C20.631 15.1438 20.6311 15.1448 20.631 15.1448Z",
              ),
              tG(s, "fill", e[0]),
              tG(c, "opacity", "0.6"),
              tG(c, "fill-rule", "evenodd"),
              tG(c, "clip-rule", "evenodd"),
              tG(
                c,
                "d",
                "M15.792 11.5518C15.9484 11.5518 16.0752 11.6785 16.0752 11.8349V12.6274C16.0752 12.7838 15.9484 12.9106 15.792 12.9106C15.6356 12.9106 15.5089 12.7838 15.5089 12.6274V11.8349C15.5089 11.6785 15.6356 11.5518 15.792 11.5518ZM15.792 13.9291C15.9484 13.9291 16.0752 14.0559 16.0752 14.2123V15.7972C16.0752 15.9536 15.9484 16.0804 15.792 16.0804C15.6356 16.0804 15.5089 15.9536 15.5089 15.7972V14.2123C15.5089 14.0559 15.6356 13.9291 15.792 13.9291ZM15.792 17.099C15.9484 17.099 16.0752 17.2258 16.0752 17.3821V18.1746C16.0752 18.331 15.9484 18.4578 15.792 18.4578C15.6356 18.4578 15.5089 18.331 15.5089 18.1746V17.3821C15.5089 17.2258 15.6356 17.099 15.792 17.099Z",
              ),
              tG(c, "fill", e[0]),
              tG(u, "opacity", "0.6"),
              tG(u, "fill-rule", "evenodd"),
              tG(u, "clip-rule", "evenodd"),
              tG(
                u,
                "d",
                "M18.7036 15.2837C18.7036 15.4401 18.5768 15.5669 18.4204 15.5669L17.7359 15.5669C17.5795 15.5669 17.4527 15.4401 17.4527 15.2837C17.4527 15.1273 17.5795 15.0006 17.7359 15.0006L18.4204 15.0006C18.5768 15.0006 18.7036 15.1273 18.7036 15.2837ZM16.65 15.2837C16.65 15.4401 16.5232 15.5669 16.3668 15.5669L14.9977 15.5669C14.8413 15.5669 14.7145 15.4401 14.7145 15.2837C14.7145 15.1273 14.8413 15.0006 14.9977 15.0006L16.3668 15.0006C16.5232 15.0006 16.65 15.1273 16.65 15.2837ZM13.9117 15.2837C13.9117 15.4401 13.785 15.5669 13.6286 15.5669L12.944 15.5669C12.7876 15.5669 12.6608 15.4401 12.6608 15.2837C12.6608 15.1273 12.7876 15.0006 12.944 15.0006L13.6286 15.0006C13.785 15.0006 13.9117 15.1273 13.9117 15.2837Z",
              ),
              tG(u, "fill", e[0]));
          },
          m(e, h) {
            (tk(e, t, h),
              tk(e, n, h),
              tk(e, l, h),
              tk(e, o, h),
              tk(e, i, h),
              tk(e, r, h),
              tk(e, s, h),
              tk(e, a, h),
              tk(e, c, h),
              tk(e, d, h),
              tk(e, u, h));
          },
          p(e, n) {
            (1 & n && tG(t, "fill", e[0]),
              1 & n && tG(l, "fill", e[0]),
              1 & n && tG(i, "fill", e[0]),
              1 & n && tG(s, "fill", e[0]),
              1 & n && tG(c, "fill", e[0]),
              1 & n && tG(u, "fill", e[0]));
          },
          d(e) {
            (e && tL(t),
              e && tL(n),
              e && tL(l),
              e && tL(o),
              e && tL(i),
              e && tL(r),
              e && tL(s),
              e && tL(a),
              e && tL(c),
              e && tL(d),
              e && tL(u));
          },
        };
      }
      function ax(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 31 30",
              $$slots: { default: [aw] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ay(e, t, n) {
        let { color: l = "#4E4B66" } = t,
          { width: o = 31 } = t,
          { height: i = 30 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class aE extends nk {
        constructor(e) {
          (super(),
            nD(this, e, ay, ax, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function aC(e) {
        var t, n, l;
        let o, i, r;
        function s(t) {
          e[17](t);
        }
        let a = {
          title: e[8].t("mdf.tooth.moveZTitle"),
          upText: e[8].t("movement.dir.E"),
          downText: e[8].t("movement.dir.I"),
          value:
            null != (n = lr(null == (t = e[5]) ? void 0 : t.t_z)) ? n : "-",
          symbol: ls(null == (l = e[5]) ? void 0 : l.t_z),
          name: ey.MOVE_Z,
        };
        return (
          void 0 !== e[0] && (a.activeName = e[0]),
          (o = new sB({ props: a })),
          ni.push(() => nT(o, "activeName", s)),
          o.$on("change", e[10]),
          {
            c() {
              n$(o.$$.fragment);
            },
            l(e) {
              nI(o.$$.fragment, e);
            },
            m(e, t) {
              (nO(o, e, t), (r = !0));
            },
            p(e, t) {
              var n, l, r;
              let s = {};
              (256 & t[0] && (s.title = e[8].t("mdf.tooth.moveZTitle")),
                256 & t[0] && (s.upText = e[8].t("movement.dir.E")),
                256 & t[0] && (s.downText = e[8].t("movement.dir.I")),
                32 & t[0] &&
                  (s.value =
                    null != (l = lr(null == (n = e[5]) ? void 0 : n.t_z))
                      ? l
                      : "-"),
                32 & t[0] &&
                  (s.symbol = ls(null == (r = e[5]) ? void 0 : r.t_z)),
                !i &&
                  1 & t[0] &&
                  ((i = !0), (s.activeName = e[0]), nu(() => (i = !1))),
                o.$set(s));
            },
            i(e) {
              r || (nx(o.$$.fragment, e), (r = !0));
            },
            o(e) {
              (ny(o.$$.fragment, e), (r = !1));
            },
            d(e) {
              nM(o, e);
            },
          }
        );
      }
      function ab(e) {
        var t, n, l;
        let o, i, r;
        function s(t) {
          e[16](t);
        }
        let a = {
          title: e[8].t("mdf.tooth.moveZTitle"),
          value:
            null != (n = lr(null == (t = e[5]) ? void 0 : t.t_z)) ? n : "-",
          symbol: ls(null == (l = e[5]) ? void 0 : l.t_z),
          name: ey.MOVE_Z,
          $$slots: { default: [aT] },
          $$scope: { ctx: e },
        };
        return (
          void 0 !== e[0] && (a.activeName = e[0]),
          (o = new sL({ props: a })),
          ni.push(() => nT(o, "activeName", s)),
          o.$on("change", e[10]),
          o.$on("direction", e[12]),
          o.$on("keyPressEnter", e[11]),
          {
            c() {
              n$(o.$$.fragment);
            },
            l(e) {
              nI(o.$$.fragment, e);
            },
            m(e, t) {
              (nO(o, e, t), (r = !0));
            },
            p(e, t) {
              var n, l, r;
              let s = {};
              (256 & t[0] && (s.title = e[8].t("mdf.tooth.moveZTitle")),
                32 & t[0] &&
                  (s.value =
                    null != (l = lr(null == (n = e[5]) ? void 0 : n.t_z))
                      ? l
                      : "-"),
                32 & t[0] &&
                  (s.symbol = ls(null == (r = e[5]) ? void 0 : r.t_z)),
                8 & t[1] && (s.$$scope = { dirty: t, ctx: e }),
                !i &&
                  1 & t[0] &&
                  ((i = !0), (s.activeName = e[0]), nu(() => (i = !1))),
                o.$set(s));
            },
            i(e) {
              r || (nx(o.$$.fragment, e), (r = !0));
            },
            o(e) {
              (ny(o.$$.fragment, e), (r = !1));
            },
            d(e) {
              nM(o, e);
            },
          }
        );
      }
      function aT(e) {
        let t, n;
        return (
          (t = new sq({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function a$(e) {
        let t, n;
        return (
          (t = new s1({ props: { color: "#4E4B66 " } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aI(e) {
        let t, n;
        return (
          (t = new s4({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aO(e) {
        let t, n;
        return (
          (t = new s8({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aM(e) {
        let t, n;
        return (
          (t = new ar({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aD(e) {
        let t, n;
        return (
          (t = new ad({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ak(e) {
        let t, n;
        return (
          (t = new an({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aL(e) {
        let t, n;
        return (
          (t = new am({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aN(e) {
        let t, n;
        return (
          (t = new aA({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aR(e) {
        let t, n, l;
        function o(t) {
          e[26](t);
        }
        let i = {
          title: e[8].t("mdf.tooth.freeMovement"),
          name: ey.MOVE_ROTATE,
          text: e[8].t("mdf.tooth.freeMovement"),
          $$slots: { default: [aS] },
          $$scope: { ctx: e },
        };
        return (
          void 0 !== e[0] && (i.activeName = e[0]),
          (t = new sJ({ props: i })),
          ni.push(() => nT(t, "activeName", o)),
          t.$on("change", e[10]),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, n) {
              (nO(t, e, n), (l = !0));
            },
            p(e, l) {
              let o = {};
              (256 & l[0] && (o.title = e[8].t("mdf.tooth.freeMovement")),
                256 & l[0] && (o.text = e[8].t("mdf.tooth.freeMovement")),
                8 & l[1] && (o.$$scope = { dirty: l, ctx: e }),
                !n &&
                  1 & l[0] &&
                  ((n = !0), (o.activeName = e[0]), nu(() => (n = !1))),
                t.$set(o));
            },
            i(e) {
              l || (nx(t.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (l = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aS(e) {
        let t, n;
        return (
          (t = new aE({ props: { color: "#4E4B66" } })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p: tn,
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aB(e) {
        let t, n;
        return (
          (t = new sz({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aP(e) {
        var t, n, l, o, i, r, s, a, c, d, u, h, f, m, p, g, v, A;
        let w,
          x,
          y,
          E,
          C,
          b,
          T,
          $,
          I,
          O,
          M,
          D,
          k,
          L,
          N,
          R,
          S,
          B,
          P,
          U,
          j,
          z,
          H,
          G,
          V,
          Z,
          F,
          J,
          Y,
          K;
        let W = [ab, aC],
          q = [];
        function Q(t) {
          e[18](t);
        }
        x = q[(w = e[6] ? 0 : 1)] = W[w](e);
        let X = {
          title: e[8].t("mdf.tooth.moveYTitle"),
          value:
            null != (n = lr(null == (t = e[5]) ? void 0 : t.t_y)) ? n : "-",
          symbol: ls(null == (l = e[5]) ? void 0 : l.t_y),
          name: ey.MOVE_Y,
          $$slots: { default: [a$] },
          $$scope: { ctx: e },
        };
        function _(t) {
          e[19](t);
        }
        (void 0 !== e[0] && (X.activeName = e[0]),
          (E = new sL({ props: X })),
          ni.push(() => nT(E, "activeName", Q)),
          E.$on("change", e[10]),
          E.$on("direction", e[12]),
          E.$on("keyPressEnter", e[11]));
        let ee = {
          title: e[8].t("mdf.tooth.moveXTitle"),
          value:
            null != (i = lr(null == (o = e[5]) ? void 0 : o.t_x)) ? i : "-",
          symbol: ls(null == (r = e[5]) ? void 0 : r.t_x),
          name: ey.MOVE_X,
          $$slots: { default: [aI] },
          $$scope: { ctx: e },
        };
        function et(t) {
          e[20](t);
        }
        (void 0 !== e[0] && (ee.activeName = e[0]),
          (T = new sL({ props: ee })),
          ni.push(() => nT(T, "activeName", _)),
          T.$on("change", e[10]),
          T.$on("direction", e[12]),
          T.$on("keyPressEnter", e[11]));
        let en = {
          title: e[8].t("mdf.tooth.rotateZTitle"),
          value:
            null != (a = lr(null == (s = e[5]) ? void 0 : s.r_z)) ? a : "-",
          symbol: ls(null == (c = e[5]) ? void 0 : c.r_z),
          name: ey.ROTATE_Z,
          $$slots: { default: [aO] },
          $$scope: { ctx: e },
        };
        function el(t) {
          e[21](t);
        }
        (void 0 !== e[0] && (en.activeName = e[0]),
          (O = new sL({ props: en })),
          ni.push(() => nT(O, "activeName", et)),
          O.$on("change", e[10]),
          O.$on("direction", e[12]),
          O.$on("keyPressEnter", e[11]));
        let eo = {
          title: e[8].t("mdf.tooth.rotateZMesialTitle"),
          value: "-",
          name: ey.ROTATE_ZMESIAL,
          disabled: !0,
          $$slots: { default: [aM] },
          $$scope: { ctx: e },
        };
        function ei(t) {
          e[22](t);
        }
        (void 0 !== e[0] && (eo.activeName = e[0]),
          (k = new sL({ props: eo })),
          ni.push(() => nT(k, "activeName", el)),
          k.$on("change", e[10]));
        let er = {
          title: e[8].t("mdf.tooth.rotateZDisialTitle"),
          value: "-",
          name: ey.ROTATE_ZDISTAL,
          disabled: !0,
          $$slots: { default: [aD] },
          $$scope: { ctx: e },
        };
        function es(t) {
          e[23](t);
        }
        (void 0 !== e[0] && (er.activeName = e[0]),
          (R = new sL({ props: er })),
          ni.push(() => nT(R, "activeName", ei)),
          R.$on("change", e[10]));
        let ea = {
          title: e[8].t("mdf.tooth.rotateYTitle"),
          value:
            null != (u = lr(null == (d = e[5]) ? void 0 : d.r_y)) ? u : "-",
          symbol: ls(null == (h = e[5]) ? void 0 : h.r_y),
          name: ey.ROTATE_Y,
          directionVisible: e[3] !== eb[1],
          $$slots: { default: [ak] },
          $$scope: { ctx: e },
        };
        function ec(t) {
          e[24](t);
        }
        (void 0 !== e[0] && (ea.activeName = e[0]),
          (P = new sL({ props: ea })),
          ni.push(() => nT(P, "activeName", es)),
          P.$on("change", e[10]),
          P.$on("direction", e[12]),
          P.$on("keyPressEnter", e[11]));
        let ed = {
          title: e[8].t("mdf.tooth.rotateXTitle"),
          value:
            null != (m = lr(null == (f = e[5]) ? void 0 : f.r_x)) ? m : "-",
          symbol: ls(null == (p = e[5]) ? void 0 : p.r_x),
          name: ey.ROTATE_X,
          directionVisible: e[3] !== eb[1],
          $$slots: { default: [aL] },
          $$scope: { ctx: e },
        };
        function eu(t) {
          e[25](t);
        }
        (void 0 !== e[0] && (ed.activeName = e[0]),
          (z = new sL({ props: ed })),
          ni.push(() => nT(z, "activeName", ec)),
          z.$on("change", e[10]),
          z.$on("direction", e[12]),
          z.$on("keyPressEnter", e[11]));
        let eh = {
          title: e[8].t("mdf.tooth.rotateNXTitle"),
          value:
            null != (v = lr(null == (g = e[5]) ? void 0 : g.r_neg_x)) ? v : "-",
          symbol: ls(null == (A = e[5]) ? void 0 : A.r_neg_x),
          name: ey.ROTATE_NEGX,
          directionVisible: e[3] !== eb[1],
          $$slots: { default: [aN] },
          $$scope: { ctx: e },
        };
        (void 0 !== e[0] && (eh.activeName = e[0]),
          (V = new sL({ props: eh })),
          ni.push(() => nT(V, "activeName", eu)),
          V.$on("change", e[10]),
          V.$on("direction", e[12]),
          V.$on("keyPressEnter", e[11]));
        let ef = e[6] && aR(e),
          em = e[7] && aB();
        return {
          c() {
            (x.c(),
              (y = tP()),
              n$(E.$$.fragment),
              (b = tP()),
              n$(T.$$.fragment),
              (I = tP()),
              n$(O.$$.fragment),
              (D = tP()),
              n$(k.$$.fragment),
              (N = tP()),
              n$(R.$$.fragment),
              (B = tP()),
              n$(P.$$.fragment),
              (j = tP()),
              n$(z.$$.fragment),
              (G = tP()),
              n$(V.$$.fragment),
              (F = tP()),
              ef && ef.c(),
              (J = tP()),
              em && em.c(),
              (Y = tU()));
          },
          l(e) {
            (x.l(e),
              (y = tq(e)),
              nI(E.$$.fragment, e),
              (b = tq(e)),
              nI(T.$$.fragment, e),
              (I = tq(e)),
              nI(O.$$.fragment, e),
              (D = tq(e)),
              nI(k.$$.fragment, e),
              (N = tq(e)),
              nI(R.$$.fragment, e),
              (B = tq(e)),
              nI(P.$$.fragment, e),
              (j = tq(e)),
              nI(z.$$.fragment, e),
              (G = tq(e)),
              nI(V.$$.fragment, e),
              (F = tq(e)),
              ef && ef.l(e),
              (J = tq(e)),
              em && em.l(e),
              (Y = tU()));
          },
          m(e, t) {
            (q[w].m(e, t),
              tk(e, y, t),
              nO(E, e, t),
              tk(e, b, t),
              nO(T, e, t),
              tk(e, I, t),
              nO(O, e, t),
              tk(e, D, t),
              nO(k, e, t),
              tk(e, N, t),
              nO(R, e, t),
              tk(e, B, t),
              nO(P, e, t),
              tk(e, j, t),
              nO(z, e, t),
              tk(e, G, t),
              nO(V, e, t),
              tk(e, F, t),
              ef && ef.m(e, t),
              tk(e, J, t),
              em && em.m(e, t),
              tk(e, Y, t),
              (K = !0));
          },
          p(e, t) {
            var n, l, o, i, r, s, a, c, d, u, h, f, m, p, g, v, A, b;
            let I = w;
            (w = e[6] ? 0 : 1) === I
              ? q[w].p(e, t)
              : (nA(),
                ny(q[I], 1, 1, () => {
                  q[I] = null;
                }),
                nw(),
                (x = q[w]) ? x.p(e, t) : (x = q[w] = W[w](e)).c(),
                nx(x, 1),
                x.m(y.parentNode, y));
            let D = {};
            (256 & t[0] && (D.title = e[8].t("mdf.tooth.moveYTitle")),
              32 & t[0] &&
                (D.value =
                  null != (l = lr(null == (n = e[5]) ? void 0 : n.t_y))
                    ? l
                    : "-"),
              32 & t[0] && (D.symbol = ls(null == (o = e[5]) ? void 0 : o.t_y)),
              8 & t[1] && (D.$$scope = { dirty: t, ctx: e }),
              !C &&
                1 & t[0] &&
                ((C = !0), (D.activeName = e[0]), nu(() => (C = !1))),
              E.$set(D));
            let N = {};
            (256 & t[0] && (N.title = e[8].t("mdf.tooth.moveXTitle")),
              32 & t[0] &&
                (N.value =
                  null != (r = lr(null == (i = e[5]) ? void 0 : i.t_x))
                    ? r
                    : "-"),
              32 & t[0] && (N.symbol = ls(null == (s = e[5]) ? void 0 : s.t_x)),
              8 & t[1] && (N.$$scope = { dirty: t, ctx: e }),
              !$ &&
                1 & t[0] &&
                (($ = !0), (N.activeName = e[0]), nu(() => ($ = !1))),
              T.$set(N));
            let B = {};
            (256 & t[0] && (B.title = e[8].t("mdf.tooth.rotateZTitle")),
              32 & t[0] &&
                (B.value =
                  null != (c = lr(null == (a = e[5]) ? void 0 : a.r_z))
                    ? c
                    : "-"),
              32 & t[0] && (B.symbol = ls(null == (d = e[5]) ? void 0 : d.r_z)),
              8 & t[1] && (B.$$scope = { dirty: t, ctx: e }),
              !M &&
                1 & t[0] &&
                ((M = !0), (B.activeName = e[0]), nu(() => (M = !1))),
              O.$set(B));
            let j = {};
            (256 & t[0] && (j.title = e[8].t("mdf.tooth.rotateZMesialTitle")),
              8 & t[1] && (j.$$scope = { dirty: t, ctx: e }),
              !L &&
                1 & t[0] &&
                ((L = !0), (j.activeName = e[0]), nu(() => (L = !1))),
              k.$set(j));
            let G = {};
            (256 & t[0] && (G.title = e[8].t("mdf.tooth.rotateZDisialTitle")),
              8 & t[1] && (G.$$scope = { dirty: t, ctx: e }),
              !S &&
                1 & t[0] &&
                ((S = !0), (G.activeName = e[0]), nu(() => (S = !1))),
              R.$set(G));
            let F = {};
            (256 & t[0] && (F.title = e[8].t("mdf.tooth.rotateYTitle")),
              32 & t[0] &&
                (F.value =
                  null != (h = lr(null == (u = e[5]) ? void 0 : u.r_y))
                    ? h
                    : "-"),
              32 & t[0] && (F.symbol = ls(null == (f = e[5]) ? void 0 : f.r_y)),
              8 & t[0] && (F.directionVisible = e[3] !== eb[1]),
              8 & t[1] && (F.$$scope = { dirty: t, ctx: e }),
              !U &&
                1 & t[0] &&
                ((U = !0), (F.activeName = e[0]), nu(() => (U = !1))),
              P.$set(F));
            let K = {};
            (256 & t[0] && (K.title = e[8].t("mdf.tooth.rotateXTitle")),
              32 & t[0] &&
                (K.value =
                  null != (p = lr(null == (m = e[5]) ? void 0 : m.r_x))
                    ? p
                    : "-"),
              32 & t[0] && (K.symbol = ls(null == (g = e[5]) ? void 0 : g.r_x)),
              8 & t[0] && (K.directionVisible = e[3] !== eb[1]),
              8 & t[1] && (K.$$scope = { dirty: t, ctx: e }),
              !H &&
                1 & t[0] &&
                ((H = !0), (K.activeName = e[0]), nu(() => (H = !1))),
              z.$set(K));
            let Q = {};
            (256 & t[0] && (Q.title = e[8].t("mdf.tooth.rotateNXTitle")),
              32 & t[0] &&
                (Q.value =
                  null != (A = lr(null == (v = e[5]) ? void 0 : v.r_neg_x))
                    ? A
                    : "-"),
              32 & t[0] &&
                (Q.symbol = ls(null == (b = e[5]) ? void 0 : b.r_neg_x)),
              8 & t[0] && (Q.directionVisible = e[3] !== eb[1]),
              8 & t[1] && (Q.$$scope = { dirty: t, ctx: e }),
              !Z &&
                1 & t[0] &&
                ((Z = !0), (Q.activeName = e[0]), nu(() => (Z = !1))),
              V.$set(Q),
              e[6]
                ? ef
                  ? (ef.p(e, t), 64 & t[0] && nx(ef, 1))
                  : ((ef = aR(e)).c(), nx(ef, 1), ef.m(J.parentNode, J))
                : ef &&
                  (nA(),
                  ny(ef, 1, 1, () => {
                    ef = null;
                  }),
                  nw()),
              e[7]
                ? em
                  ? 128 & t[0] && nx(em, 1)
                  : ((em = aB()).c(), nx(em, 1), em.m(Y.parentNode, Y))
                : em &&
                  (nA(),
                  ny(em, 1, 1, () => {
                    em = null;
                  }),
                  nw()));
          },
          i(e) {
            K ||
              (nx(x),
              nx(E.$$.fragment, e),
              nx(T.$$.fragment, e),
              nx(O.$$.fragment, e),
              nx(k.$$.fragment, e),
              nx(R.$$.fragment, e),
              nx(P.$$.fragment, e),
              nx(z.$$.fragment, e),
              nx(V.$$.fragment, e),
              nx(ef),
              nx(em),
              (K = !0));
          },
          o(e) {
            (ny(x),
              ny(E.$$.fragment, e),
              ny(T.$$.fragment, e),
              ny(O.$$.fragment, e),
              ny(k.$$.fragment, e),
              ny(R.$$.fragment, e),
              ny(P.$$.fragment, e),
              ny(z.$$.fragment, e),
              ny(V.$$.fragment, e),
              ny(ef),
              ny(em),
              (K = !1));
          },
          d(e) {
            (q[w].d(e),
              e && tL(y),
              nM(E, e),
              e && tL(b),
              nM(T, e),
              e && tL(I),
              nM(O, e),
              e && tL(D),
              nM(k, e),
              e && tL(N),
              nM(R, e),
              e && tL(B),
              nM(P, e),
              e && tL(j),
              nM(z, e),
              e && tL(G),
              nM(V, e),
              e && tL(F),
              ef && ef.d(e),
              e && tL(J),
              em && em.d(e),
              e && tL(Y));
          },
        };
      }
      function aU(e) {
        let t,
          n = e[8].t("mdf.tooth.following") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            256 & l[0] &&
              n !== (n = e[8].t("mdf.tooth.following") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function aj(e) {
        let t,
          n = e[8].t("mdf.ipr.hideOperation") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            256 & l[0] &&
              n !== (n = e[8].t("mdf.ipr.hideOperation") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function az(e) {
        let t, n, l, o, i, r;
        function s(t) {
          e[27](t);
        }
        let a = {
          style: "margin-bottom: 10px;",
          $$slots: { default: [aU] },
          $$scope: { ctx: e },
        };
        function c(t) {
          e[29](t);
        }
        (void 0 !== e[1] && (a.checked = e[1]),
          (t = new r5({ props: a })),
          ni.push(() => nT(t, "checked", s)),
          t.$on("click", e[28]));
        let d = { $$slots: { default: [aj] }, $$scope: { ctx: e } };
        return (
          void 0 !== e[2] && (d.checked = e[2]),
          (o = new r5({ props: d })),
          ni.push(() => nT(o, "checked", c)),
          o.$on("click", e[30]),
          {
            c() {
              (n$(t.$$.fragment), (l = tP()), n$(o.$$.fragment));
            },
            l(e) {
              (nI(t.$$.fragment, e), (l = tq(e)), nI(o.$$.fragment, e));
            },
            m(e, n) {
              (nO(t, e, n), tk(e, l, n), nO(o, e, n), (r = !0));
            },
            p(e, l) {
              let r = {};
              ((256 & l[0]) | (8 & l[1]) && (r.$$scope = { dirty: l, ctx: e }),
                !n &&
                  2 & l[0] &&
                  ((n = !0), (r.checked = e[1]), nu(() => (n = !1))),
                t.$set(r));
              let s = {};
              ((256 & l[0]) | (8 & l[1]) && (s.$$scope = { dirty: l, ctx: e }),
                !i &&
                  4 & l[0] &&
                  ((i = !0), (s.checked = e[2]), nu(() => (i = !1))),
                o.$set(s));
            },
            i(e) {
              r || (nx(t.$$.fragment, e), nx(o.$$.fragment, e), (r = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), ny(o.$$.fragment, e), (r = !1));
            },
            d(e) {
              (nM(t, e), e && tL(l), nM(o, e));
            },
          }
        );
      }
      function aH(e) {
        let t, n, l, o;
        return (
          (t = new rQ({
            props: { $$slots: { default: [aP] }, $$scope: { ctx: e } },
          })),
          (l = new rQ({
            props: {
              style: "border-top: 1px solid #d9dbe9;",
              $$slots: { default: [az] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              (n$(t.$$.fragment), (n = tP()), n$(l.$$.fragment));
            },
            l(e) {
              (nI(t.$$.fragment, e), (n = tq(e)), nI(l.$$.fragment, e));
            },
            m(e, i) {
              (nO(t, e, i), tk(e, n, i), nO(l, e, i), (o = !0));
            },
            p(e, n) {
              let o = {};
              ((489 & n[0]) | (8 & n[1]) && (o.$$scope = { dirty: n, ctx: e }),
                t.$set(o));
              let i = {};
              ((278 & n[0]) | (8 & n[1]) && (i.$$scope = { dirty: n, ctx: e }),
                l.$set(i));
            },
            i(e) {
              o || (nx(t.$$.fragment, e), nx(l.$$.fragment, e), (o = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), ny(l.$$.fragment, e), (o = !1));
            },
            d(e) {
              (nM(t, e), e && tL(n), nM(l, e));
            },
          }
        );
      }
      function aG(e) {
        let t, n;
        return (
          (t = new rY({
            props: {
              title: e[8].t("mdf.tooth.title"),
              $$slots: { default: [aH] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (256 & n[0] && (l.title = e[8].t("mdf.tooth.title")),
                (511 & n[0]) | (8 & n[1]) && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function aV(e, t, n) {
        var l, o;
        let i, r, s, a, c, d, u, h, f;
        let m = o8();
        tu(e, m, (e) => n(15, (f = e)));
        let p = f.mdf.modToothToolType,
          g = f.mdf.following,
          v = !f.mdf.spaceAndIprVisible,
          A = (e) => {
            (null == r || r.SetToothAdjustType(e),
              m.updateMdf({ modToothToolType: e }));
          };
        return (
          (e.$$.update = () => {
            (32768 & e.$$.dirty[0] && n(8, (i = l0(f.language))),
              40960 & e.$$.dirty[0] &&
                (r =
                  null === n(13, (l = f._instance)) || void 0 === l
                    ? void 0
                    : l.editor),
              32768 & e.$$.dirty[0] && n(4, (s = f.stat)),
              2 & e.$$.dirty[0] && m.updateMdf({ following: g }),
              32768 & e.$$.dirty[0] &&
                n(7, (a = f._configuration.toothModifyToolInput)),
              4 & e.$$.dirty[0] && m.updateMdf({ spaceAndIprVisible: !v }),
              32768 & e.$$.dirty[0] &&
                n(6, (c = f._configuration.freedomControlAllowed)),
              32768 & e.$$.dirty[0] && n(3, (d = f.selectedToothSegment)),
              32768 & e.$$.dirty[0] && (u = f.mdf.toothTabType),
              49160 & e.$$.dirty[0] &&
                n(
                  5,
                  (h =
                    null === n(14, (o = f.mdf.toothMoveData)) || void 0 === o
                      ? void 0
                      : o[d]),
                ),
              1 & e.$$.dirty[0] && A(p));
          }),
          [
            p,
            g,
            v,
            d,
            s,
            h,
            c,
            a,
            i,
            m,
            (e) => {
              let { detail: t } = e;
              (null == r || r.ModifyToothLocation(t),
                s({
                  catalog: "医生修改",
                  event: "调整牙齿",
                  value: ey[p],
                  direction: t,
                }));
            },
            (e) => {
              let { detail: t } = e;
              (null == r || r.SetToothMotion(u, eb[d], parseFloat(t) || 0),
                s({
                  catalog: "医生修改面板优化",
                  event: "调整牙齿数值",
                  value: t,
                }));
            },
            (e) => {
              let { detail: t } = e;
              (null == r || r.SetToothMotion(u, eb[d], parseFloat(t) || 0),
                s({
                  catalog: "医生修改面板优化",
                  event: "调整牙齿方向",
                  value: t,
                }));
            },
            l,
            o,
            f,
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(0, (p = e));
            },
            function (e) {
              n(1, (g = e));
            },
            () =>
              s({
                catalog: "医生修改",
                event: "切换邻牙随动开关",
                value: g ? "on" : "off",
              }),
            function (e) {
              n(2, (v = e));
            },
            () =>
              s({
                catalog: "医生修改",
                event: "隐藏+/x",
                value: v ? "on" : "off",
              }),
          ]
        );
      }
      class aZ extends nk {
        constructor(e) {
          (super(), nD(this, e, aV, aG, ta, {}, null, [-1, -1]));
        }
      }
      function aF(e) {
        tI(
          e,
          "svelte-1m1h0fh",
          ".sm-title.svelte-1m1h0fh{display:flex;flex-flow:row nowrap;align-items:center;color:#999;font-size:14px;line-height:20px;margin-bottom:6px}",
        );
      }
      function aJ(e) {
        let t, n;
        let l = e[2].default,
          o = th(l, e, e[1], null);
        return {
          c() {
            ((t = tR("div")), o && o.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            (o && o.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-title svelte-1m1h0fh"), tG(t, "style", e[0]));
          },
          m(e, l) {
            (tk(e, t, l), o && o.m(t, null), (n = !0));
          },
          p(e, i) {
            let [r] = i;
            (o &&
              o.p &&
              (!n || 2 & r) &&
              tp(o, l, e, e[1], n ? tm(l, e[1], r, null) : tg(e[1]), null),
              (!n || 1 & r) && tG(t, "style", e[0]));
          },
          i(e) {
            n || (nx(o, e), (n = !0));
          },
          o(e) {
            (ny(o, e), (n = !1));
          },
          d(e) {
            (e && tL(t), o && o.d(e));
          },
        };
      }
      function aY(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          { style: i = "" } = t;
        return (
          (e.$$set = (e) => {
            ("style" in e && n(0, (i = e.style)),
              "$$scope" in e && n(1, (o = e.$$scope)));
          }),
          [i, o, l]
        );
      }
      class aK extends nk {
        constructor(e) {
          (super(), nD(this, e, aY, aJ, ta, { style: 0 }, aF));
        }
      }
      function aW(e) {
        tI(
          e,
          "svelte-1h071k0",
          ".sm-new-label.svelte-1h071k0{position:absolute;right:8px;top:2px;font-size:12px;line-height:12px;padding:2px;border-radius:999px;transform-origin:100% 50%;transform:scale(0.7);background-color:#ed2e7e;color:#fff}.sm-attach-box.svelte-1h071k0{width:58.5px;height:36px;display:flex;flex-flow:row nowrap;justify-content:center;border-radius:5px;align-items:center;position:relative;border:1px solid transparent}.sm-attach-box.svelte-1h071k0:hover{border:1px solid #0086cd;cursor:grab}.sm-dragging-attach.svelte-1h071k0{background-size:contain;background-repeat:no-repeat;background-position:center;position:absolute;left:0;top:0;z-index:50;width:36px;height:36px}",
        );
      }
      let aq = (e) => ({ active: 16 & e }),
        aQ = (e) => ({ active: e[4] });
      function aX(e) {
        let t, n;
        return {
          c() {
            ((t = tR("div")), (n = tB("NEW")), this.h());
          },
          l(e) {
            var l = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(l, "NEW")), l.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-new-label svelte-1h071k0");
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function a_(e) {
        let t, n;
        return (
          (t = new i9({
            props: { $$slots: { default: [a1] }, $$scope: { ctx: e } },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (65604 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function a1(e) {
        let t, n, l, o;
        return {
          c() {
            ((t = tR("div")), this.h());
          },
          l(e) {
            (tV((t = tY(e, "DIV", { class: !0, style: !0 }))).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "class", "sm-dragging-attach svelte-1h071k0"),
              tG(
                t,
                "style",
                (n = "transform:translate3d("
                  .concat(e[6][0], "px,")
                  .concat(e[6][1], "px,0);background-image:url(")
                  .concat(e[2], ");")),
              ));
          },
          m(n, i) {
            (tk(n, t, i),
              l || ((o = tj(t, "contextmenu", tz(e[12]))), (l = !0)));
          },
          p(e, l) {
            68 & l &&
              n !==
                (n = "transform:translate3d("
                  .concat(e[6][0], "px,")
                  .concat(e[6][1], "px,0);background-image:url(")
                  .concat(e[2], ");")) &&
              tG(t, "style", n);
          },
          d(e) {
            (e && tL(t), (l = !1), o());
          },
        };
      }
      function a0(e) {
        let t, n, l, o, i, r, s;
        let a = e[11].default,
          c = th(a, e, e[16], aQ),
          d = e[1] && aX(),
          u = e[5] && a_(e);
        return {
          c() {
            ((t = tR("div")),
              c && c.c(),
              (n = tP()),
              d && d.c(),
              (l = tP()),
              u && u.c(),
              (o = tU()),
              this.h());
          },
          l(e) {
            var i = tV((t = tY(e, "DIV", { title: !0, class: !0 })));
            (c && c.l(i),
              (n = tq(i)),
              d && d.l(i),
              i.forEach(tL),
              (l = tq(e)),
              u && u.l(e),
              (o = tU()),
              this.h());
          },
          h() {
            (tG(t, "title", e[0]),
              tG(t, "class", "sm-attach-box svelte-1h071k0"));
          },
          m(a, h) {
            (tk(a, t, h),
              c && c.m(t, null),
              tD(t, n),
              d && d.m(t, null),
              e[13](t),
              tk(a, l, h),
              u && u.m(a, h),
              tk(a, o, h),
              (i = !0),
              r ||
                ((s = [
                  tj(t, "mousedown", e[8]),
                  tj(t, "mouseenter", e[14]),
                  tj(t, "mouseleave", e[15]),
                ]),
                (r = !0)));
          },
          p(e, n) {
            let [l] = n;
            (c &&
              c.p &&
              (!i || 65552 & l) &&
              tp(c, a, e, e[16], i ? tm(a, e[16], l, aq) : tg(e[16]), aQ),
              e[1]
                ? d || ((d = aX()).c(), d.m(t, null))
                : d && (d.d(1), (d = null)),
              (!i || 1 & l) && tG(t, "title", e[0]),
              e[5]
                ? u
                  ? (u.p(e, l), 32 & l && nx(u, 1))
                  : ((u = a_(e)).c(), nx(u, 1), u.m(o.parentNode, o))
                : u &&
                  (nA(),
                  ny(u, 1, 1, () => {
                    u = null;
                  }),
                  nw()));
          },
          i(e) {
            i || (nx(c, e), nx(u), (i = !0));
          },
          o(e) {
            (ny(c, e), ny(u), (i = !1));
          },
          d(n) {
            (n && tL(t),
              c && c.d(n),
              d && d.d(),
              e[13](null),
              n && tL(l),
              u && u.d(n),
              n && tL(o),
              (r = !1),
              tr(s));
          },
        };
      }
      function a2(e, t, n) {
        let l, o, i, r, s, a;
        let { $$slots: c = {}, $$scope: d } = t,
          u = nn(),
          { title: h } = t,
          { type: f } = t,
          { isNew: m = !1 } = t,
          { dragImage: p } = t,
          g = o8();
        tu(e, g, (e) => n(10, (s = e)));
        let v = !1,
          A = !1,
          w = [0, 0],
          x = (e, t) => Math.abs(e) > 10 && Math.abs(t) > 10;
        return (
          ne(() => {
            if (!a) return;
            let e = [0, 0],
              t = (t) => {
                ((e = [t.touches[0].clientX, t.touches[0].clientY]),
                  n(6, (w = [t.touches[0].clientX, t.touches[0].clientY])),
                  t.stopPropagation(),
                  t.preventDefault(),
                  g.updateMdf({ modAttachType: f }),
                  o.PickAttach(f),
                  n(5, (A = !0)),
                  r({
                    catalog: "医生修改",
                    event: "拖拽添加附件",
                    value: eA[f],
                  }));
              },
              l = (e) => {
                (e.stopPropagation(),
                  e.preventDefault(),
                  i.dispatchEvent(
                    new TouchEvent("__touchmove", {
                      touches: Array.from(e.touches),
                    }),
                  ),
                  n(6, (w = [e.touches[0].clientX, e.touches[0].clientY])));
              },
              s = (t) => {
                (t.stopPropagation(),
                  t.preventDefault(),
                  n(5, (A = !1)),
                  x(w[0] - e[0], w[1] - e[1]) &&
                    i.dispatchEvent(new TouchEvent("touchend")),
                  (e = [0, 0]),
                  n(6, (w = [0, 0])));
              };
            return (
              a.addEventListener("touchstart", t),
              a.addEventListener("touchmove", l),
              a.addEventListener("touchend", s),
              () => {
                (a.removeEventListener("touchstart", t),
                  a.removeEventListener("touchmove", l),
                  a.removeEventListener("touchend", s));
              }
            );
          }),
          (e.$$set = (e) => {
            ("title" in e && n(0, (h = e.title)),
              "type" in e && n(9, (f = e.type)),
              "isNew" in e && n(1, (m = e.isNew)),
              "dragImage" in e && n(2, (p = e.dragImage)),
              "$$scope" in e && n(16, (d = e.$$scope)));
          }),
          (e.$$.update = () => {
            (1024 & e.$$.dirty && (l = s._instance.events),
              1024 & e.$$.dirty && (o = s._instance.editor),
              1024 & e.$$.dirty && (i = s._instance.el),
              1024 & e.$$.dirty && (r = s.stat));
          }),
          [
            h,
            m,
            p,
            a,
            v,
            A,
            w,
            g,
            () => {
              (u("onClick"),
                p &&
                  g.tapInstance((e) => {
                    let { el: t, canvas: n } = e,
                      l = "url(".concat(p, ")16 16,auto");
                    ((t.style.cursor = l), (n.style.cursor = l));
                    let o = () => {
                      (document.removeEventListener("mouseup", o),
                        (t.style.cursor = ""),
                        (n.style.cursor = ""));
                    };
                    document.addEventListener("mouseup", o);
                  }),
                (l.mouseState = ep.LEFT),
                g.updateMdf({ modAttachType: f }),
                o.PickAttach(f),
                r({
                  catalog: "医生修改",
                  event: "拖拽添加附件",
                  value: eA[f],
                }));
            },
            f,
            s,
            c,
            function (t) {
              nl.call(this, e, t);
            },
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(3, (a = e));
              });
            },
            () => n(4, (v = !0)),
            () => n(4, (v = !1)),
            d,
          ]
        );
      }
      class a3 extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              a2,
              a0,
              ta,
              { title: 0, type: 9, isNew: 1, dragImage: 2 },
              aW,
            ));
        }
      }
      function a4(e) {
        tI(
          e,
          "svelte-jkg9ja",
          ".sm-attach-box.svelte-jkg9ja{width:58.5px;height:36px;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;position:relative}.sm-attach-box.svelte-jkg9ja:hover{cursor:grab}",
        );
      }
      let a7 = (e) => ({ active: 2 & e }),
        a6 = (e) => ({ active: e[1] });
      function a5(e) {
        let t, n, l, o;
        let i = e[4].default,
          r = th(i, e, e[3], a6);
        return {
          c() {
            ((t = tR("div")), r && r.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { title: !0, class: !0 })));
            (r && r.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "title", e[0]),
              tG(t, "class", "sm-attach-box svelte-jkg9ja"));
          },
          m(i, s) {
            (tk(i, t, s),
              r && r.m(t, null),
              (n = !0),
              l ||
                ((o = [
                  tj(t, "mousedown", tH(e[5])),
                  tj(t, "touchstart", tH(e[6])),
                  tj(t, "touchend", tH(e[7])),
                  tj(t, "dragstart", tH(e[8])),
                  tj(t, "mouseenter", e[9]),
                  tj(t, "mouseleave", e[10]),
                  tj(t, "click", e[11]),
                ]),
                (l = !0)));
          },
          p(e, l) {
            let [o] = l;
            (r &&
              r.p &&
              (!n || 10 & o) &&
              tp(r, i, e, e[3], n ? tm(i, e[3], o, a7) : tg(e[3]), a6),
              (!n || 1 & o) && tG(t, "title", e[0]));
          },
          i(e) {
            n || (nx(r, e), (n = !0));
          },
          o(e) {
            (ny(r, e), (n = !1));
          },
          d(e) {
            (e && tL(t), r && r.d(e), (l = !1), tr(o));
          },
        };
      }
      function a8(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          i = nn(),
          { title: r } = t,
          s = !1;
        return (
          (e.$$set = (e) => {
            ("title" in e && n(0, (r = e.title)),
              "$$scope" in e && n(3, (o = e.$$scope)));
          }),
          [
            r,
            s,
            i,
            o,
            l,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => n(1, (s = !0)),
            () => n(1, (s = !1)),
            () => i("click"),
          ]
        );
      }
      class a9 extends nk {
        constructor(e) {
          (super(), nD(this, e, a8, a5, ta, { title: 0 }, a4));
        }
      }
      function ce(e) {
        let t, n, l, o, i, r, s, a, c;
        return {
          c() {
            ((t = tS("path")),
              (n = tP()),
              (l = tS("path")),
              (o = tP()),
              (i = tS("path")),
              (r = tP()),
              (s = tS("path")),
              (a = tP()),
              (c = tS("path")),
              this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, stroke: !0, "stroke-width": !0 })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", { d: !0, stroke: !0, "stroke-width": !0 })),
              ).forEach(tL),
              (o = tq(e)),
              tV(
                (i = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                })),
              ).forEach(tL),
              (r = tq(e)),
              tV(
                (s = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                })),
              ).forEach(tL),
              (a = tq(e)),
              tV(
                (c = tK(e, "path", {
                  d: !0,
                  stroke: !0,
                  "stroke-width": !0,
                  "stroke-linecap": !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M13.956 9.22672L14.2903 3.3335H3.16979L3.50412 9.22672C3.62426 11.3444 5.37657 13.0002 7.4977 13.0002H9.96239C12.0835 13.0002 13.8358 11.3444 13.956 9.22672Z",
            ),
              tG(t, "stroke", e[0]),
              tG(t, "stroke-width", "2"),
              tG(
                l,
                "d",
                "M9.03906 1C9.97098 1 10.754 1.63739 10.9761 2.5H6.48348C6.7055 1.63739 7.48855 1 8.42047 1H9.03906Z",
              ),
              tG(l, "stroke", e[0]),
              tG(l, "stroke-width", "2"),
              tG(i, "d", "M16.0098 2.9165H1.44887"),
              tG(i, "stroke", e[0]),
              tG(i, "stroke-width", "2"),
              tG(i, "stroke-linecap", "round"),
              tG(s, "d", "M6.74414 6.4165V9.33317"),
              tG(s, "stroke", e[0]),
              tG(s, "stroke-width", "2"),
              tG(s, "stroke-linecap", "round"),
              tG(c, "d", "M10.7148 6.4165V9.33317"),
              tG(c, "stroke", e[0]),
              tG(c, "stroke-width", "2"),
              tG(c, "stroke-linecap", "round"));
          },
          m(e, d) {
            (tk(e, t, d),
              tk(e, n, d),
              tk(e, l, d),
              tk(e, o, d),
              tk(e, i, d),
              tk(e, r, d),
              tk(e, s, d),
              tk(e, a, d),
              tk(e, c, d));
          },
          p(e, n) {
            (1 & n && tG(t, "stroke", e[0]),
              1 & n && tG(l, "stroke", e[0]),
              1 & n && tG(i, "stroke", e[0]),
              1 & n && tG(s, "stroke", e[0]),
              1 & n && tG(c, "stroke", e[0]));
          },
          d(e) {
            (e && tL(t),
              e && tL(n),
              e && tL(l),
              e && tL(o),
              e && tL(i),
              e && tL(r),
              e && tL(s),
              e && tL(a),
              e && tL(c));
          },
        };
      }
      function ct(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 18 14",
              $$slots: { default: [ce] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cn(e, t, n) {
        let { color: l = "#A0A3BD" } = t,
          { width: o = 18 } = t,
          { height: i = 14 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class cl extends nk {
        constructor(e) {
          (super(),
            nD(this, e, cn, ct, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function co(e) {
        tI(
          e,
          "svelte-1olkea5",
          ".attach-del.svelte-1olkea5{cursor:pointer;width:100%;height:38px;border:1px solid #d9dbe9;box-sizing:border-box;border-radius:8px;display:flex;justify-content:center;align-items:center;font-size:12px;color:#a0a3bd;margin-top:12px}.selectedAttach.svelte-1olkea5{color:#4e4b66}.selectedAttach.svelte-1olkea5:hover{border:1px solid #0086cd}.del-text.svelte-1olkea5{margin-left:5px}",
        );
      }
      function ci(e) {
        let t, n, l, o, i, r, s, a, c, d;
        let u = e[2].t("mdf.attachment.removeText") + "";
        return (
          (l = new cl({ props: { color: e[1] ? "#4e4b66" : "#A0A3BD" } })),
          {
            c() {
              ((t = tR("div")),
                (n = tR("div")),
                n$(l.$$.fragment),
                (o = tP()),
                (i = tR("div")),
                (r = tB(u)),
                this.h());
            },
            l(e) {
              var s = tV((t = tY(e, "DIV", { title: !0 }))),
                a = tV((n = tY(s, "DIV", { class: !0 })));
              (nI(l.$$.fragment, a), (o = tq(a)));
              var c = tV((i = tY(a, "DIV", { class: !0 })));
              ((r = tW(c, u)),
                c.forEach(tL),
                a.forEach(tL),
                s.forEach(tL),
                this.h());
            },
            h() {
              (tG(i, "class", "del-text svelte-1olkea5"),
                tG(
                  n,
                  "class",
                  (s =
                    tv(e[1] ? "attach-del selectedAttach" : "attach-del") +
                    " svelte-1olkea5"),
                ),
                tG(t, "title", e[0]));
            },
            m(s, u) {
              (tk(s, t, u),
                tD(t, n),
                nO(l, n, null),
                tD(n, o),
                tD(n, i),
                tD(i, r),
                (a = !0),
                c ||
                  ((d = [
                    tj(t, "mousedown", tH(e[6])),
                    tj(t, "touchstart", tH(e[7])),
                    tj(t, "touchend", tH(e[8])),
                    tj(t, "click", e[4]),
                  ]),
                  (c = !0)));
            },
            p(e, o) {
              let [i] = o,
                c = {};
              (2 & i && (c.color = e[1] ? "#4e4b66" : "#A0A3BD"),
                l.$set(c),
                (!a || 4 & i) &&
                  u !== (u = e[2].t("mdf.attachment.removeText") + "") &&
                  tX(r, u),
                (!a ||
                  (2 & i &&
                    s !==
                      (s =
                        tv(e[1] ? "attach-del selectedAttach" : "attach-del") +
                        " svelte-1olkea5"))) &&
                  tG(n, "class", s),
                (!a || 1 & i) && tG(t, "title", e[0]));
            },
            i(e) {
              a || (nx(l.$$.fragment, e), (a = !0));
            },
            o(e) {
              (ny(l.$$.fragment, e), (a = !1));
            },
            d(e) {
              (e && tL(t), nM(l), (c = !1), tr(d));
            },
          }
        );
      }
      function cr(e, t, n) {
        let l, o, i, r, s;
        let { title: a } = t,
          c = o8();
        return (
          tu(e, c, (e) => n(5, (s = e))),
          (e.$$set = (e) => {
            "title" in e && n(0, (a = e.title));
          }),
          (e.$$.update = () => {
            (32 & e.$$.dirty && n(2, (l = l0(s.language))),
              32 & e.$$.dirty && (o = s._instance.editor),
              32 & e.$$.dirty && (i = s.stat),
              32 & e.$$.dirty && n(1, (r = s.mdf.isAttachPicked)));
          }),
          [
            a,
            r,
            l,
            c,
            () => {
              r &&
                (o.DeleteAttach(),
                i({ catalog: "医生修改", event: "点击删除附件按钮" }));
            },
            s,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class cs extends nk {
        constructor(e) {
          (super(), nD(this, e, cr, ci, ta, { title: 0 }, co));
        }
      }
      function ca(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("path")), (n = tP()), (l = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M0.542162 4.27286C0.384134 1.96171 2.21629 0 4.53284 0H11.9672C14.2837 0 16.1159 1.96171 15.9578 4.27287L14.7271 22.2729C14.5836 24.3712 12.8396 26 10.7364 26H5.76361C3.66038 26 1.91641 24.3712 1.77293 22.2729L0.542162 4.27286Z",
            ),
              tG(t, "fill", e[4]),
              tG(t, "fill-rule", "evenodd"),
              tG(
                l,
                "d",
                "M4.54216 4.27286C4.38413 1.96171 6.21629 0 8.53284 0H15.9672C18.2837 0 20.1159 1.96171 19.9578 4.27287L18.7271 22.2729C18.5836 24.3712 16.8396 26 14.7364 26H9.76361C7.66038 26 5.91641 24.3712 5.77293 22.2729L4.54216 4.27286Z",
              ),
              tG(l, "fill", e[3]),
              tG(l, "fill-rule", "evenodd"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (16 & n && tG(t, "fill", e[4]), 8 & n && tG(l, "fill", e[3]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function cc(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 21 26",
              $$slots: { default: [ca] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                56 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cd(e, t, n) {
        let l, o;
        let { width: i = 21 } = t,
          { height: r = 26 } = t,
          { style: s = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (i = e.width)),
              "height" in e && n(1, (r = e.height)),
              "style" in e && n(2, (s = e.style)));
          }),
          n(4, (l = "#A9555A")),
          n(3, (o = "#E9738C")),
          [i, r, s, o, l]
        );
      }
      class cu extends nk {
        constructor(e) {
          (super(), nD(this, e, cd, cc, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function ch(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M0.292162 4.27286C0.134134 1.96171 1.96629 0 4.28284 0H11.7172C14.0337 0 15.8659 1.96171 15.7078 4.27287L14.4771 22.2729C14.3336 24.3712 12.5896 26 10.4864 26H5.51361C3.41038 26 1.66641 24.3712 1.52293 22.2729L0.292162 4.27286Z",
            ),
              tG(t, "fill", e[3]),
              tG(t, "fill-rule", "evenodd"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "fill", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cf(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 16 26",
              $$slots: { default: [ch] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cm(e, t, n) {
        let l;
        let { width: o = 16 } = t,
          { height: i = 26 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#E9738C")),
          [o, i, r, l]
        );
      }
      class cp extends nk {
        constructor(e) {
          (super(), nD(this, e, cm, cf, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cg(e) {
        let t;
        return {
          c() {
            ((t = tS("rect")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "rect", {
                width: !0,
                height: !0,
                rx: !0,
                transform: !0,
                fill: !0,
                stroke: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "width", "3.27273"),
              tG(t, "height", "24"),
              tG(t, "rx", "1.63636"),
              tG(
                t,
                "transform",
                "matrix(-0.707107 0.707107 0.707107 0.707107 2.42188 0.357422)",
              ),
              tG(t, "fill", e[3]),
              tG(t, "stroke", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            (8 & n && tG(t, "fill", e[3]), 8 & n && tG(t, "stroke", e[3]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cv(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 20 20",
              $$slots: { default: [cg] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cA(e, t, n) {
        let l;
        let { width: o = 20 } = t,
          { height: i = 20 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#46A5E1")),
          [o, i, r, l]
        );
      }
      class cw extends nk {
        constructor(e) {
          (super(), nD(this, e, cA, cv, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cx(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                d: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                fill: !0,
                "fill-rule": !0,
                stroke: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M22.5 16V12C22.5 6.47715 18.0228 2 12.5 2V2C6.97715 2 2.5 6.47715 2.5 12V16",
            ),
              tG(t, "stroke-width", "4"),
              tG(t, "stroke-linecap", "round"),
              tG(t, "fill", "none"),
              tG(t, "fill-rule", "evenodd"),
              tG(t, "stroke", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "stroke", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cy(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 25 18",
              $$slots: { default: [cx] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cE(e, t, n) {
        let l;
        let { width: o = 25 } = t,
          { height: i = 18 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#46A5E1")),
          [o, i, r, l]
        );
      }
      class cC extends nk {
        constructor(e) {
          (super(), nD(this, e, cE, cy, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cb(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                stroke: !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "stroke", e[3]),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M2 5C2 2.51472 4.01472 0.5 6.5 0.5H15.5C17.9853 0.5 20 2.51472 20 5C20 5.82843 19.3284 6.5 18.5 6.5H13V9.5H20C21.1046 9.5 22 10.3954 22 11.5V13.5C22 14.6046 21.1046 15.5 20 15.5H2C0.89543 15.5 0 14.6046 0 13.5V11.5C0 10.3954 0.895431 9.5 2 9.5H9V6.5H3.5C2.67157 6.5 2 5.82843 2 5Z",
              ),
              tG(t, "fill", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            (8 & n && tG(t, "stroke", e[3]), 8 & n && tG(t, "fill", e[3]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cT(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 22 16",
              $$slots: { default: [cb] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                40 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function c$(e, t, n) {
        let l;
        let { active: o = !1 } = t,
          { width: i = 21 } = t,
          { height: r = 15 } = t,
          { style: s = "" } = t;
        return (
          (e.$$set = (e) => {
            ("active" in e && n(4, (o = e.active)),
              "width" in e && n(0, (i = e.width)),
              "height" in e && n(1, (r = e.height)),
              "style" in e && n(2, (s = e.style)));
          }),
          (e.$$.update = () => {
            16 & e.$$.dirty && n(3, (l = o ? "#fff" : "#46a5e1"));
          }),
          [i, r, s, l, o]
        );
      }
      class cI extends nk {
        constructor(e) {
          (super(),
            nD(this, e, c$, cT, ta, {
              active: 4,
              width: 0,
              height: 1,
              style: 2,
            }));
        }
      }
      function cO(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("path")), (n = tP()), (l = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", {
                  "fill-rule": !0,
                  "clip-rule": !0,
                  d: !0,
                  fill: !0,
                })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M7.43081 0.5C4.69681 0.5 2.48047 2.71634 2.48047 5.45034C2.48047 6.36167 3.21925 7.10045 4.13059 7.10045H10.1797V9.8046C11.2495 8.44899 12.8031 7.49285 14.58 7.19659V7.10045H15.6456C15.6824 7.09989 15.7193 7.09961 15.7563 7.09961H20.685C21.5717 7.07147 22.2818 6.34383 22.2818 5.45034C22.2818 2.71634 20.0655 0.5 17.3315 0.5H7.43081ZM9.23023 17.0008C8.86084 16.1414 8.65625 15.1944 8.65625 14.1996C8.65625 12.8021 9.05999 11.499 9.75718 10.4004H2.28125C1.17668 10.4004 0.28125 11.2958 0.28125 12.4004V15.0008C0.28125 16.1054 1.17668 17.0008 2.28125 17.0008H9.23023Z",
              ),
              tG(t, "fill", "#46A5E1"),
              tG(l, "fill-rule", "evenodd"),
              tG(l, "clip-rule", "evenodd"),
              tG(
                l,
                "d",
                "M16.7188 9.5C13.9573 9.5 11.7188 11.7386 11.7188 14.5C11.7188 17.2614 13.9573 19.5 16.7188 19.5H22.7188C25.4802 19.5 27.7188 17.2614 27.7188 14.5C27.7188 11.7386 25.4802 9.5 22.7188 9.5H16.7188ZM16.7246 17.5C18.3815 17.5 19.7246 16.1569 19.7246 14.5C19.7246 12.8431 18.3815 11.5 16.7246 11.5C15.0678 11.5 13.7246 12.8431 13.7246 14.5C13.7246 16.1569 15.0678 17.5 16.7246 17.5Z",
              ),
              tG(l, "fill", "#A0A3BD"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p: tn,
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function cM(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 28 20",
              $$slots: { default: [cO] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                8 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cD(e, t, n) {
        let { width: l = 28 } = t,
          { height: o = 20 } = t,
          { style: i = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (l = e.width)),
              "height" in e && n(1, (o = e.height)),
              "style" in e && n(2, (i = e.style)));
          }),
          [l, o, i]
        );
      }
      class ck extends nk {
        constructor(e) {
          (super(), nD(this, e, cD, cM, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cL(e) {
        let t, n, l;
        return {
          c() {
            ((t = tS("path")), (n = tP()), (l = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
            ).forEach(tL),
              (n = tq(e)),
              tV(
                (l = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
              ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M22.4771 4.29216C24.7883 4.13413 26.75 5.96629 26.75 8.28284L26.75 15.7172C26.75 18.0337 24.7883 19.8659 22.4771 19.7078L4.47713 18.4771C2.37879 18.3336 0.749999 16.5896 0.75 14.4864L0.75 9.51361C0.75 7.41037 2.3788 5.66641 4.47713 5.52293L22.4771 4.29216Z",
            ),
              tG(t, "fill", e[4]),
              tG(t, "fill-rule", "evenodd"),
              tG(
                l,
                "d",
                "M22.4771 0.292161C24.7883 0.134134 26.75 1.96629 26.75 4.28284L26.75 11.7172C26.75 14.0337 24.7883 15.8659 22.4771 15.7078L4.47713 14.4771C2.37879 14.3336 0.749999 12.5896 0.75 10.4864L0.75 5.51361C0.75 3.41037 2.3788 1.66641 4.47713 1.52293L22.4771 0.292161Z",
              ),
              tG(l, "fill", e[3]),
              tG(l, "fill-rule", "evenodd"));
          },
          m(e, o) {
            (tk(e, t, o), tk(e, n, o), tk(e, l, o));
          },
          p(e, n) {
            (16 & n && tG(t, "fill", e[4]), 8 & n && tG(l, "fill", e[3]));
          },
          d(e) {
            (e && tL(t), e && tL(n), e && tL(l));
          },
        };
      }
      function cN(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 27 20",
              $$slots: { default: [cL] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                56 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cR(e, t, n) {
        let l, o;
        let { width: i = 27 } = t,
          { height: r = 20 } = t,
          { style: s = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (i = e.width)),
              "height" in e && n(1, (r = e.height)),
              "style" in e && n(2, (s = e.style)));
          }),
          n(4, (l = "#A9555A")),
          n(3, (o = "#E9738C")),
          [i, r, s, o, l]
        );
      }
      class cS extends nk {
        constructor(e) {
          (super(), nD(this, e, cR, cN, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cB(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M22.2271 0.292161C24.5383 0.134134 26.5 1.96629 26.5 4.28284L26.5 11.7172C26.5 14.0337 24.5383 15.8659 22.2271 15.7078L4.22713 14.4771C2.12879 14.3336 0.499999 12.5896 0.5 10.4864L0.5 5.51361C0.5 3.41037 2.1288 1.66641 4.22713 1.52293L22.2271 0.292161Z",
            ),
              tG(t, "fill", e[3]),
              tG(t, "fill-rule", "evenodd"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "fill", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cP(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 27 16",
              $$slots: { default: [cB] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cU(e, t, n) {
        let l;
        let { width: o = 27 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#E9738C")),
          [o, i, r, l]
        );
      }
      class cj extends nk {
        constructor(e) {
          (super(), nD(this, e, cU, cP, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cz(e) {
        let t;
        return {
          c() {
            ((t = tS("rect")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "rect", {
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                rx: !0,
                transform: !0,
                fill: !0,
                "fill-rule": !0,
                stroke: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "x", "17.5781"),
              tG(t, "y", "0.357422"),
              tG(t, "width", "3.27273"),
              tG(t, "height", "24"),
              tG(t, "rx", "1.63636"),
              tG(t, "transform", "rotate(45 17.5781 0.357422)"),
              tG(t, "fill", e[3]),
              tG(t, "fill-rule", "evenodd"),
              tG(t, "stroke", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            (8 & n && tG(t, "fill", e[3]), 8 & n && tG(t, "stroke", e[3]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cH(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 20 20",
              $$slots: { default: [cz] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cG(e, t, n) {
        let l;
        let { width: o = 20 } = t,
          { height: i = 20 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#46A5E1")),
          [o, i, r, l]
        );
      }
      class cV extends nk {
        constructor(e) {
          (super(), nD(this, e, cG, cH, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cZ(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV((t = tK(e, "path", { d: !0, fill: !0 }))).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M0.0466671 11.1647C0.894684 8.28702 2.10351 5.00963 4.66614 2.5364C6.39234 0.870406 8.17465 0.0583141 10.2401 0.0219239C15.6661 -0.0736774 18.4641 0.0934427 20.0212 1.53966C21.4483 2.86517 24.1662 5.5419 23.0837 12.5419C22.9144 13.6367 22.1662 15.0419 19.28 15.0654H2.59514C0.659836 15.0419 -0.220047 13.5419 0.0466671 11.1647Z",
            ),
              tG(t, "fill", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "fill", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cF(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 24 16",
              $$slots: { default: [cZ] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cJ(e, t, n) {
        let l;
        let { width: o = 24 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#E9738C")),
          [o, i, r, l]
        );
      }
      class cY extends nk {
        constructor(e) {
          (super(), nD(this, e, cJ, cF, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cK(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV((t = tK(e, "path", { d: !0, fill: !0 }))).forEach(tL),
              this.h());
          },
          h() {
            (tG(
              t,
              "d",
              "M18.6177 9.5C18.1527 7.119 14.5657 1.49992 12.0542 0.289787C11.2754 0.0997717 10.5956 5.73812e-10 9.5729 5.73812e-10C3.1518 -7.82348e-05 -0.234239 8 0.0126355 10.7675C0.042648 11.104 0.0653633 11.3842 0.0815701 11.6197C0.168302 12.8796 0.890269 14 2.15322 14L13.6443 14C18.1957 14 19.0304 11.6136 18.6177 9.5Z",
            ),
              tG(t, "fill", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "fill", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function cW(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 19 14",
              $$slots: { default: [cK] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function cq(e, t, n) {
        let l;
        let { width: o = 19 } = t,
          { height: i = 14 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#E9738C")),
          [o, i, r, l]
        );
      }
      class cQ extends nk {
        constructor(e) {
          (super(), nD(this, e, cq, cW, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function cX(e) {
        let t;
        return {
          c() {
            ((t = tS("ellipse")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "ellipse", {
                cx: !0,
                cy: !0,
                rx: !0,
                ry: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "cx", "8.5"),
              tG(t, "cy", "12"),
              tG(t, "rx", "8"),
              tG(t, "ry", "12"),
              tG(t, "fill", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "fill", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function c_(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 17 24",
              $$slots: { default: [cX] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function c1(e, t, n) {
        let l;
        let { width: o = 17 } = t,
          { height: i = 24 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#E9738C")),
          [o, i, r, l]
        );
      }
      class c0 extends nk {
        constructor(e) {
          (super(), nD(this, e, c1, c_, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function c2(e) {
        let t;
        return {
          c() {
            ((t = tS("ellipse")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "ellipse", {
                cx: !0,
                cy: !0,
                rx: !0,
                ry: !0,
                transform: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "cx", "12"),
              tG(t, "cy", "8"),
              tG(t, "rx", "8"),
              tG(t, "ry", "12"),
              tG(t, "transform", "rotate(90 12 8)"),
              tG(t, "fill", e[3]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            8 & n && tG(t, "fill", e[3]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function c3(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[0],
              height: e[1],
              style: e[2],
              viewBox: "0 0 24 16",
              $$slots: { default: [c2] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (1 & l && (o.width = e[0]),
                2 & l && (o.height = e[1]),
                4 & l && (o.style = e[2]),
                24 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function c4(e, t, n) {
        let l;
        let { width: o = 24 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (o = e.width)),
              "height" in e && n(1, (i = e.height)),
              "style" in e && n(2, (r = e.style)));
          }),
          n(3, (l = "#E9738C")),
          [o, i, r, l]
        );
      }
      class c7 extends nk {
        constructor(e) {
          (super(), nD(this, e, c4, c3, ta, { width: 0, height: 1, style: 2 }));
        }
      }
      function c6(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", {
                "fill-rule": !0,
                "clip-rule": !0,
                d: !0,
                fill: !0,
              })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "fill-rule", "evenodd"),
              tG(t, "clip-rule", "evenodd"),
              tG(
                t,
                "d",
                "M7.99984 15.3334C12.0499 15.3334 15.3332 12.0502 15.3332 8.00008C15.3332 3.94999 12.0499 0.666748 7.99984 0.666748C3.94975 0.666748 0.666504 3.94999 0.666504 8.00008C0.666504 12.0502 3.94975 15.3334 7.99984 15.3334ZM10.6649 7.05773C10.9632 6.5378 11.0923 5.9094 10.9898 5.192C10.881 4.43069 10.511 3.8484 9.94743 3.48975C9.42813 3.15929 8.84602 3.08341 8.39269 3.08341C7.9281 3.08342 7.49587 3.16341 7.19376 3.23634C7.03924 3.27364 6.91039 3.31116 6.81793 3.34013C6.77155 3.35467 6.73388 3.3672 6.70623 3.37668L6.6723 3.38851L6.66119 3.3925L6.65715 3.39397L6.65551 3.39457L6.65479 3.39484C6.65445 3.39496 6.65413 3.39508 6.99984 4.33342L6.65413 3.39508C6.1359 3.58601 5.87057 4.1609 6.0615 4.67913C6.25206 5.19637 6.82512 5.46168 7.34257 5.27285C7.34259 5.27285 7.34261 5.27284 7.34263 5.27283C7.3429 5.27274 7.34316 5.27264 7.34342 5.27254L7.34296 5.27272L7.35455 5.26868C7.3668 5.26448 7.38773 5.25748 7.41612 5.24858C7.47322 5.23069 7.55865 5.2057 7.66305 5.1805C7.87881 5.12842 8.143 5.08342 8.3927 5.08342C8.65366 5.08341 8.80369 5.13254 8.87368 5.17707L8.87567 5.17834C8.90313 5.19566 8.97663 5.24204 9.00989 5.47484C9.05307 5.77711 8.99362 5.95177 8.93012 6.06246C8.8576 6.18886 8.73439 6.30738 8.55917 6.41298C7.88592 6.81873 6.99984 7.62827 6.99984 8.81975V9.33345C6.99984 9.88397 7.44469 10.3306 7.99454 10.3334C7.44469 10.3363 6.99984 10.7829 6.99984 11.3334V11.6668C6.99984 12.219 7.44755 12.6668 7.99984 12.6668C8.55212 12.6668 8.99984 12.219 8.99984 11.6668V11.3334C8.99984 10.7829 8.55498 10.3363 8.00514 10.3334C8.55498 10.3306 8.99984 9.88397 8.99984 9.33345V8.81975C8.99984 8.75621 9.02232 8.66035 9.12286 8.52726C9.22661 8.38993 9.38948 8.24771 9.59152 8.12594C9.96374 7.90162 10.3756 7.56195 10.6649 7.05773ZM7.34342 5.27254C7.34393 5.27236 7.34444 5.27217 7.34495 5.27198L7.34441 5.27218L7.34352 5.27251L7.34342 5.27254Z",
              ),
              tG(t, "fill", e[0]));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function c5(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 17.5 17.5",
              $$slots: { default: [c6] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function c8(e, t, n) {
        let { color: l = "#a0a3bd" } = t,
          { width: o = 16 } = t,
          { height: i = 16 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class c9 extends nk {
        constructor(e) {
          (super(),
            nD(this, e, c8, c5, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function de(e) {
        tI(
          e,
          "svelte-1o90k3r",
          ".newHint.svelte-1o90k3r{position:relative}.sm-attach-list.svelte-1o90k3r{display:flex;flex-flow:row wrap;justify-content:space-between}.sm-space-6.svelte-1o90k3r{width:100%;margin-top:6px}.sm-title.svelte-1o90k3r,.sm-help.svelte-1o90k3r{display:flex;flex-flow:row nowrap;align-items:center}.sm-help.svelte-1o90k3r{margin-left:4px}",
        );
      }
      function dt(e) {
        let t, n;
        let l = e[11].t("mdf.attachment.entity") + "";
        return {
          c() {
            ((t = tR("span")), (n = tB(l)));
          },
          l(e) {
            var o = tV((t = tY(e, "SPAN", {})));
            ((n = tW(o, l)), o.forEach(tL));
          },
          m(l, o) {
            (tk(l, t, o), tD(t, n), e[19](t));
          },
          p(e, t) {
            2048 & t &&
              l !== (l = e[11].t("mdf.attachment.entity") + "") &&
              tX(n, l);
          },
          d(n) {
            (n && tL(t), e[19](null));
          },
        };
      }
      function dn(e) {
        let t, n;
        return (
          (t = new cu({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dl(e) {
        let t, n;
        return (
          (t = new cS({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function di(e) {
        let t, n;
        return (
          (t = new cp({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dr(e) {
        let t, n;
        return (
          (t = new cj({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ds(e) {
        let t, n, l, o, i, r;
        return (
          (l = new a3({
            props: {
              title: e[11].t("mdf.attachment.ellipse_vertical"),
              isNew: !e[1] && !e[5],
              type: eA.Ellipse_Vertical,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAYCAYAAAAcYhYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF0SURBVHgBrZRNToNQEIBnhtZ1N2prTMQbeAQ8gUewnkDaisZV05Ux2NKewF7BG+AJ9AZiYoJxY92ZwHvjezSQhtrIj9+CwAvzMW+GNwi/EF55phHJc0DoMnALAAME8EWDRp3bXpB/H/ML733XJqThMngdwdzbmzjTjRItQEQP/iAvwtUtUCxeoBiLiOTxvnv5rB8oXTVicQ/FaTUkZRknknDgWgxgQQnUFqzQdq1MYgCdQgUMopNMUjaLFEbuJlm9Od5RU4onqMgWgElKYEINIrULUgU6gBpI1SlixhbUAFU8wT9AiLyAGqgOLUgwfkENGsgBgSQfavAd82tyAD8Gd5/qhytfYOZgd+IcLgvLOIdKoK+viUSgfIAKENM8k3TGjq/HX4l4fd78ba//mEmWWtlTosLtZhGdZaHpzY6aUpJ5VEgAYHem18GaRNNWc5PV/NwUrDPVgvb4YpZbXye0b0yi5lB90wJEUwerLOcs49lqBik/jJONGLndSKUAAAAASUVORK5CYII=",
              $$slots: { default: [da] },
              $$scope: { ctx: e },
            },
          })).$on("onClick", e[20]),
          (i = new a3({
            props: {
              isNew: !e[2] && !e[5],
              title: e[11].t("mdf.attachment.ellipse_horizontal"),
              type: eA.Ellipse_Horizontal,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgBtZRLTsNADIZtp2IBm24Q6i69AT0B4QSIE7TcoA9FiBXtCiEoyQ2angBu0PQGvQHZRYJNJCgbMmM8KRuqFClN8q3smdFvjz1jhB289r3mkcVdZn0KiA4CNBm4afYQMBE7EjNCoBfVwGXrfhDl6eD2Qjx6cCzAWwZwoAByPmTFk5bvhrkBTMaHlvLF7EIJ5HbBWtGg7Q+SjW+yvvZsSvVC8rChEjDSDTo3ZSPjUqqeqxM3sI2pmmWh4uG0R8gzqAF5AD2ykEvV/D806B4VfS1FkAY7BDVDEiWEmjB/gxTrOdSElCfI/sHb6HFRfS94dTJ1O1kPlPq+As5mS0XaHGmVXhozC9Dyb6ID3ehI0QIoiRkVX/qzYzQ3/hbv7tMZaz3eZ9hZmsbH3nD5N+AO4v6dDWQ5hHQhri0HbRH5Hdcg4xoTKUWICKu1+pi3/UmSp/MDBUeB0Cv6EksAAAAASUVORK5CYII=",
              $$slots: { default: [dc] },
              $$scope: { ctx: e },
            },
          })).$on("onClick", e[21]),
          {
            c() {
              ((t = tR("div")),
                (n = tP()),
                n$(l.$$.fragment),
                (o = tP()),
                n$(i.$$.fragment),
                this.h());
            },
            l(e) {
              (tV((t = tY(e, "DIV", { class: !0 }))).forEach(tL),
                (n = tq(e)),
                nI(l.$$.fragment, e),
                (o = tq(e)),
                nI(i.$$.fragment, e),
                this.h());
            },
            h() {
              tG(t, "class", "sm-space-6 svelte-1o90k3r");
            },
            m(e, s) {
              (tk(e, t, s),
                tk(e, n, s),
                nO(l, e, s),
                tk(e, o, s),
                nO(i, e, s),
                (r = !0));
            },
            p(e, t) {
              let n = {};
              (2048 & t &&
                (n.title = e[11].t("mdf.attachment.ellipse_vertical")),
                34 & t && (n.isNew = !e[1] && !e[5]),
                33554432 & t && (n.$$scope = { dirty: t, ctx: e }),
                l.$set(n));
              let o = {};
              (36 & t && (o.isNew = !e[2] && !e[5]),
                2048 & t &&
                  (o.title = e[11].t("mdf.attachment.ellipse_horizontal")),
                33554432 & t && (o.$$scope = { dirty: t, ctx: e }),
                i.$set(o));
            },
            i(e) {
              r || (nx(l.$$.fragment, e), nx(i.$$.fragment, e), (r = !0));
            },
            o(e) {
              (ny(l.$$.fragment, e), ny(i.$$.fragment, e), (r = !1));
            },
            d(e) {
              (e && tL(t), e && tL(n), nM(l, e), e && tL(o), nM(i, e));
            },
          }
        );
      }
      function da(e) {
        let t, n;
        return (
          (t = new c0({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dc(e) {
        let t, n;
        return (
          (t = new c7({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dd(e) {
        let t, n;
        return (
          (t = new cY({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function du(e) {
        let t, n;
        return (
          (t = new a3({
            props: {
              title: e[11].t("mdf.attachment.retention_kid"),
              type: eA.Retention_Kid,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD7SURBVHgBrZK7jcJAEIb/WRogQiJzCVwH7uCuA44KzocPnYhwzsNQAXSAqIAWXIIjLIgIEAHgGcYIIYMwL/NlO9r59O/sEDKYu50vAn4AqgikeCwHzDIp+w3vWg9dFqJ/3yrs4qEANjLQplGp+1e7KVs0/AqYp6kkmRBRv9Rxf9M1k04kzONHRAki4szqbeeqzOx4qlcsPEGBqJWEOJNF9e73s6IjRdL5nskMoYUX0aHbC7dXPXhypDqhc/YOMk31idyIFTltW11i4w1oqqrR5XxoFe4hBEuTYYk3YISC5DcD5EUkjHkzMHG8rSUHvASF+j5vzauPcr8Z7gFnz14VFJ76iwAAAABJRU5ErkJggg==",
              $$slots: { default: [dh] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (2048 & n && (l.title = e[11].t("mdf.attachment.retention_kid")),
                33554432 & n && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dh(e) {
        let t, n;
        return (
          (t = new cQ({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function df(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p, g, v, A, w;
        ((t = new aK({
          props: { $$slots: { default: [dt] }, $$scope: { ctx: e } },
        })),
          (o = new a3({
            props: {
              title: e[11].t("mdf.attachment.vRectD"),
              type: eA.Rotation_Distal,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAR1JREFUeNpiYBgFAwwYCSlYGRrVAKTygVgAxFfgl2SQ4RVjYGFiJsb8D0A8Uby3pIEsBwAt7wdSBTC+iqAM2HIywASgIwpJcgDQcgUgdR/G52BhY7CQ0qEktBWBjniALsiER4MCMoeDhZ3S6FbAJsg00Ilw1AH4HICSYH78+UmpXQ9IckD46mVoDvhFke3YcsBoGiDGAQdQytWfX8i158BoNiTXAR+QOX/+/SHXng/kOuAiMufLr+/kOuDiaBog1wHUKg0fUMcBf+nvgOGfBohpFf9H5jvIGZFTEzJSEgKUJsQHlEYBSnP6zvsnpDqgEJ8kwd7FmmuXb4Rq64JKMgtQ5+Tbnx/gEpGPnZtQ5wTk80Rg8G8Y7f8NagAQYABDIE3q4acJVQAAAABJRU5ErkJggg==",
              $$slots: { default: [dn] },
              $$scope: { ctx: e },
            },
          })),
          (r = new a3({
            props: {
              title: e[11].t("mdf.attachment.hRectG"),
              type: eA.Extrusion,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQlJREFUeNpiYBgFo2CkA0ZyNb4s7hEAUgZIQgpQDAP2WLQtFO8tWUDQAUDDQQYlALE8mqEOVPD0AqAjEnE6AGg5yOL5NA55R6AjDoAYTFh8Pp8OUQ8PSSY0iQR6J0Kmgc4Fow4YdcCoA1AccOHV7YF1wIcfnxluvH1Ic0sffHwOZ7OgS774+pbhw8/PDBLcwgwcLGxAzA6XE2DnodhykPl4HQACP/78QlGEDbAwMTPwsHHB+RzMbGAHwx3LwYtp+Ze3YAegmINeVQJxPTE++fPvLzjKcAICHsCaBsJXL3sApBLpkPYO4G2QrAyNommDBOjRRIqbZEBHktUkA1q+YLQlPApGATIACDAAsrZK/YQCm6MAAAAASUVORK5CYII=",
              $$slots: { default: [dl] },
              $$scope: { ctx: e },
            },
          })),
          (d = new a3({
            props: {
              title: e[11].t("mdf.attachment.vRect"),
              type: eA.Vertical_Rect,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMBJREFUeNpiYBgFAwwYiVH0srjHAEj1A7EDkeYeAOJC8d6SCxQ7AGi5ApA6D8QCJHruAxAbAh3xAJ8iJiIMqifDcgaonnpCiohxgAIFUaxADQfQFIw6gBgHPKDA/AfUcMBDChzwcDQNUMMBBygw/8BoFFDDAR8oMJ+gXmKr4//k2A6sCRlH0wC1HEBOcfxgWDlgNA0cJMPsg0MiDTASaxqwMAI1zQ2IVH4BWAgZUjsNOALxAiLULYCqHQVDAwAEGAA3PiX1kPBSYwAAAABJRU5ErkJggg==",
              $$slots: { default: [di] },
              $$scope: { ctx: e },
            },
          })),
          (h = new a3({
            props: {
              title: e[11].t("mdf.attachment.hRect"),
              type: eA.Horizontal_Rect,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAI5JREFUeNpiYhhgwDTqgFEHjDpgoB3AQq7Gl8U9AkDKAElIAYphwB6LtoXivSULkAUYcRgOMigBiOXRDHWggqcXAB2RiNMBQMtBFs+nccg7Ah1xACMNQH0+nw5R74ArESaMZsNRB4w6YMQ7YMGAOgBYPD4AUol0sPfA4K2M6F0dM4zmglEHjDpgxDsAIMAAT48gPRiuolMAAAAASUVORK5CYII=",
              $$slots: { default: [dr] },
              $$scope: { ctx: e },
            },
          })));
        let x = e[7] && ds(e);
        v = new a3({
          props: {
            title: e[11].t("mdf.attachment.retention"),
            type: eA.Retention,
            dragImage:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBtZTBTcNAEEX/jOGEED4hcbM7SAmmg3QQ6MCJhDhaHAEhp4NABdABdABU4L1Z4mQE4mLvDmsbJIKTQ2LvO61Ws/P/fo2GsIYsTv09TyaAGQM0EojfrSIFSGEPisAPhzezu07FquZvZ+lIjLm3jwNsBCmzw8dHl1P1e8P/S/LZ1YkY/bx58xoJuDKP+XkarBSonTPxAr2QgCq96AjUqm0s/bG5R3l8HS0JeJVJtotljYhHyY9Y654rnWFYii/thc0PWveD4++iDMiR+waPZMwoTQRHGCGfrcoEjiDDisWOFBzCdowKOOJT6LWeohc4wCbzFM6nBWtdnkJEYSCaRAS3UvfFn22axYnve/sH6EGhP97D+cVS5N822W7x1B2UewAAAABJRU5ErkJggg==",
            $$slots: { default: [dd] },
            $$scope: { ctx: e },
          },
        });
        let y = e[6] && du(e);
        return {
          c() {
            (n$(t.$$.fragment),
              (n = tP()),
              (l = tR("div")),
              n$(o.$$.fragment),
              (i = tP()),
              n$(r.$$.fragment),
              (s = tP()),
              (a = tR("div")),
              (c = tP()),
              n$(d.$$.fragment),
              (u = tP()),
              n$(h.$$.fragment),
              (f = tP()),
              x && x.c(),
              (m = tP()),
              (p = tR("div")),
              (g = tP()),
              n$(v.$$.fragment),
              (A = tP()),
              y && y.c(),
              this.h());
          },
          l(e) {
            (nI(t.$$.fragment, e), (n = tq(e)));
            var w = tV((l = tY(e, "DIV", { class: !0 })));
            (nI(o.$$.fragment, w),
              (i = tq(w)),
              nI(r.$$.fragment, w),
              (s = tq(w)),
              tV((a = tY(w, "DIV", { class: !0 }))).forEach(tL),
              (c = tq(w)),
              nI(d.$$.fragment, w),
              (u = tq(w)),
              nI(h.$$.fragment, w),
              (f = tq(w)),
              x && x.l(w),
              (m = tq(w)),
              tV((p = tY(w, "DIV", { class: !0 }))).forEach(tL),
              (g = tq(w)),
              nI(v.$$.fragment, w),
              (A = tq(w)),
              y && y.l(w),
              w.forEach(tL),
              this.h());
          },
          h() {
            (tG(a, "class", "sm-space-6 svelte-1o90k3r"),
              tG(p, "class", "sm-space-6 svelte-1o90k3r"),
              tG(l, "class", "sm-attach-list svelte-1o90k3r"));
          },
          m(e, E) {
            (nO(t, e, E),
              tk(e, n, E),
              tk(e, l, E),
              nO(o, l, null),
              tD(l, i),
              nO(r, l, null),
              tD(l, s),
              tD(l, a),
              tD(l, c),
              nO(d, l, null),
              tD(l, u),
              nO(h, l, null),
              tD(l, f),
              x && x.m(l, null),
              tD(l, m),
              tD(l, p),
              tD(l, g),
              nO(v, l, null),
              tD(l, A),
              y && y.m(l, null),
              (w = !0));
          },
          p(e, n) {
            let i = {};
            (33556488 & n && (i.$$scope = { dirty: n, ctx: e }), t.$set(i));
            let s = {};
            (2048 & n && (s.title = e[11].t("mdf.attachment.vRectD")),
              33554432 & n && (s.$$scope = { dirty: n, ctx: e }),
              o.$set(s));
            let a = {};
            (2048 & n && (a.title = e[11].t("mdf.attachment.hRectG")),
              33554432 & n && (a.$$scope = { dirty: n, ctx: e }),
              r.$set(a));
            let c = {};
            (2048 & n && (c.title = e[11].t("mdf.attachment.vRect")),
              33554432 & n && (c.$$scope = { dirty: n, ctx: e }),
              d.$set(c));
            let u = {};
            (2048 & n && (u.title = e[11].t("mdf.attachment.hRect")),
              33554432 & n && (u.$$scope = { dirty: n, ctx: e }),
              h.$set(u),
              e[7]
                ? x
                  ? (x.p(e, n), 128 & n && nx(x, 1))
                  : ((x = ds(e)).c(), nx(x, 1), x.m(l, m))
                : x &&
                  (nA(),
                  ny(x, 1, 1, () => {
                    x = null;
                  }),
                  nw()));
            let f = {};
            (2048 & n && (f.title = e[11].t("mdf.attachment.retention")),
              33554432 & n && (f.$$scope = { dirty: n, ctx: e }),
              v.$set(f),
              e[6]
                ? y
                  ? (y.p(e, n), 64 & n && nx(y, 1))
                  : ((y = du(e)).c(), nx(y, 1), y.m(l, null))
                : y &&
                  (nA(),
                  ny(y, 1, 1, () => {
                    y = null;
                  }),
                  nw()));
          },
          i(e) {
            w ||
              (nx(t.$$.fragment, e),
              nx(o.$$.fragment, e),
              nx(r.$$.fragment, e),
              nx(d.$$.fragment, e),
              nx(h.$$.fragment, e),
              nx(x),
              nx(v.$$.fragment, e),
              nx(y),
              (w = !0));
          },
          o(e) {
            (ny(t.$$.fragment, e),
              ny(o.$$.fragment, e),
              ny(r.$$.fragment, e),
              ny(d.$$.fragment, e),
              ny(h.$$.fragment, e),
              ny(x),
              ny(v.$$.fragment, e),
              ny(y),
              (w = !1));
          },
          d(e) {
            (nM(t, e),
              e && tL(n),
              e && tL(l),
              nM(o),
              nM(r),
              nM(d),
              nM(h),
              x && x.d(),
              nM(v),
              y && y.d());
          },
        };
      }
      function dm(e) {
        let t,
          n = e[11].t("mdf.attachment.traction") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            2048 & l &&
              n !== (n = e[11].t("mdf.attachment.traction") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function dp(e) {
        let t, n;
        return (
          (t = new cV({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dg(e) {
        let t, n;
        return (
          (t = new cw({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dv(e) {
        let t, n;
        return (
          (t = new cC({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dA(e) {
        let t, n, l, o;
        let i = [dx, dw],
          r = [];
        return (
          (l = r[(n = e[9] ? 1 : 0)] = i[n](e)),
          {
            c() {
              ((t = tR("div")), l.c());
            },
            l(e) {
              var n = tV((t = tY(e, "DIV", {})));
              (l.l(n), n.forEach(tL));
            },
            m(e, l) {
              (tk(e, t, l), r[n].m(t, null), (o = !0));
            },
            p(e, o) {
              let s = n;
              (n = e[9] ? 1 : 0) === s
                ? r[n].p(e, o)
                : (nA(),
                  ny(r[s], 1, 1, () => {
                    r[s] = null;
                  }),
                  nw(),
                  (l = r[n]) ? l.p(e, o) : (l = r[n] = i[n](e)).c(),
                  nx(l, 1),
                  l.m(t, null));
            },
            i(e) {
              o || (nx(l), (o = !0));
            },
            o(e) {
              (ny(l), (o = !1));
            },
            d(e) {
              (e && tL(t), r[n].d());
            },
          }
        );
      }
      function dw(e) {
        let t, n;
        return (
          (t = new a3({
            props: {
              title: e[11].t("mdf.attachment.angelButtonOpen"),
              type: eA.Button_Hook,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOdJREFUeNpiYBgFo2AUDDBgJEaR29KHBkBKAYgNiDT3ABB/2BUtf4EiBwAtFgBS64HYgUwPghwSCHTIB5IdALX8PNTnlABQKDjicgQTHo39VLCcARpt9bgk8TkggIppLYEcBwhQ0QEC5DjgARUdgNMsFjyaHPEEnTwWuQVA/BCH+gUUlQNYcggoW+5HdzAwpR8g1SymQVcSQvN/AoFESGoUgACoHFiAXh5gSwPkFj4JRKjJB2JFnFEAjVsFGoa4AtSOwZMGRh2ALRecJ6HeJ7lmBOYCQ0K5wJGWDhhtA46CUTDoAECAAQD5MDLMcGyBrgAAAABJRU5ErkJggg==",
              $$slots: { default: [dy] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (2048 & n &&
                (l.title = e[11].t("mdf.attachment.angelButtonOpen")),
                33554432 & n && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dx(e) {
        let t, n, l;
        return (
          (n = new a9({
            props: {
              title: e[11].t("mdf.attachment.angelButtonClose"),
              $$slots: { default: [dE] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[13]),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { class: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              tG(t, "class", "newHint svelte-1o90k3r");
            },
            m(e, o) {
              (tk(e, t, o), nO(n, t, null), (l = !0));
            },
            p(e, t) {
              let l = {};
              (2048 & t &&
                (l.title = e[11].t("mdf.attachment.angelButtonClose")),
                33554432 & t && (l.$$scope = { dirty: t, ctx: e }),
                n.$set(l));
            },
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n));
            },
          }
        );
      }
      function dy(e) {
        let t, n;
        return (
          (t = new cI({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dE(e) {
        let t, n;
        return (
          (t = new ck({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dC(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m;
        ((t = new aK({
          props: { $$slots: { default: [dm] }, $$scope: { ctx: e } },
        })),
          (o = new a3({
            props: {
              title: e[11].t("mdf.attachment.cutR"),
              type: eA.Cut_Mesial,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKVJREFUeNrslc0NgCAMRtFFxGVcwgtOJheXcBrcxJJw8CC/5fNiv4Q0cOC9hJIqJZH8PQPq4uW4DBVNy57r5D4VIPhOxTyO5pjE+AFcvewxAhG4j4MLJOC+Byy0BzLwDfoLOHC2ABfOEugBbxboBW8S6AmvFugNrxJAwIsFUPAiASQ8K4CGJ2dBmOdQeG4YaTQ8J2DR8JIe0OEZXGqkSiQSTm4BBgDX+VwbqiK1nAAAAABJRU5ErkJggg==",
              $$slots: { default: [dp] },
              $$scope: { ctx: e },
            },
          })),
          (r = new a3({
            props: {
              title: e[11].t("mdf.attachment.cutL"),
              type: eA.Cut_Distal,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNrs1s0NwjAMBeC+LkKnYQkuZjJyYQmWIWxCkHxAKEl//JwLtlRVrR35q+KqnaaIiH8P9JLn+2spJylHflxOaShAmz+/bqWCuLIBcycnv9cFdRsJyDUUG9EE6J4nbwTWCrSZVFKUmcCWIk8EthZ6IbCn2AOBvQvYCBxRMxE4uncsBCwTzEDA+h5bEWaAFUEBWBAzC6BNWt8OcQesIJYhgA4iuc9AZSZEn/wzAzn+fiMiWvEWYABwIFwbFfNKbgAAAABJRU5ErkJggg==",
              $$slots: { default: [dg] },
              $$scope: { ctx: e },
            },
          })),
          (d = new a3({
            props: {
              title: e[11].t("mdf.attachment.cutArch"),
              type: eA.Cut_Arch,
              dragImage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAStJREFUeNpiYBgFo2AUDDBgJEWx29KHCkAqAIj9gdgBi5IDQLwRiDfsipZ/QDUHAC0WAFL1QFxAgnsnAHEj0CEfKHIA0HIDILUeiBXICGFQKAQCHXGBLAdALd8PxAIURDMoBBxxOYKRQHyfx2E5LK6RDTXAkzZAjjDEli5Y8Lh8PhbLP0CD9AAOR00AOtwBGmXIegWg5jmia2LC4fsELD4B+VYRh+VwAJVXRAsdEHCAmkvYAUCQj8XniYRSNJIjwOqh+vCZi+kAaNwboAlPxJeScTgCpH4imrAB1Hy8IeCAI0+TAyYQMh+bA9Dz+wVigx5HVFzAZz4TkfmYgcJyABnIk+qAgxQ6AF3/Q1IdQFMw6oBB6YAF0GoUVp0uoNAOaps3CkbBKKAuAAgwAJA7WQdhfKZzAAAAAElFTkSuQmCC",
              $$slots: { default: [dv] },
              $$scope: { ctx: e },
            },
          })));
        let p = e[8] && dA(e);
        return (
          (f = new cs({
            props: { title: e[11].t("mdf.attachment.removeHint") },
          })),
          {
            c() {
              (n$(t.$$.fragment),
                (n = tP()),
                (l = tR("div")),
                n$(o.$$.fragment),
                (i = tP()),
                n$(r.$$.fragment),
                (s = tP()),
                (a = tR("div")),
                (c = tP()),
                n$(d.$$.fragment),
                (u = tP()),
                p && p.c(),
                (h = tP()),
                n$(f.$$.fragment),
                this.h());
            },
            l(e) {
              (nI(t.$$.fragment, e), (n = tq(e)));
              var m = tV((l = tY(e, "DIV", { class: !0 })));
              (nI(o.$$.fragment, m),
                (i = tq(m)),
                nI(r.$$.fragment, m),
                (s = tq(m)),
                tV((a = tY(m, "DIV", { class: !0 }))).forEach(tL),
                (c = tq(m)),
                nI(d.$$.fragment, m),
                (u = tq(m)),
                p && p.l(m),
                m.forEach(tL),
                (h = tq(e)),
                nI(f.$$.fragment, e),
                this.h());
            },
            h() {
              (tG(a, "class", "sm-space-6 svelte-1o90k3r"),
                tG(l, "class", "sm-attach-list svelte-1o90k3r"));
            },
            m(e, g) {
              (nO(t, e, g),
                tk(e, n, g),
                tk(e, l, g),
                nO(o, l, null),
                tD(l, i),
                nO(r, l, null),
                tD(l, s),
                tD(l, a),
                tD(l, c),
                nO(d, l, null),
                tD(l, u),
                p && p.m(l, null),
                tk(e, h, g),
                nO(f, e, g),
                (m = !0));
            },
            p(e, n) {
              let i = {};
              (33556480 & n && (i.$$scope = { dirty: n, ctx: e }), t.$set(i));
              let s = {};
              (2048 & n && (s.title = e[11].t("mdf.attachment.cutR")),
                33554432 & n && (s.$$scope = { dirty: n, ctx: e }),
                o.$set(s));
              let a = {};
              (2048 & n && (a.title = e[11].t("mdf.attachment.cutL")),
                33554432 & n && (a.$$scope = { dirty: n, ctx: e }),
                r.$set(a));
              let c = {};
              (2048 & n && (c.title = e[11].t("mdf.attachment.cutArch")),
                33554432 & n && (c.$$scope = { dirty: n, ctx: e }),
                d.$set(c),
                e[8]
                  ? p
                    ? (p.p(e, n), 256 & n && nx(p, 1))
                    : ((p = dA(e)).c(), nx(p, 1), p.m(l, null))
                  : p &&
                    (nA(),
                    ny(p, 1, 1, () => {
                      p = null;
                    }),
                    nw()));
              let u = {};
              (2048 & n && (u.title = e[11].t("mdf.attachment.removeHint")),
                f.$set(u));
            },
            i(e) {
              m ||
                (nx(t.$$.fragment, e),
                nx(o.$$.fragment, e),
                nx(r.$$.fragment, e),
                nx(d.$$.fragment, e),
                nx(p),
                nx(f.$$.fragment, e),
                (m = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e),
                ny(o.$$.fragment, e),
                ny(r.$$.fragment, e),
                ny(d.$$.fragment, e),
                ny(p),
                ny(f.$$.fragment, e),
                (m = !1));
            },
            d(e) {
              (nM(t, e),
                e && tL(n),
                e && tL(l),
                nM(o),
                nM(r),
                nM(d),
                p && p.d(),
                e && tL(h),
                nM(f, e));
            },
          }
        );
      }
      function db(e) {
        let t, n, l, o;
        return (
          (t = new rQ({
            props: { $$slots: { default: [df] }, $$scope: { ctx: e } },
          })),
          (l = new rQ({
            props: { $$slots: { default: [dC] }, $$scope: { ctx: e } },
          })),
          {
            c() {
              (n$(t.$$.fragment), (n = tP()), n$(l.$$.fragment));
            },
            l(e) {
              (nI(t.$$.fragment, e), (n = tq(e)), nI(l.$$.fragment, e));
            },
            m(e, i) {
              (nO(t, e, i), tk(e, n, i), nO(l, e, i), (o = !0));
            },
            p(e, n) {
              let o = {};
              (33556718 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o));
              let i = {};
              (33557248 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i));
            },
            i(e) {
              o || (nx(t.$$.fragment, e), nx(l.$$.fragment, e), (o = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), ny(l.$$.fragment, e), (o = !1));
            },
            d(e) {
              (nM(t, e), e && tL(n), nM(l, e));
            },
          }
        );
      }
      function dT(e) {
        let t, n, l, o, i, r;
        return (
          (n = new c9({ props: { color: "#a0a3bd" } })),
          {
            c() {
              ((t = tR("a")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "A", { class: !0, target: !0, href: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              (tG(t, "class", "sm-help svelte-1o90k3r"),
                tG(t, "target", "_blank"),
                tG(t, "href", (l = e[0]._configuration.attachmentGuideURL)));
            },
            m(l, s) {
              (tk(l, t, s),
                nO(n, t, null),
                (o = !0),
                i ||
                  ((r = [
                    tj(t, "mousedown", tH(e[15])),
                    tj(t, "touchstart", tH(e[16])),
                    tj(t, "touchend", tH(e[17])),
                    tj(t, "click", tH(e[18])),
                  ]),
                  (i = !0)));
            },
            p(e, n) {
              (!o ||
                (1 & n &&
                  l !== (l = e[0]._configuration.attachmentGuideURL))) &&
                tG(t, "href", l);
            },
            i(e) {
              o || (nx(n.$$.fragment, e), (o = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (o = !1));
            },
            d(e) {
              (e && tL(t), nM(n), (i = !1), tr(r));
            },
          }
        );
      }
      function d$(e) {
        let t, n, l, o, i;
        let r = e[11].t("mdf.attachment.title") + "",
          s = e[0]._configuration.attachmentGuideURL && dT(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("span")),
              (l = tB(r)),
              (o = tP()),
              s && s.c(),
              this.h());
          },
          l(e) {
            var i = tV((t = tY(e, "DIV", { class: !0, slot: !0 }))),
              a = tV((n = tY(i, "SPAN", {})));
            ((l = tW(a, r)),
              a.forEach(tL),
              (o = tq(i)),
              s && s.l(i),
              i.forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "class", "sm-title svelte-1o90k3r"), tG(t, "slot", "title"));
          },
          m(e, r) {
            (tk(e, t, r),
              tD(t, n),
              tD(n, l),
              tD(t, o),
              s && s.m(t, null),
              (i = !0));
          },
          p(e, n) {
            ((!i || 2048 & n) &&
              r !== (r = e[11].t("mdf.attachment.title") + "") &&
              tX(l, r),
              e[0]._configuration.attachmentGuideURL
                ? s
                  ? (s.p(e, n), 1 & n && nx(s, 1))
                  : ((s = dT(e)).c(), nx(s, 1), s.m(t, null))
                : s &&
                  (nA(),
                  ny(s, 1, 1, () => {
                    s = null;
                  }),
                  nw()));
          },
          i(e) {
            i || (nx(s), (i = !0));
          },
          o(e) {
            (ny(s), (i = !1));
          },
          d(e) {
            (e && tL(t), s && s.d());
          },
        };
      }
      function dI(e) {
        var t;
        let n, l;
        return (
          (n = new i9({
            props: {
              container: null == (t = e[0]._instance) ? void 0 : t.el,
              $$slots: { default: [dO] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(n.$$.fragment);
            },
            l(e) {
              nI(n.$$.fragment, e);
            },
            m(e, t) {
              (nO(n, e, t), (l = !0));
            },
            p(e, t) {
              var l;
              let o = {};
              (1 & t &&
                (o.container = null == (l = e[0]._instance) ? void 0 : l.el),
                33556480 & t && (o.$$scope = { dirty: t, ctx: e }),
                n.$set(o));
            },
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              nM(n, e);
            },
          }
        );
      }
      function dO(e) {
        let t, n;
        return (
          (t = new ii({
            props: {
              maskColor: "rgba(0,0,0,.4)",
              color: "#fff",
              text: e[11].t("mdf.attachment.angelButtonLoading"),
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (2048 & n &&
                (l.text = e[11].t("mdf.attachment.angelButtonLoading")),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dM(e) {
        let t, n, l, o;
        t = new rY({
          props: {
            $$slots: { title: [d$], default: [db] },
            $$scope: { ctx: e },
          },
        });
        let i = e[4] && dI(e);
        return {
          c() {
            (n$(t.$$.fragment), (n = tP()), i && i.c(), (l = tU()));
          },
          l(e) {
            (nI(t.$$.fragment, e), (n = tq(e)), i && i.l(e), (l = tU()));
          },
          m(e, r) {
            (nO(t, e, r), tk(e, n, r), i && i.m(e, r), tk(e, l, r), (o = !0));
          },
          p(e, n) {
            let [o] = n,
              r = {};
            (33558511 & o && (r.$$scope = { dirty: o, ctx: e }),
              t.$set(r),
              e[4]
                ? i
                  ? (i.p(e, o), 16 & o && nx(i, 1))
                  : ((i = dI(e)).c(), nx(i, 1), i.m(l.parentNode, l))
                : i &&
                  (nA(),
                  ny(i, 1, 1, () => {
                    i = null;
                  }),
                  nw()));
          },
          i(e) {
            o || (nx(t.$$.fragment, e), nx(i), (o = !0));
          },
          o(e) {
            (ny(t.$$.fragment, e), ny(i), (o = !1));
          },
          d(e) {
            (nM(t, e), e && tL(n), i && i.d(e), e && tL(l));
          },
        };
      }
      function dD(e, t, n) {
        let l, o, i, r, s, a, c, d, u, h;
        let f = o8();
        tu(e, f, (e) => n(0, (u = e)));
        let m = "".concat(
            u._user.account,
            "::3d::new-feature-label::ellipseVerticalKey::read",
          ),
          p = "".concat(
            u._user.account,
            "::3d::new-feature-label::ellipseHorizontalKey::read",
          ),
          g = !!localStorage.getItem(m),
          v = !!localStorage.getItem(p),
          A = !1,
          w = async () => {
            (n(4, (A = !0)),
              await l4(20),
              d.StartCalBHLocations() &&
                (f.updateMdf({ angelButtonReady: !0 }), n(4, (A = !1))));
          },
          x = (e) => {
            "Ellipse_Vertical" === e
              ? g || (n(1, (g = !0)), localStorage.setItem(m, "1"))
              : "Ellipse_Horizontal" !== e ||
                v ||
                (n(2, (v = !0)), localStorage.setItem(p, "1"));
          };
        return (
          (e.$$.update = () => {
            (1 & e.$$.dirty && n(11, (l = l0(u.language))),
              1 & e.$$.dirty && n(10, (o = u.stat)),
              1 & e.$$.dirty && n(9, (i = u.mdf.angelButtonReady)),
              1 & e.$$.dirty &&
                n(8, (r = u._configuration.couldAddAngelButton)),
              1 & e.$$.dirty &&
                n(
                  7,
                  (s =
                    u._configuration.wasmInstanceInit
                      .enable_new_physical_attach),
                ),
              1 & e.$$.dirty &&
                n(
                  6,
                  (a =
                    u._configuration.wasmInstanceInit
                      .enable_retention_kid_attach),
                ),
              1 & e.$$.dirty && n(5, (c = u._configuration.isOverseas)),
              1 & e.$$.dirty && (d = u._instance.editor));
          }),
          [
            u,
            g,
            v,
            h,
            A,
            c,
            a,
            s,
            r,
            i,
            o,
            l,
            f,
            w,
            x,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => o({ catalog: "医生修改", event: "点击附件使用帮助" }),
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(3, (h = e));
              });
            },
            () => x("Ellipse_Vertical"),
            () => x("Ellipse_Horizontal"),
          ]
        );
      }
      class dk extends nk {
        constructor(e) {
          (super(), nD(this, e, dD, dM, ta, {}, de));
        }
      }
      function dL(e) {
        tI(
          e,
          "svelte-12jv176",
          ".sm-container.svelte-12jv176{position:absolute;z-index:200;filter:drop-shadow(0 4px 9px rgba(0, 0, 0, 0.3))}.sm-content.svelte-12jv176{width:100%;height:100%;max-height:252px;overflow:auto;background-color:#4e4b66;border-radius:16px;padding:20px 30px;position:relative;font-size:12px;line-height:18px;color:#fff}.sm-wrapper.svelte-12jv176{position:relative}.sm-close.svelte-12jv176{position:absolute;top:8px;right:8px;cursor:pointer}",
        );
      }
      let dN = (e) => ({}),
        dR = (e) => ({}),
        dS = (e) => ({}),
        dB = (e) => ({});
      function dP(e) {
        let t, n, l, o, i, r, s, a, c, d;
        let u = e[3].content,
          h = th(u, e, e[2], dB);
        r = new lb({ props: { width: 12, height: 12, color: "#fff" } });
        let f = e[3].fixed,
          m = th(f, e, e[2], dR);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              h && h.c(),
              (o = tP()),
              (i = tR("div")),
              n$(r.$$.fragment),
              (s = tP()),
              m && m.c(),
              this.h());
          },
          l(e) {
            var a = tV((t = tY(e, "DIV", { class: !0, style: !0 }))),
              c = tV((n = tY(a, "DIV", { class: !0 }))),
              d = tV((l = tY(c, "DIV", { class: !0 })));
            (h && h.l(d), d.forEach(tL), (o = tq(c)));
            var u = tV((i = tY(c, "DIV", { class: !0 })));
            (nI(r.$$.fragment, u),
              u.forEach(tL),
              c.forEach(tL),
              (s = tq(a)),
              m && m.l(a),
              a.forEach(tL),
              this.h());
          },
          h() {
            (tG(l, "class", "sm-wrapper svelte-12jv176"),
              tG(i, "class", "sm-close svelte-12jv176"),
              tG(n, "class", "sm-content svelte-12jv176"),
              tG(t, "class", "sm-container svelte-12jv176"),
              tG(t, "style", e[0]));
          },
          m(u, f) {
            (tk(u, t, f),
              tD(t, n),
              tD(n, l),
              h && h.m(l, null),
              tD(n, o),
              tD(n, i),
              nO(r, i, null),
              tD(t, s),
              m && m.m(t, null),
              (a = !0),
              c ||
                ((d = [
                  tj(i, "touchstart", tH(e[4])),
                  tj(i, "touchend", tH(e[5])),
                  tj(i, "mousedown", tH(e[6])),
                  tj(i, "click", e[1]),
                ]),
                (c = !0)));
          },
          p(e, n) {
            let [l] = n;
            (h &&
              h.p &&
              (!a || 4 & l) &&
              tp(h, u, e, e[2], a ? tm(u, e[2], l, dS) : tg(e[2]), dB),
              m &&
                m.p &&
                (!a || 4 & l) &&
                tp(m, f, e, e[2], a ? tm(f, e[2], l, dN) : tg(e[2]), dR),
              (!a || 1 & l) && tG(t, "style", e[0]));
          },
          i(e) {
            a || (nx(h, e), nx(r.$$.fragment, e), nx(m, e), (a = !0));
          },
          o(e) {
            (ny(h, e), ny(r.$$.fragment, e), ny(m, e), (a = !1));
          },
          d(e) {
            (e && tL(t), h && h.d(e), nM(r), m && m.d(e), (c = !1), tr(d));
          },
        };
      }
      function dU(e, t, n) {
        let { $$slots: l = {}, $$scope: o } = t,
          i = nn(),
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("style" in e && n(0, (r = e.style)),
              "$$scope" in e && n(2, (o = e.$$scope)));
          }),
          [
            r,
            () => {
              i("close");
            },
            o,
            l,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class dj extends nk {
        constructor(e) {
          (super(), nD(this, e, dU, dP, ta, { style: 0 }, dL));
        }
      }
      function dz(e) {
        tI(
          e,
          "svelte-g6dhz3",
          ".sm-mdf.svelte-g6dhz3{position:relative;margin-top:42px;height:calc(100% - 100px)}.sm-mdf-tool-box.svelte-g6dhz3{position:absolute;max-height:100%;overflow-y:auto;border:1px solid #e8e8e8;padding:0px 10px;width:158px;right:0px;top:-20px;background:#eff0f7;box-shadow:-2px -2px 5px rgba(255, 255, 255, 0.3), 2px 2px 5px rgba(110, 113, 145, 0.1);border-radius:8px}.sm-warn.svelte-g6dhz3{position:absolute;left:-20px;top:2px;width:14px;height:14px;line-height:14px;text-align:center;border-radius:50%;background-color:#fff;color:#333;font-size:12px;font-weight:bold;overflow:hidden}",
        );
      }
      function dH(e) {
        let t, n, l, o, i, r, s;
        let a = [dZ, dV, dG],
          c = [];
        function d(e, t) {
          return e[2].toolType === ew.ARCH || e[2].toolType === ew.MOVE_ARCH
            ? 0
            : e[2].toolType === ew.TOOTH
              ? 1
              : e[2].toolType === ew.ATTACHMENT
                ? 2
                : -1;
        }
        return (
          ~(l = d(e)) && (o = c[l] = a[l](e)),
          {
            c() {
              ((t = tR("div")), (n = tR("div")), o && o.c(), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { class: !0 }))),
                i = tV((n = tY(l, "DIV", { class: !0 })));
              (o && o.l(i), i.forEach(tL), l.forEach(tL), this.h());
            },
            h() {
              (tG(n, "class", "sm-mdf-tool-box svelte-g6dhz3"),
                tG(t, "class", "sm-mdf svelte-g6dhz3"));
            },
            m(o, a) {
              (tk(o, t, a),
                tD(t, n),
                ~l && c[l].m(n, null),
                (i = !0),
                r ||
                  ((s = [
                    tj(t, "wheel", tH(e[6])),
                    tj(t, "mousemove", tH(e[7])),
                  ]),
                  (r = !0)));
            },
            p(e, t) {
              let i = l;
              (l = d(e)) !== i &&
                (o &&
                  (nA(),
                  ny(c[i], 1, 1, () => {
                    c[i] = null;
                  }),
                  nw()),
                ~l
                  ? ((o = c[l]) || (o = c[l] = a[l](e)).c(),
                    nx(o, 1),
                    o.m(n, null))
                  : (o = null));
            },
            i(e) {
              i || (nx(o), (i = !0));
            },
            o(e) {
              (ny(o), (i = !1));
            },
            d(e) {
              (e && tL(t), ~l && c[l].d(), (r = !1), tr(s));
            },
          }
        );
      }
      function dG(e) {
        let t, n;
        return (
          (t = new dk({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dV(e) {
        let t, n;
        return (
          (t = new aZ({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dZ(e) {
        let t, n;
        return (
          (t = new sg({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function dF(e) {
        let t, n, l;
        let o = e[2].working && !e[2].entering && dH(e);
        return {
          c() {
            (o && o.c(), (t = tP()), (n = tU()));
          },
          l(e) {
            (o && o.l(e), (t = tq(e)), (n = tU()));
          },
          m(e, i) {
            (o && o.m(e, i), tk(e, t, i), tk(e, n, i), (l = !0));
          },
          p(e, n) {
            let [l] = n;
            e[2].working && !e[2].entering
              ? o
                ? (o.p(e, l), 4 & l && nx(o, 1))
                : ((o = dH(e)).c(), nx(o, 1), o.m(t.parentNode, t))
              : o &&
                (nA(),
                ny(o, 1, 1, () => {
                  o = null;
                }),
                nw());
          },
          i(e) {
            l || (nx(o), nx(!1), (l = !0));
          },
          o(e) {
            (ny(o), ny(!1), (l = !1));
          },
          d(e) {
            (o && o.d(e), e && tL(t), e && tL(n));
          },
        };
      }
      function dJ(e, t, n) {
        let l, o, i, r, s;
        let a = o8();
        tu(e, a, (e) => n(5, (r = e)));
        let c = "".concat(r._user.account, "::3d::mdf_tooth_tip_read"),
          d = !localStorage.getItem(c);
        return (
          (e.$$.update = () => {
            (32 & e.$$.dirty && n(3, (l = l0(r.language))),
              32 & e.$$.dirty && n(2, (o = r.mdf)),
              32 & e.$$.dirty &&
                n(
                  1,
                  (i =
                    r.size && s
                      ? s.getBoundingClientRect()
                      : { left: 0, top: 0 }),
                ),
              1 & e.$$.dirty && (d || localStorage.setItem(c, "1")));
          }),
          [
            d,
            i,
            o,
            l,
            a,
            r,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => n(0, (d = !1)),
          ]
        );
      }
      class dY extends nk {
        constructor(e) {
          (super(), nD(this, e, dJ, dF, ta, {}, dz));
        }
      }
      function dK(e) {
        tI(
          e,
          "svelte-1h41o9j",
          ".sm-overbite.svelte-1h41o9j{user-select:none}.sm-overbite-item.svelte-1h41o9j{color:var(--foreground-color);font-size:12px;line-height:24px}.sm-divider.svelte-1h41o9j{margin-top:12px}@media screen and (max-height: 520px){.sm-overbite.svelte-1h41o9j{margin-top:12px}}",
        );
      }
      function dW(e) {
        let t,
          n,
          l,
          o,
          i,
          r,
          s,
          a,
          c,
          d,
          u,
          h,
          f,
          m,
          p,
          g,
          v,
          A,
          w,
          x,
          y,
          E,
          C,
          b,
          T,
          $,
          I,
          O,
          M,
          D,
          k,
          L;
        let N = e[3].t("overbite.originOverlay") + "",
          R = (e[2][0].value ? e[2][0].value.toFixed(2) : "-") + "",
          S = (0, J.B_)(e[2][0].fdiA, e[1]) + "",
          B = (0, J.B_)(e[2][0].fdiB, e[1]) + "",
          P = e[3].t("overbite.targetOverlay") + "",
          U = (e[2][1].value ? e[2][1].value.toFixed(2) : "-") + "",
          j = (0, J.B_)(e[2][1].fdiA, e[1]) + "",
          z = (0, J.B_)(e[2][1].fdiB, e[1]) + "",
          H = e[3].t("overbite.originCover") + "",
          G = (e[2][2].value ? e[2][2].value.toFixed(2) : "-") + "",
          V = e[3].t("overbite.targetCover") + "",
          Z = (e[2][3].value ? e[2][3].value.toFixed(2) : "-") + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tB(N)),
              (o = tB("：")),
              (i = tB(R)),
              (r = tB(" (")),
              (s = tB(S)),
              (a = tB(", ")),
              (c = tB(B)),
              (d = tB(")")),
              (u = tP()),
              (h = tR("div")),
              (f = tB(P)),
              (m = tB("：")),
              (p = tB(U)),
              (g = tB(" (")),
              (v = tB(j)),
              (A = tB(", ")),
              (w = tB(z)),
              (x = tB(")")),
              (y = tP()),
              (E = tR("div")),
              (C = tP()),
              (b = tR("div")),
              (T = tB(H)),
              ($ = tB("：")),
              (I = tB(G)),
              (O = tP()),
              (M = tR("div")),
              (D = tB(V)),
              (k = tB("：")),
              (L = tB(Z)),
              this.h());
          },
          l(e) {
            var F = tV((t = tY(e, "DIV", { class: !0, style: !0 }))),
              J = tV((n = tY(F, "DIV", { class: !0 })));
            ((l = tW(J, N)),
              (o = tW(J, "：")),
              (i = tW(J, R)),
              (r = tW(J, " (")),
              (s = tW(J, S)),
              (a = tW(J, ", ")),
              (c = tW(J, B)),
              (d = tW(J, ")")),
              J.forEach(tL),
              (u = tq(F)));
            var Y = tV((h = tY(F, "DIV", { class: !0 })));
            ((f = tW(Y, P)),
              (m = tW(Y, "：")),
              (p = tW(Y, U)),
              (g = tW(Y, " (")),
              (v = tW(Y, j)),
              (A = tW(Y, ", ")),
              (w = tW(Y, z)),
              (x = tW(Y, ")")),
              Y.forEach(tL),
              (y = tq(F)),
              tV((E = tY(F, "DIV", { class: !0 }))).forEach(tL),
              (C = tq(F)));
            var K = tV((b = tY(F, "DIV", { class: !0 })));
            ((T = tW(K, H)),
              ($ = tW(K, "：")),
              (I = tW(K, G)),
              K.forEach(tL),
              (O = tq(F)));
            var W = tV((M = tY(F, "DIV", { class: !0 })));
            ((D = tW(W, V)),
              (k = tW(W, "：")),
              (L = tW(W, Z)),
              W.forEach(tL),
              F.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "sm-overbite-item svelte-1h41o9j"),
              tG(h, "class", "sm-overbite-item svelte-1h41o9j"),
              tG(E, "class", "sm-divider svelte-1h41o9j"),
              tG(b, "class", "sm-overbite-item svelte-1h41o9j"),
              tG(M, "class", "sm-overbite-item svelte-1h41o9j"),
              tG(t, "class", "sm-overbite svelte-1h41o9j"),
              tG(t, "style", e[0]));
          },
          m(e, N) {
            (tk(e, t, N),
              tD(t, n),
              tD(n, l),
              tD(n, o),
              tD(n, i),
              tD(n, r),
              tD(n, s),
              tD(n, a),
              tD(n, c),
              tD(n, d),
              tD(t, u),
              tD(t, h),
              tD(h, f),
              tD(h, m),
              tD(h, p),
              tD(h, g),
              tD(h, v),
              tD(h, A),
              tD(h, w),
              tD(h, x),
              tD(t, y),
              tD(t, E),
              tD(t, C),
              tD(t, b),
              tD(b, T),
              tD(b, $),
              tD(b, I),
              tD(t, O),
              tD(t, M),
              tD(M, D),
              tD(M, k),
              tD(M, L));
          },
          p(e, n) {
            (8 & n &&
              N !== (N = e[3].t("overbite.originOverlay") + "") &&
              tX(l, N),
              4 & n &&
                R !==
                  (R = (e[2][0].value ? e[2][0].value.toFixed(2) : "-") + "") &&
                tX(i, R),
              6 & n &&
                S !== (S = (0, J.B_)(e[2][0].fdiA, e[1]) + "") &&
                tX(s, S),
              6 & n &&
                B !== (B = (0, J.B_)(e[2][0].fdiB, e[1]) + "") &&
                tX(c, B),
              8 & n &&
                P !== (P = e[3].t("overbite.targetOverlay") + "") &&
                tX(f, P),
              4 & n &&
                U !==
                  (U = (e[2][1].value ? e[2][1].value.toFixed(2) : "-") + "") &&
                tX(p, U),
              6 & n &&
                j !== (j = (0, J.B_)(e[2][1].fdiA, e[1]) + "") &&
                tX(v, j),
              6 & n &&
                z !== (z = (0, J.B_)(e[2][1].fdiB, e[1]) + "") &&
                tX(w, z),
              8 & n &&
                H !== (H = e[3].t("overbite.originCover") + "") &&
                tX(T, H),
              4 & n &&
                G !==
                  (G = (e[2][2].value ? e[2][2].value.toFixed(2) : "-") + "") &&
                tX(I, G),
              8 & n &&
                V !== (V = e[3].t("overbite.targetCover") + "") &&
                tX(D, V),
              4 & n &&
                Z !==
                  (Z = (e[2][3].value ? e[2][3].value.toFixed(2) : "-") + "") &&
                tX(L, Z),
              1 & n && tG(t, "style", e[0]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function dq(e) {
        let t;
        let n = e[2] && e[2].length && dW(e);
        return {
          c() {
            (n && n.c(), (t = tU()));
          },
          l(e) {
            (n && n.l(e), (t = tU()));
          },
          m(e, l) {
            (n && n.m(e, l), tk(e, t, l));
          },
          p(e, l) {
            let [o] = l;
            e[2] && e[2].length
              ? n
                ? n.p(e, o)
                : ((n = dW(e)).c(), n.m(t.parentNode, t))
              : n && (n.d(1), (n = null));
          },
          i: tn,
          o: tn,
          d(e) {
            (n && n.d(e), e && tL(t));
          },
        };
      }
      function dQ(e, t, n) {
        var l, o;
        let i, r, s, a;
        let { style: c = "" } = t,
          d = o8();
        return (
          tu(e, d, (e) => n(7, (a = e))),
          (e.$$set = (e) => {
            "style" in e && n(0, (c = e.style));
          }),
          (e.$$.update = () => {
            (128 & e.$$.dirty && n(3, (i = l0(a.language))),
              128 & e.$$.dirty && n(2, (r = nj(["overbite"], a))),
              224 & e.$$.dirty &&
                n(
                  1,
                  (s =
                    null !==
                      n(
                        6,
                        (o =
                          null === n(5, (l = a.main)) || void 0 === l
                            ? void 0
                            : l.dentalNotationType),
                      ) && void 0 !== o
                      ? o
                      : J.oE.FDI),
                ));
          }),
          [c, s, r, i, d, l, o, a]
        );
      }
      class dX extends nk {
        constructor(e) {
          (super(), nD(this, e, dQ, dq, ta, { style: 0 }, dK));
        }
      }
      function d_(e) {
        tI(
          e,
          "svelte-1kxurnj",
          ".sm-tip.svelte-1kxurnj{width:360px;padding:20px;border-radius:4px;border:2px solid #d69fa2;background-color:rgba(255, 239, 239, 0.95);box-shadow:0 16px 38px 0 rgba(159, 159, 159, 0.45);color:#333;font-size:14px;line-height:20px;white-space:pre-line}",
        );
      }
      function d1(e) {
        let t, n;
        let l = e[1].mdf.angelButtonInvalidTips + "";
        return {
          c() {
            ((t = tR("div")), (n = tB(l)), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            ((n = tW(o, l)), o.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-tip svelte-1kxurnj"), tG(t, "style", e[0]));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, o) {
            (2 & o &&
              l !== (l = e[1].mdf.angelButtonInvalidTips + "") &&
              tX(n, l),
              1 & o && tG(t, "style", e[0]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function d0(e) {
        let t;
        let n = e[1].mdf.angelButtonInvalidTips && d1(e);
        return {
          c() {
            (n && n.c(), (t = tU()));
          },
          l(e) {
            (n && n.l(e), (t = tU()));
          },
          m(e, l) {
            (n && n.m(e, l), tk(e, t, l));
          },
          p(e, l) {
            let [o] = l;
            e[1].mdf.angelButtonInvalidTips
              ? n
                ? n.p(e, o)
                : ((n = d1(e)).c(), n.m(t.parentNode, t))
              : n && (n.d(1), (n = null));
          },
          i: tn,
          o: tn,
          d(e) {
            (n && n.d(e), e && tL(t));
          },
        };
      }
      function d2(e, t, n) {
        let l;
        let { style: o = "" } = t,
          i = o8();
        return (
          tu(e, i, (e) => n(1, (l = e))),
          (e.$$set = (e) => {
            "style" in e && n(0, (o = e.style));
          }),
          [o, l, i]
        );
      }
      class d3 extends nk {
        constructor(e) {
          (super(), nD(this, e, d2, d0, ta, { style: 0 }, d_));
        }
      }
      function d4(e) {
        tI(
          e,
          "svelte-38q95j",
          ".sm-menu.svelte-38q95j{position:absolute;left:0;top:0;z-index:100;background-color:#fff;box-shadow:0 0 6px 0 rgba(130, 130, 130, 0.65);border-radius:4px;overflow:hidden;font-size:14px;user-select:none}.sm-menu-item.svelte-38q95j{padding:10px 14px;display:flex;flex-flow:row nowrap;align-items:center;cursor:pointer;white-space:nowrap;transform-style:preserve-3d}.sm-menu-item.svelte-38q95j:hover{cursor:pointer;background:#eee;color:#0086cd}",
        );
      }
      function d7(e) {
        let t, n, l, o, i;
        let r = e[6].t("contextmenu.mdf") + "";
        return {
          c() {
            ((t = tR("div")), (n = tR("span")), (l = tB(r)), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 }))),
              i = tV((n = tY(o, "SPAN", {})));
            ((l = tW(i, r)), i.forEach(tL), o.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-menu-item svelte-38q95j");
          },
          m(r, s) {
            (tk(r, t, s),
              tD(t, n),
              tD(n, l),
              o ||
                ((i = [
                  tj(t, "mousedown", tH(e[12])),
                  tj(t, "touchstart", tH(e[13])),
                  tj(t, "touchend", tH(e[14])),
                  tj(t, "click", e[15]),
                ]),
                (o = !0)));
          },
          p(e, t) {
            64 & t && r !== (r = e[6].t("contextmenu.mdf") + "") && tX(l, r);
          },
          d(e) {
            (e && tL(t), (o = !1), tr(i));
          },
        };
      }
      function d6(e) {
        let t, n, l, o;
        let i = "mdf" === e[3].type && d7(e);
        return {
          c() {
            ((t = tR("div")), i && i.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            (i && i.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-menu svelte-38q95j"), tG(t, "style", e[5]));
          },
          m(r, s) {
            (tk(r, t, s),
              i && i.m(t, null),
              l ||
                ((o = [
                  tj(t, "mousedown", e[8]),
                  tA((n = iP.call(null, t, e[16]))),
                ]),
                (l = !0)));
          },
          p(e, l) {
            ("mdf" === e[3].type
              ? i
                ? i.p(e, l)
                : ((i = d7(e)).c(), i.m(t, null))
              : i && (i.d(1), (i = null)),
              32 & l && tG(t, "style", e[5]),
              n && ts(n.update) && 3 & l && n.update.call(null, e[16]));
          },
          d(e) {
            (e && tL(t), i && i.d(), (l = !1), tr(o));
          },
        };
      }
      function d5(e) {
        let t, n, l, o;
        return (
          (t = new i9({
            props: {
              container: e[2],
              $$slots: { default: [d6] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(i, r) {
              (nO(t, i, r),
                (n = !0),
                l ||
                  ((o = [
                    tj(window, "mousedown", e[8]),
                    tj(window, "wheel", e[8]),
                  ]),
                  (l = !0)));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (4 & l && (o.container = e[2]),
                131195 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              (nM(t, e), (l = !1), tr(o));
            },
          }
        );
      }
      function d8(e, t, n) {
        var l;
        let o, i, r, s, a, c, d;
        let u = o8();
        tu(e, u, (e) => n(4, (d = e)));
        let h = 0,
          f = 0,
          m = () => {
            u.update({ contextmenu: null });
          };
        return (
          (e.$$.update = () => {
            (16 & e.$$.dirty && n(6, (o = l0(d.language))),
              16 & e.$$.dirty && n(2, (i = d._instance.el)),
              16 & e.$$.dirty && n(3, (r = d.contextmenu)),
              520 & e.$$.dirty &&
                n(
                  11,
                  ([s, a] =
                    null !==
                      n(9, (l = null == r ? void 0 : r.pointerPosition)) &&
                    void 0 !== l
                      ? l
                      : [0, 0]),
                  s,
                  (n(10, a), n(3, r), n(9, l), n(4, d)),
                ),
              3079 & e.$$.dirty && n(5, (c = re(i, s, a, h, f))));
          }),
          [
            h,
            f,
            i,
            r,
            d,
            c,
            o,
            u,
            m,
            l,
            a,
            s,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => {
              (d.stat({ catalog: "医生修改", event: "右键菜单进入修改" }),
                m(),
                u.toggleModify(!0));
            },
            (e) => n(0, ({ width: h, height: f } = e), h, n(1, f)),
          ]
        );
      }
      class d9 extends nk {
        constructor(e) {
          (super(), nD(this, e, d8, d5, ta, {}, d4));
        }
      }
      function ue(e) {
        tI(
          e,
          "svelte-64502v",
          ".sm-radio-group.svelte-64502v.svelte-64502v{display:flex;flex-flow:row nowrap;align-items:center}.sm-box.svelte-64502v.svelte-64502v{display:flex;overflow:hidden;white-space:nowrap;line-height:20px;font-size:12px}.sm-radio.svelte-64502v.svelte-64502v{padding:0 12px;cursor:pointer;user-select:none;color:var(--foreground-color);border-top:1px solid var(--line-color);border-bottom:1px solid var(--line-color)}.sm-radio.svelte-64502v.svelte-64502v:first-child{border-radius:4px 0 0 4px;border-left:1px solid var(--line-color)}.sm-radio.svelte-64502v.svelte-64502v:last-child{border-radius:0 4px 4px 0;border-right:1px solid var(--line-color)}.sm-radio.sm-active.svelte-64502v.svelte-64502v{background-color:var(--link-color);border:1px solid var(--link-color) !important;color:var(--foreground-link-color, #fff)}.sm-radio.sm-disabled.svelte-64502v.svelte-64502v{cursor:default}.sm-radio.sm-disabled.svelte-64502v.svelte-64502v:not(.sm-active){background-color:#e5e5e5;color:#c4c4c4}.sm-radio.svelte-64502v:not(.sm-active)+.sm-radio.svelte-64502v:not(.sm-active){border-left:1px solid var(--line-color)}.sm-guide-btn.svelte-64502v.svelte-64502v{display:flex;margin-left:12px;cursor:pointer}.sm-warn.svelte-64502v.svelte-64502v{position:absolute;left:-20px;top:2px;width:14px;height:14px;line-height:14px;text-align:center;border-radius:50%;background-color:#fff;color:#333;font-size:12px;font-weight:bold;overflow:hidden}.sm-link.svelte-64502v.svelte-64502v{color:#0086cd;font-size:12px;text-decoration:none}",
        );
      }
      function ut(e, t, n) {
        let l = e.slice();
        return ((l[22] = t[n]), l);
      }
      function un(e) {
        let t, n, l, o, i;
        let r = e[9].t("movement.type.".concat(e[22])) + "";
        function s() {
          return e[17](e[22]);
        }
        return {
          c() {
            ((t = tR("div")), (n = tB(r)), (l = tP()), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(o, r)), (l = tq(o)), o.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-radio svelte-64502v"),
              t0(t, "sm-active", e[4] === e[22]),
              t0(t, "sm-disabled", !e[6]));
          },
          m(e, r) {
            (tk(e, t, r),
              tD(t, n),
              tD(t, l),
              o || ((i = tj(t, "click", s)), (o = !0)));
          },
          p(l, o) {
            ((e = l),
              512 & o &&
                r !== (r = e[9].t("movement.type.".concat(e[22])) + "") &&
                tX(n, r),
              2064 & o && t0(t, "sm-active", e[4] === e[22]),
              64 & o && t0(t, "sm-disabled", !e[6]));
          },
          d(e) {
            (e && tL(t), (o = !1), i());
          },
        };
      }
      function ul(e) {
        let t, n, l, o, i, r, s;
        n = new c9({ props: { color: "#a0a3bd" } });
        let a = e[0] && uo(e);
        return {
          c() {
            ((t = tR("div")),
              n$(n.$$.fragment),
              (l = tP()),
              a && a.c(),
              (o = tU()),
              this.h());
          },
          l(e) {
            var i = tV((t = tY(e, "DIV", { class: !0 })));
            (nI(n.$$.fragment, i),
              i.forEach(tL),
              (l = tq(e)),
              a && a.l(e),
              (o = tU()),
              this.h());
          },
          h() {
            tG(t, "class", "sm-guide-btn svelte-64502v");
          },
          m(c, d) {
            (tk(c, t, d),
              nO(n, t, null),
              e[18](t),
              tk(c, l, d),
              a && a.m(c, d),
              tk(c, o, d),
              (i = !0),
              r || ((s = tj(t, "click", e[12])), (r = !0)));
          },
          p(e, t) {
            e[0]
              ? a
                ? (a.p(e, t), 1 & t && nx(a, 1))
                : ((a = uo(e)).c(), nx(a, 1), a.m(o.parentNode, o))
              : a &&
                (nA(),
                ny(a, 1, 1, () => {
                  a = null;
                }),
                nw());
          },
          i(e) {
            i || (nx(n.$$.fragment, e), nx(a), (i = !0));
          },
          o(e) {
            (ny(n.$$.fragment, e), ny(a), (i = !1));
          },
          d(i) {
            (i && tL(t),
              nM(n),
              e[18](null),
              i && tL(l),
              a && a.d(i),
              i && tL(o),
              (r = !1),
              s());
          },
        };
      }
      function uo(e) {
        let t, n;
        return (
          (t = new i9({
            props: { $$slots: { default: [us] }, $$scope: { ctx: e } },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (33554989 & n && (l.$$scope = { dirty: n, ctx: e }), t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ui(e) {
        let t, n, l, o, i, r, s, a, c;
        let d = e[9].t("movement.tip") + "",
          u = l0(e[2].language).learnIRS + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tP()),
              (o = tR("div")),
              (i = tR("a")),
              (r = tB(u)),
              (s = tP()),
              (a = tR("span")),
              (c = tB("!")),
              this.h());
          },
          l(e) {
            var d = tV((t = tY(e, "DIV", { slot: !0 })));
            (tV((n = tY(d, "DIV", {}))).forEach(tL), (l = tq(d)));
            var h = tV((o = tY(d, "DIV", { style: !0 }))),
              f = tV((i = tY(h, "A", { class: !0, target: !0, href: !0 })));
            ((r = tW(f, u)), f.forEach(tL), h.forEach(tL), (s = tq(d)));
            var m = tV((a = tY(d, "SPAN", { class: !0 })));
            ((c = tW(m, "!")), m.forEach(tL), d.forEach(tL), this.h());
          },
          h() {
            (tG(i, "class", "sm-link svelte-64502v"),
              tG(i, "target", "_blank"),
              tG(i, "href", e[5]),
              t1(o, "margin-top", "15px"),
              tG(a, "class", "sm-warn svelte-64502v"),
              tG(t, "slot", "content"));
          },
          m(e, u) {
            (tk(e, t, u),
              tD(t, n),
              (n.innerHTML = d),
              tD(t, l),
              tD(t, o),
              tD(o, i),
              tD(i, r),
              tD(t, s),
              tD(t, a),
              tD(a, c));
          },
          p(e, t) {
            (512 & t &&
              d !== (d = e[9].t("movement.tip") + "") &&
              (n.innerHTML = d),
              4 & t && u !== (u = l0(e[2].language).learnIRS + "") && tX(r, u),
              32 & t && tG(i, "href", e[5]));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ur(e) {
        let t, n, l;
        return (
          (n = new sx({
            props: {
              color: "#4E4B66",
              style:
                "position:absolute;left:-6px;top:22px;transform:scaleX(-1);",
            },
          })),
          {
            c() {
              ((t = tR("div")), n$(n.$$.fragment), this.h());
            },
            l(e) {
              var l = tV((t = tY(e, "DIV", { slot: !0 })));
              (nI(n.$$.fragment, l), l.forEach(tL), this.h());
            },
            h() {
              tG(t, "slot", "fixed");
            },
            m(e, o) {
              (tk(e, t, o), nO(n, t, null), (l = !0));
            },
            p: tn,
            i(e) {
              l || (nx(n.$$.fragment, e), (l = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), (l = !1));
            },
            d(e) {
              (e && tL(t), nM(n));
            },
          }
        );
      }
      function us(e) {
        let t, n;
        return (
          (t = new dj({
            props: {
              style:
                "width:300px;left:" + e[3][0] + "px;top:" + e[3][1] + "px;",
              $$slots: { fixed: [ur], content: [ui] },
              $$scope: { ctx: e },
            },
          })).$on("close", e[19]),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let l = {};
              (8 & n &&
                (l.style =
                  "width:300px;left:" + e[3][0] + "px;top:" + e[3][1] + "px;"),
                33554980 & n && (l.$$scope = { dirty: n, ctx: e }),
                t.$set(l));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function ua(e) {
        let t, n, l, o, i, r;
        let s = e[11],
          a = [];
        for (let t = 0; t < s.length; t += 1) a[t] = un(ut(e, s, t));
        let c = e[7] && ul(e);
        return {
          c() {
            ((t = tR("div")), (n = tR("div")));
            for (let e = 0; e < a.length; e += 1) a[e].c();
            ((l = tP()), c && c.c(), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 }))),
              i = tV((n = tY(o, "DIV", { class: !0 })));
            for (let e = 0; e < a.length; e += 1) a[e].l(i);
            (i.forEach(tL), (l = tq(o)), c && c.l(o), o.forEach(tL), this.h());
          },
          h() {
            (tG(n, "class", "sm-box svelte-64502v"),
              tG(t, "class", "sm-radio-group svelte-64502v"));
          },
          m(s, d) {
            (tk(s, t, d), tD(t, n));
            for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(n, null);
            (tD(t, l),
              c && c.m(t, null),
              (o = !0),
              i ||
                ((r = [
                  tj(t, "mousedown", tH(e[13])),
                  tj(t, "mouseup", tH(e[14])),
                  tj(t, "touchstart", tH(e[15])),
                  tj(t, "touchend", tH(e[16])),
                ]),
                (i = !0)));
          },
          p(e, l) {
            let [o] = l;
            if (3920 & o) {
              let t;
              for (t = 0, s = e[11]; t < s.length; t += 1) {
                let l = ut(e, s, t);
                a[t]
                  ? a[t].p(l, o)
                  : ((a[t] = un(l)), a[t].c(), a[t].m(n, null));
              }
              for (; t < a.length; t += 1) a[t].d(1);
              a.length = s.length;
            }
            e[7]
              ? c
                ? (c.p(e, o), 128 & o && nx(c, 1))
                : ((c = ul(e)).c(), nx(c, 1), c.m(t, null))
              : c &&
                (nA(),
                ny(c, 1, 1, () => {
                  c = null;
                }),
                nw());
          },
          i(e) {
            o || (nx(c), (o = !0));
          },
          o(e) {
            (ny(c), (o = !1));
          },
          d(e) {
            (e && tL(t), tN(a, e), c && c.d(), (i = !1), tr(r));
          },
        };
      }
      function uc(e, t, n) {
        let l, o, i, r, s, a, c, d, u;
        let h = o8();
        tu(e, h, (e) => n(2, (d = e)));
        let f = "".concat(d._user.account, "::3d::tooth_segment_tip_read"),
          m = !1,
          p = () => {
            let e = u.getBoundingClientRect();
            return [e.right + 10, e.top - 20];
          };
        return (
          (e.$$.update = () => {
            (4 & e.$$.dirty && n(9, (l = l0(d.language))),
              4 & e.$$.dirty && n(8, (o = d.stat)),
              4 & e.$$.dirty &&
                n(7, (i = d._configuration.toothSegmentGuideEnabled)),
              4 & e.$$.dirty &&
                n(6, (r = d._configuration.toothSegmentSelectable)),
              4 & e.$$.dirty && n(5, (s = d._configuration.irsGuideURL)),
              4 & e.$$.dirty && n(4, (a = d.selectedToothSegment)),
              1 & e.$$.dirty && (m || localStorage.setItem(f, "1")),
              6 & e.$$.dirty && n(3, (c = d.size && u ? p() : [0, 0])));
          }),
          [
            m,
            u,
            d,
            c,
            a,
            s,
            r,
            i,
            o,
            l,
            h,
            ["crown", "center", "tip"],
            () => {
              (n(0, (m = !m)), n(3, (c = p())));
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            (e) => {
              r &&
                (h.update({ selectedToothSegment: e }),
                o({
                  catalog: "牙齿移动量表",
                  event: "切换牙齿部位",
                  value: e,
                }));
            },
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(1, (u = e));
              });
            },
            () => n(0, (m = !1)),
          ]
        );
      }
      class ud extends nk {
        constructor(e) {
          (super(), nD(this, e, uc, ua, ta, {}, ue));
        }
      }
      function uu(e) {
        tI(
          e,
          "svelte-12jv77o",
          ".sm-tooth-movement.svelte-12jv77o{position:absolute;bottom:20px;min-width:200px}.sm-hd.svelte-12jv77o{display:flex;flex-flow:row nowrap;align-items:flex-end}.sm-fdi.svelte-12jv77o{color:var(--link-color);font-size:20px;line-height:1;margin-right:18px}.sm-btn.svelte-12jv77o{color:var(--link-color);cursor:pointer;font-size:12px}.sm-list.svelte-12jv77o{margin-top:12px}.sm-item.svelte-12jv77o{display:flex;flex-flow:row nowrap;align-items:center;line-height:24px}.sm-value.svelte-12jv77o{font-size:14px;color:var(--foreground-color)}.sm-unit.svelte-12jv77o{margin-left:1em;font-size:12px;color:var(--foreground-color)}.sm-number.svelte-12jv77o,.sm-symbol.svelte-12jv77o,.sm-dir.svelte-12jv77o,.sm-method.svelte-12jv77o{display:inline-block}.sm-number.svelte-12jv77o{width:2em}.sm-symbol.svelte-12jv77o{width:0.5em}.sm-dir.svelte-12jv77o{min-width:2em}.sm-method.svelte-12jv77o{margin-left:0.5em}@media screen and (max-height: 520px){.sm-tooth-movement.svelte-12jv77o{margin-top:0}}",
        );
      }
      function uh(e, t, n) {
        let l = e.slice();
        return (
          (l[26] = t[n].value),
          (l[27] = t[n].symbol),
          (l[28] = t[n].dir),
          (l[29] = t[n].method),
          l
        );
      }
      function uf(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p;
        let g = e[26] + "",
          v = e[27] + "",
          A = e[28] + "",
          w = e[29] + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("span")),
              (o = tB(g)),
              (i = tP()),
              (r = tR("span")),
              (s = tB(v)),
              (a = tP()),
              (c = tR("div")),
              (d = tR("span")),
              (u = tB(A)),
              (h = tP()),
              (f = tR("span")),
              (m = tB(w)),
              (p = tP()),
              this.h());
          },
          l(e) {
            var x = tV((t = tY(e, "DIV", { class: !0 }))),
              y = tV((n = tY(x, "DIV", { class: !0 }))),
              E = tV((l = tY(y, "SPAN", { class: !0 })));
            ((o = tW(E, g)), E.forEach(tL), (i = tq(y)));
            var C = tV((r = tY(y, "SPAN", { class: !0 })));
            ((s = tW(C, v)), C.forEach(tL), y.forEach(tL), (a = tq(x)));
            var b = tV((c = tY(x, "DIV", { class: !0 }))),
              T = tV((d = tY(b, "SPAN", { class: !0 })));
            ((u = tW(T, A)), T.forEach(tL), (h = tq(b)));
            var $ = tV((f = tY(b, "SPAN", { class: !0 })));
            ((m = tW($, w)),
              $.forEach(tL),
              b.forEach(tL),
              (p = tq(x)),
              x.forEach(tL),
              this.h());
          },
          h() {
            (tG(l, "class", "sm-number svelte-12jv77o"),
              tG(r, "class", "sm-symbol svelte-12jv77o"),
              tG(n, "class", "sm-value svelte-12jv77o"),
              tG(d, "class", "sm-dir svelte-12jv77o"),
              tG(f, "class", "sm-method svelte-12jv77o"),
              tG(c, "class", "sm-unit svelte-12jv77o"),
              tG(t, "class", "sm-item svelte-12jv77o"));
          },
          m(e, g) {
            (tk(e, t, g),
              tD(t, n),
              tD(n, l),
              tD(l, o),
              tD(n, i),
              tD(n, r),
              tD(r, s),
              tD(t, a),
              tD(t, c),
              tD(c, d),
              tD(d, u),
              tD(c, h),
              tD(c, f),
              tD(f, m),
              tD(t, p));
          },
          p(e, t) {
            (4 & t[0] && g !== (g = e[26] + "") && tX(o, g),
              4 & t[0] && v !== (v = e[27] + "") && tX(s, v),
              4 & t[0] && A !== (A = e[28] + "") && tX(u, A),
              4 & t[0] && w !== (w = e[29] + "") && tX(m, w));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function um(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p, g;
        let v = e[0].t("movement.viewAll") + "";
        u = new ud({});
        let A = Object.values(e[2]),
          w = [];
        for (let t = 0; t < A.length; t += 1) w[t] = uf(uh(e, A, t));
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              (o = tB(e[3])),
              (i = tP()),
              (r = tR("div")),
              (s = tB(v)),
              (a = tB("\n            >>")),
              (c = tP()),
              (d = tR("div")),
              n$(u.$$.fragment),
              (h = tP()),
              (f = tR("div")));
            for (let e = 0; e < w.length; e += 1) w[e].c();
            this.h();
          },
          l(m) {
            var p = tV((t = tY(m, "DIV", { class: !0, style: !0 }))),
              g = tV((n = tY(p, "DIV", { class: !0 }))),
              A = tV((l = tY(g, "DIV", { class: !0 })));
            ((o = tW(A, e[3])), A.forEach(tL), (i = tq(g)));
            var x = tV((r = tY(g, "DIV", { class: !0 })));
            ((s = tW(x, v)),
              (a = tW(x, "\n            >>")),
              x.forEach(tL),
              g.forEach(tL),
              (c = tq(p)));
            var y = tV((d = tY(p, "DIV", { style: !0 })));
            (nI(u.$$.fragment, y), y.forEach(tL), (h = tq(p)));
            var E = tV((f = tY(p, "DIV", { class: !0 })));
            for (let e = 0; e < w.length; e += 1) w[e].l(E);
            (E.forEach(tL), p.forEach(tL), this.h());
          },
          h() {
            (tG(l, "class", "sm-fdi svelte-12jv77o"),
              tG(r, "class", "sm-btn svelte-12jv77o"),
              tG(n, "class", "sm-hd svelte-12jv77o"),
              t1(d, "margin", "12px 0"),
              tG(f, "class", "sm-list svelte-12jv77o"),
              tG(t, "class", "sm-tooth-movement svelte-12jv77o"),
              t1(t, "bottom", e[1]));
          },
          m(v, A) {
            (tk(v, t, A),
              tD(t, n),
              tD(n, l),
              tD(l, o),
              tD(n, i),
              tD(n, r),
              tD(r, s),
              tD(r, a),
              tD(t, c),
              tD(t, d),
              nO(u, d, null),
              tD(t, h),
              tD(t, f));
            for (let e = 0; e < w.length; e += 1) w[e] && w[e].m(f, null);
            ((m = !0),
              p ||
                ((g = [
                  tj(r, "mousedown", tH(e[22])),
                  tj(r, "touchstart", tH(e[23])),
                  tj(r, "touchend", tH(e[24])),
                  tj(r, "click", e[5]),
                ]),
                (p = !0)));
          },
          p(e, n) {
            if (
              ((!m || 8 & n[0]) && tX(o, e[3]),
              (!m || 1 & n[0]) &&
                v !== (v = e[0].t("movement.viewAll") + "") &&
                tX(s, v),
              4 & n[0])
            ) {
              let t;
              for (t = 0, A = Object.values(e[2]); t < A.length; t += 1) {
                let l = uh(e, A, t);
                w[t]
                  ? w[t].p(l, n)
                  : ((w[t] = uf(l)), w[t].c(), w[t].m(f, null));
              }
              for (; t < w.length; t += 1) w[t].d(1);
              w.length = A.length;
            }
            (!m || 2 & n[0]) && t1(t, "bottom", e[1]);
          },
          i(e) {
            m || (nx(u.$$.fragment, e), (m = !0));
          },
          o(e) {
            (ny(u.$$.fragment, e), (m = !1));
          },
          d(e) {
            (e && tL(t), nM(u), tN(w, e), (p = !1), tr(g));
          },
        };
      }
      function up(e, t, n) {
        var l, o, i, r, s, a;
        let c, d, u, h, f, m, p, g, v, A, w, x, y, E, C;
        let b = o8();
        return (
          tu(e, b, (e) => n(21, (C = e))),
          (e.$$.update = () => {
            if (
              (2097152 & e.$$.dirty[0] && n(0, (c = l0(C.language))),
              2097152 & e.$$.dirty[0] && (d = C.stat),
              2097152 & e.$$.dirty[0] && n(20, (u = C.selectedFdi)),
              2097152 & e.$$.dirty[0] && n(18, (h = C.selectedToothSegment)),
              2097344 & e.$$.dirty[0] &&
                n(
                  19,
                  (f =
                    null !==
                      n(
                        7,
                        (o =
                          null === n(6, (l = C.main)) || void 0 === l
                            ? void 0
                            : l.dentalNotationType),
                      ) && void 0 !== o
                      ? o
                      : J.oE.FDI),
                ),
              1572864 & e.$$.dirty[0] &&
                n(3, (m = -1 === u || -2 === u ? "--" : (0, J.B_)(u, f))),
              2363136 & e.$$.dirty[0] &&
                n(
                  17,
                  (p =
                    null !==
                      n(
                        11,
                        (a = C.mdf.working
                          ? null === n(8, (i = C.mdf.singleStepMovement)) ||
                            void 0 === i
                            ? void 0
                            : i[h]
                          : null ===
                                n(
                                  10,
                                  (s =
                                    null === n(9, (r = C.main)) || void 0 === r
                                      ? void 0
                                      : r.singleStepMovement),
                                ) || void 0 === s
                            ? void 0
                            : s[h]),
                      ) && void 0 !== a
                      ? a
                      : {}),
                ),
              131073 & e.$$.dirty[0] && n(2, (g = li(c, p))),
              2097152 & e.$$.dirty[0] && n(12, (v = C.viewMode)),
              2097152 & e.$$.dirty[0] && n(16, (A = C.mdf)),
              2097152 & e.$$.dirty[0] && n(13, (w = C.main)),
              2097152 & e.$$.dirty[0] && n(15, (x = C.toggleEnabled)),
              2097152 & e.$$.dirty[0] && n(14, (y = C.toggle)),
              126976 & e.$$.dirty[0])
            ) {
              var t;
              n(
                1,
                (E =
                  A.working && !A.comparing
                    ? "70px"
                    : x.tma && y.tma
                      ? "40px"
                      : (null === (t = null == w ? void 0 : w.analysis) ||
                          void 0 === t
                            ? void 0
                            : t.stepMetrics.max) && v !== eu.DUAL
                        ? "20px"
                        : "70px"),
              );
            }
          }),
          [
            c,
            E,
            g,
            m,
            b,
            () => {
              (b.update({ _movementType: e9.TABLE }),
                d({ catalog: "牙齿移动量表", event: "点击查看全部" }));
            },
            l,
            o,
            i,
            r,
            s,
            a,
            v,
            w,
            y,
            x,
            A,
            p,
            h,
            f,
            u,
            C,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class ug extends nk {
        constructor(e) {
          (super(), nD(this, e, up, um, ta, {}, uu, [-1, -1]));
        }
      }
      function uv(e) {
        tI(
          e,
          "svelte-1qu7s6o",
          ".sm-tooth-movement.svelte-1qu7s6o{margin-top:32px}.sm-hd.svelte-1qu7s6o{display:flex;flex-flow:row nowrap;align-items:flex-end}.sm-fdi.svelte-1qu7s6o{color:var(--link-color);font-size:20px;line-height:1;margin-right:18px}.sm-btn.svelte-1qu7s6o{color:var(--link-color-new);cursor:pointer;font-size:12px}.sm-list.svelte-1qu7s6o{margin-top:12px}.sm-item.svelte-1qu7s6o{display:flex;flex-flow:row nowrap;align-items:center;line-height:24px}.sm-value.svelte-1qu7s6o{font-size:14px;color:var(--foreground-color)}.sm-unit.svelte-1qu7s6o{margin-left:1em;font-size:12px;color:var(--foreground-color)}.sm-number.svelte-1qu7s6o,.sm-symbol.svelte-1qu7s6o,.sm-dir.svelte-1qu7s6o,.sm-method.svelte-1qu7s6o{display:inline-block}.sm-number.svelte-1qu7s6o{width:2em}.sm-symbol.svelte-1qu7s6o{width:0.5em}.sm-dir.svelte-1qu7s6o{min-width:2em}.sm-method.svelte-1qu7s6o{margin-left:0.5em}@media screen and (max-height: 520px){.sm-tooth-movement.svelte-1qu7s6o{margin-top:0}}",
        );
      }
      function uA(e, t, n) {
        let l = e.slice();
        return (
          (l[20] = t[n].value),
          (l[21] = t[n].symbol),
          (l[22] = t[n].dir),
          (l[23] = t[n].method),
          l
        );
      }
      function uw(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p;
        let g = e[20] + "",
          v = e[21] + "",
          A = e[22] + "",
          w = e[23] + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("span")),
              (o = tB(g)),
              (i = tP()),
              (r = tR("span")),
              (s = tB(v)),
              (a = tP()),
              (c = tR("div")),
              (d = tR("span")),
              (u = tB(A)),
              (h = tP()),
              (f = tR("span")),
              (m = tB(w)),
              (p = tP()),
              this.h());
          },
          l(e) {
            var x = tV((t = tY(e, "DIV", { class: !0 }))),
              y = tV((n = tY(x, "DIV", { class: !0 }))),
              E = tV((l = tY(y, "SPAN", { class: !0 })));
            ((o = tW(E, g)), E.forEach(tL), (i = tq(y)));
            var C = tV((r = tY(y, "SPAN", { class: !0 })));
            ((s = tW(C, v)), C.forEach(tL), y.forEach(tL), (a = tq(x)));
            var b = tV((c = tY(x, "DIV", { class: !0 }))),
              T = tV((d = tY(b, "SPAN", { class: !0 })));
            ((u = tW(T, A)), T.forEach(tL), (h = tq(b)));
            var $ = tV((f = tY(b, "SPAN", { class: !0 })));
            ((m = tW($, w)),
              $.forEach(tL),
              b.forEach(tL),
              (p = tq(x)),
              x.forEach(tL),
              this.h());
          },
          h() {
            (tG(l, "class", "sm-number svelte-1qu7s6o"),
              tG(r, "class", "sm-symbol svelte-1qu7s6o"),
              tG(n, "class", "sm-value svelte-1qu7s6o"),
              tG(d, "class", "sm-dir svelte-1qu7s6o"),
              tG(f, "class", "sm-method svelte-1qu7s6o"),
              tG(c, "class", "sm-unit svelte-1qu7s6o"),
              tG(t, "class", "sm-item svelte-1qu7s6o"));
          },
          m(e, g) {
            (tk(e, t, g),
              tD(t, n),
              tD(n, l),
              tD(l, o),
              tD(n, i),
              tD(n, r),
              tD(r, s),
              tD(t, a),
              tD(t, c),
              tD(c, d),
              tD(d, u),
              tD(c, h),
              tD(c, f),
              tD(f, m),
              tD(t, p));
          },
          p(e, t) {
            (2 & t && g !== (g = e[20] + "") && tX(o, g),
              2 & t && v !== (v = e[21] + "") && tX(s, v),
              2 & t && A !== (A = e[22] + "") && tX(u, A),
              2 & t && w !== (w = e[23] + "") && tX(m, w));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ux(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h;
        let f = e[0].t("movement.viewAll") + "",
          m = Object.values(e[1]),
          p = [];
        for (let t = 0; t < m.length; t += 1) p[t] = uw(uA(e, m, t));
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              (o = tB(e[2])),
              (i = tP()),
              (r = tR("div")),
              (s = tB(f)),
              (a = tB("\n            >>")),
              (c = tP()),
              (d = tR("div")));
            for (let e = 0; e < p.length; e += 1) p[e].c();
            this.h();
          },
          l(u) {
            var h = tV((t = tY(u, "DIV", { class: !0 }))),
              m = tV((n = tY(h, "DIV", { class: !0 }))),
              g = tV((l = tY(m, "DIV", { class: !0 })));
            ((o = tW(g, e[2])), g.forEach(tL), (i = tq(m)));
            var v = tV((r = tY(m, "DIV", { class: !0 })));
            ((s = tW(v, f)),
              (a = tW(v, "\n            >>")),
              v.forEach(tL),
              m.forEach(tL),
              (c = tq(h)));
            var A = tV((d = tY(h, "DIV", { class: !0 })));
            for (let e = 0; e < p.length; e += 1) p[e].l(A);
            (A.forEach(tL), h.forEach(tL), this.h());
          },
          h() {
            (tG(l, "class", "sm-fdi svelte-1qu7s6o"),
              tG(r, "class", "sm-btn svelte-1qu7s6o"),
              tG(n, "class", "sm-hd svelte-1qu7s6o"),
              tG(d, "class", "sm-list svelte-1qu7s6o"),
              tG(t, "class", "sm-tooth-movement svelte-1qu7s6o"));
          },
          m(f, m) {
            (tk(f, t, m),
              tD(t, n),
              tD(n, l),
              tD(l, o),
              tD(n, i),
              tD(n, r),
              tD(r, s),
              tD(r, a),
              tD(t, c),
              tD(t, d));
            for (let e = 0; e < p.length; e += 1) p[e] && p[e].m(d, null);
            u ||
              ((h = [
                tj(r, "mousedown", tH(e[16])),
                tj(r, "touchstart", tH(e[17])),
                tj(r, "touchend", tH(e[18])),
                tj(r, "click", e[4]),
              ]),
              (u = !0));
          },
          p(e, t) {
            let [n] = t;
            if (
              (4 & n && tX(o, e[2]),
              1 & n && f !== (f = e[0].t("movement.viewAll") + "") && tX(s, f),
              2 & n)
            ) {
              let t;
              for (t = 0, m = Object.values(e[1]); t < m.length; t += 1) {
                let l = uA(e, m, t);
                p[t]
                  ? p[t].p(l, n)
                  : ((p[t] = uw(l)), p[t].c(), p[t].m(d, null));
              }
              for (; t < p.length; t += 1) p[t].d(1);
              p.length = m.length;
            }
          },
          i: tn,
          o: tn,
          d(e) {
            (e && tL(t), tN(p, e), (u = !1), tr(h));
          },
        };
      }
      function uy(e, t, n) {
        var l, o, i, r, s, a;
        let c, d, u, h, f, m, p, g, v;
        let A = o8();
        return (
          tu(e, A, (e) => n(15, (v = e))),
          (e.$$.update = () => {
            (32768 & e.$$.dirty && n(0, (c = l0(v.language))),
              32768 & e.$$.dirty && (d = v.stat),
              32768 & e.$$.dirty && n(14, (u = v.selectedFdi)),
              32768 & e.$$.dirty && n(12, (h = v.selectedToothSegment)),
              32864 & e.$$.dirty &&
                n(
                  13,
                  (f =
                    null !==
                      n(
                        6,
                        (o =
                          null === n(5, (l = v.main)) || void 0 === l
                            ? void 0
                            : l.dentalNotationType),
                      ) && void 0 !== o
                      ? o
                      : J.oE.FDI),
                ),
              24576 & e.$$.dirty &&
                n(2, (m = -1 === u || -2 === u ? "--" : (0, J.B_)(u, f))),
              38784 & e.$$.dirty &&
                n(
                  11,
                  (p =
                    null !==
                      n(
                        10,
                        (a = v.mdf.working
                          ? null === n(7, (i = v.mdf.singleStepMovement)) ||
                            void 0 === i
                            ? void 0
                            : i[h]
                          : null ===
                                n(
                                  9,
                                  (s =
                                    null === n(8, (r = v.main)) || void 0 === r
                                      ? void 0
                                      : r.singleStepMovement),
                                ) || void 0 === s
                            ? void 0
                            : s[h]),
                      ) && void 0 !== a
                      ? a
                      : {}),
                ),
              2049 & e.$$.dirty && n(1, (g = li(c, p))));
          }),
          [
            c,
            g,
            m,
            A,
            () => {
              (A.update({ _movementType: e9.TABLE }),
                d({ catalog: "牙齿移动量表", event: "点击查看全部" }));
            },
            l,
            o,
            i,
            r,
            s,
            a,
            p,
            h,
            f,
            u,
            v,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class uE extends nk {
        constructor(e) {
          (super(), nD(this, e, uy, ux, ta, {}, uv));
        }
      }
      function uC(e) {
        let t;
        return {
          c() {
            ((t = tS("path")), this.h());
          },
          l(e) {
            (tV(
              (t = tK(e, "path", { d: !0, fill: !0, "fill-rule": !0 })),
            ).forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "d", "M7 7l7-7H0z"),
              tG(t, "fill", e[0]),
              tG(t, "fill-rule", "evenodd"));
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, n) {
            1 & n && tG(t, "fill", e[0]);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ub(e) {
        let t, n;
        return (
          (t = new lx({
            props: {
              width: e[1],
              height: e[2],
              style: e[3],
              viewBox: "0 0 14 7",
              $$slots: { default: [uC] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (2 & l && (o.width = e[1]),
                4 & l && (o.height = e[2]),
                8 & l && (o.style = e[3]),
                17 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function uT(e, t, n) {
        let { color: l = "currentColor" } = t,
          { width: o = 14 } = t,
          { height: i = 7 } = t,
          { style: r = "" } = t;
        return (
          (e.$$set = (e) => {
            ("color" in e && n(0, (l = e.color)),
              "width" in e && n(1, (o = e.width)),
              "height" in e && n(2, (i = e.height)),
              "style" in e && n(3, (r = e.style)));
          }),
          [l, o, i, r]
        );
      }
      class u$ extends nk {
        constructor(e) {
          (super(),
            nD(this, e, uT, ub, ta, {
              color: 0,
              width: 1,
              height: 2,
              style: 3,
            }));
        }
      }
      function uI(e) {
        tI(
          e,
          "svelte-tyzxh5",
          ".sm-selector.svelte-tyzxh5{position:relative;user-select:none;display:flex;flex-flow:column;justify-content:center;--_border-color:var(--sm-selector-border-color, #e8e8e8);--_bg-color:var(--sm-selector-bg-color, #eff0f6);--_color:var(--sm-selector-color, #4e4b66);--_active-bg-color:var(--sm-selector-active-bg-color, #0086cd);--_active-color:var(--sm-selector-active-color, #fff)}.sm-button.svelte-tyzxh5{padding:0 10px;border:1px solid var(--_border-color);border-radius:4px;color:var(--_color);cursor:pointer;display:flex;flex-flow:row;align-items:center}.sm-options.svelte-tyzxh5{position:absolute;background-color:var(--_bg-color);color:var(--_color);box-shadow:0 0 6px 0 rgba(130, 130, 130, 0.65);border-radius:4px;overflow:auto}.sm-label.svelte-tyzxh5{padding:0 12px;white-space:nowrap;font-size:14px;line-height:34px;height:34px;cursor:pointer;user-select:none}.sm-label.svelte-tyzxh5:hover,.sm-label.sm-active.svelte-tyzxh5{background:var(--_active-bg-color);color:var(--_active-color)}",
        );
      }
      function uO(e, t, n) {
        let l = e.slice();
        return ((l[15] = t[n].label), (l[16] = t[n].value), l);
      }
      function uM(e) {
        let t;
        let n = e[3],
          l = [];
        for (let t = 0; t < n.length; t += 1) l[t] = uD(uO(e, n, t));
        return {
          c() {
            t = tR("div");
            for (let e = 0; e < l.length; e += 1) l[e].c();
            this.h();
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            for (let e = 0; e < l.length; e += 1) l[e].l(n);
            (n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-options svelte-tyzxh5"),
              t1(t, "top", e[2] + 8 + "px"));
          },
          m(e, n) {
            tk(e, t, n);
            for (let e = 0; e < l.length; e += 1) l[e] && l[e].m(t, null);
          },
          p(e, o) {
            if (393 & o) {
              let i;
              for (i = 0, n = e[3]; i < n.length; i += 1) {
                let r = uO(e, n, i);
                l[i]
                  ? l[i].p(r, o)
                  : ((l[i] = uD(r)), l[i].c(), l[i].m(t, null));
              }
              for (; i < l.length; i += 1) l[i].d(1);
              l.length = n.length;
            }
            4 & o && t1(t, "top", e[2] + 8 + "px");
          },
          d(e) {
            (e && tL(t), tN(l, e));
          },
        };
      }
      function uD(e) {
        let t, n, l, o, i;
        let r = e[15] + "";
        function s() {
          return e[14](e[16]);
        }
        return {
          c() {
            ((t = tR("div")), (n = tB(r)), (l = tP()), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(o, r)), (l = tq(o)), o.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-label svelte-tyzxh5"),
              t0(t, "sm-active", e[16] === e[0]));
          },
          m(e, r) {
            (tk(e, t, r),
              tD(t, n),
              tD(t, l),
              o || ((i = tj(t, "click", s)), (o = !0)));
          },
          p(l, o) {
            ((e = l),
              8 & o && r !== (r = e[15] + "") && tX(n, r),
              9 & o && t0(t, "sm-active", e[16] === e[0]));
          },
          d(e) {
            (e && tL(t), (o = !1), i());
          },
        };
      }
      function uk(e) {
        var t, n;
        let l, o, i, r, s, a, c, d, u, h;
        let f =
          (null != (n = null == (t = e[6]) ? void 0 : t.label) ? n : e[4]) + "";
        a = new u$({ props: { style: "margin-left: 8px", width: "12" } });
        let m = e[5] && uM(e);
        return {
          c() {
            ((l = tR("div")),
              (o = tR("div")),
              (i = tR("span")),
              (r = tB(f)),
              (s = tP()),
              n$(a.$$.fragment),
              (c = tP()),
              m && m.c(),
              this.h());
          },
          l(e) {
            var t = tV((l = tY(e, "DIV", { class: !0, style: !0 }))),
              n = tV((o = tY(t, "DIV", { class: !0, style: !0 }))),
              d = tV((i = tY(n, "SPAN", { style: !0 })));
            ((r = tW(d, f)),
              d.forEach(tL),
              (s = tq(n)),
              nI(a.$$.fragment, n),
              n.forEach(tL),
              (c = tq(t)),
              m && m.l(t),
              t.forEach(tL),
              this.h());
          },
          h() {
            (t1(i, "flex", "1"),
              tG(o, "class", "sm-button svelte-tyzxh5"),
              t1(o, "height", e[2] + "px"),
              t1(o, "line-height", e[2] + "px"),
              tG(l, "class", "sm-selector svelte-tyzxh5"),
              tG(l, "style", e[1]));
          },
          m(t, n) {
            (tk(t, l, n),
              tD(l, o),
              tD(o, i),
              tD(i, r),
              tD(o, s),
              nO(a, o, null),
              tD(l, c),
              m && m.m(l, null),
              (d = !0),
              u ||
                ((h = [
                  tj(window, "mousedown", e[8]),
                  tj(window, "touchstart", e[8]),
                  tj(o, "click", e[13]),
                  tj(l, "mousedown", tH(e[9])),
                  tj(l, "mouseup", tH(e[10])),
                  tj(l, "touchstart", tH(e[11])),
                  tj(l, "touchend", tH(e[12])),
                ]),
                (u = !0)));
          },
          p(e, t) {
            var n, i;
            let [s] = t;
            ((!d || 80 & s) &&
              f !==
                (f =
                  (null != (i = null == (n = e[6]) ? void 0 : n.label)
                    ? i
                    : e[4]) + "") &&
              tX(r, f),
              (!d || 4 & s) && t1(o, "height", e[2] + "px"),
              (!d || 4 & s) && t1(o, "line-height", e[2] + "px"),
              e[5]
                ? m
                  ? m.p(e, s)
                  : ((m = uM(e)).c(), m.m(l, null))
                : m && (m.d(1), (m = null)),
              (!d || 2 & s) && tG(l, "style", e[1]));
          },
          i(e) {
            d || (nx(a.$$.fragment, e), (d = !0));
          },
          o(e) {
            (ny(a.$$.fragment, e), (d = !1));
          },
          d(e) {
            (e && tL(l), nM(a), m && m.d(), (u = !1), tr(h));
          },
        };
      }
      function uL(e, t, n) {
        let l;
        let { style: o = "" } = t,
          { height: i = 22 } = t,
          { options: r = [] } = t,
          { value: s = null } = t,
          { placeholder: a = "请选择" } = t,
          c = nn(),
          d = !1,
          u = () => n(5, (d = !1));
        return (
          (e.$$set = (e) => {
            ("style" in e && n(1, (o = e.style)),
              "height" in e && n(2, (i = e.height)),
              "options" in e && n(3, (r = e.options)),
              "value" in e && n(0, (s = e.value)),
              "placeholder" in e && n(4, (a = e.placeholder)));
          }),
          (e.$$.update = () => {
            9 & e.$$.dirty &&
              n(
                6,
                (l = r.find((e) => {
                  let { value: t } = e;
                  return t === s;
                })),
              );
          }),
          [
            s,
            o,
            i,
            r,
            a,
            d,
            l,
            c,
            u,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => {
              n(5, (d = !d));
            },
            (e) => {
              (n(0, (s = e)), c("change", e), u());
            },
          ]
        );
      }
      class uN extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              uL,
              uk,
              ta,
              { style: 1, height: 2, options: 3, value: 0, placeholder: 4 },
              uI,
            ));
        }
      }
      function uR(e) {
        tI(
          e,
          "svelte-mbc03h",
          ".sm-step-movement.svelte-mbc03h.svelte-mbc03h{width:100%;display:flex;flex-flow:row nowrap;font-size:12px;color:#4e4b66}.sm-column.svelte-mbc03h.svelte-mbc03h{display:flex;flex-flow:column}.sm-cell.svelte-mbc03h.svelte-mbc03h{height:25px;line-height:25px}.sm-cell.hd.svelte-mbc03h.svelte-mbc03h{height:30px;line-height:30px}.sm-cell.svelte-mbc03h.svelte-mbc03h:nth-child(2n){background-color:#eff0f6}.sm-cell.svelte-mbc03h.svelte-mbc03h:nth-child(2n + 1){background-color:#f7f7fc}.sm-desc.svelte-mbc03h .sm-cell.svelte-mbc03h{padding:0 2em}.sm-method.svelte-mbc03h.svelte-mbc03h{display:inline-block;min-width:4em}.sm-unit.svelte-mbc03h.svelte-mbc03h{margin-left:1em}.sm-main.svelte-mbc03h.svelte-mbc03h{flex:1;overflow-x:auto;display:flex;flex-flow:row nowrap}.sm-main.svelte-mbc03h .sm-column.svelte-mbc03h{flex:1;position:relative}.sm-main.svelte-mbc03h .sm-cell.svelte-mbc03h{min-width:5em;text-align:center}.sm-main.svelte-mbc03h .sm-active-column.svelte-mbc03h{outline:2px solid #0086cd;outline-offset:-2px;background-color:#0086cd}.sm-main.svelte-mbc03h .sm-active-column .sm-cell.svelte-mbc03h{color:#fff;background-color:#0086cd;font-weight:bold}.sm-main.svelte-mbc03h .sm-column .sm-cell.colorized.svelte-mbc03h{color:var(--cell-color, #fff);background-color:var(--cell-bg-color)}.sm-btn-hide.svelte-mbc03h.svelte-mbc03h{width:112px;height:25px;line-height:25px;font-size:12px;padding-right:10px;background-color:#f7f7fc;color:#4e4b66;text-align:right;cursor:pointer;user-select:none}",
        );
      }
      function uS(e, t, n) {
        let l = e.slice();
        return ((l[42] = t[n]), l);
      }
      function uB(e, t, n) {
        let l = e.slice();
        return ((l[45] = t[n]), l);
      }
      function uP(e, t, n) {
        let l = e.slice();
        return ((l[48] = t[n].method), (l[49] = t[n].unit), l);
      }
      function uU(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p, g, v, A, w, x, y;
        let E = e[0].t("movement.hide") + "";
        function C(t) {
          e[40](t);
        }
        (u = new uN({ props: { options: e[7], value: e[2] } })).$on(
          "change",
          e[39],
        );
        let b = { options: e[6], style: "margin-left: 12px" };
        (void 0 !== e[4] && (b.value = e[4]),
          (f = new uN({ props: b })),
          ni.push(() => nT(f, "value", C)));
        let T = Object.values(e[8]),
          $ = [];
        for (let t = 0; t < T.length; t += 1) $[t] = uj(uP(e, T, t));
        let I = e[10],
          O = [];
        for (let t = 0; t < I.length; t += 1) O[t] = uH(uS(e, I, t));
        return {
          c() {
            ((t = tR("div")),
              (n = tR("span")),
              (l = tB("<<")),
              (o = tP()),
              (i = tB(E)),
              (s = tP()),
              (a = tR("div")),
              (c = tR("div")),
              (d = tR("div")),
              n$(u.$$.fragment),
              (h = tP()),
              n$(f.$$.fragment),
              (p = tP()));
            for (let e = 0; e < $.length; e += 1) $[e].c();
            ((g = tP()), (v = tR("div")));
            for (let e = 0; e < O.length; e += 1) O[e].c();
            this.h();
          },
          l(e) {
            var r = tV((t = tY(e, "DIV", { class: !0 }))),
              m = tV((n = tY(r, "SPAN", {})));
            ((l = tW(m, "<<")),
              m.forEach(tL),
              (o = tq(r)),
              (i = tW(r, E)),
              r.forEach(tL),
              (s = tq(e)));
            var A = tV((a = tY(e, "DIV", { class: !0 }))),
              w = tV((c = tY(A, "DIV", { class: !0 }))),
              x = tV((d = tY(w, "DIV", { class: !0, style: !0 })));
            (nI(u.$$.fragment, x),
              (h = tq(x)),
              nI(f.$$.fragment, x),
              x.forEach(tL),
              (p = tq(w)));
            for (let e = 0; e < $.length; e += 1) $[e].l(w);
            (w.forEach(tL), (g = tq(A)));
            var y = tV((v = tY(A, "DIV", { class: !0 })));
            for (let e = 0; e < O.length; e += 1) O[e].l(y);
            (y.forEach(tL), A.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", "sm-btn-hide svelte-mbc03h"),
              tG(d, "class", "sm-cell hd svelte-mbc03h"),
              t1(d, "display", "flex"),
              tG(c, "class", "sm-column sm-desc svelte-mbc03h"),
              tG(v, "class", "sm-main svelte-mbc03h"),
              tG(a, "class", "sm-step-movement svelte-mbc03h"));
          },
          m(r, m) {
            (tk(r, t, m),
              tD(t, n),
              tD(n, l),
              tD(t, o),
              tD(t, i),
              tk(r, s, m),
              tk(r, a, m),
              tD(a, c),
              tD(c, d),
              nO(u, d, null),
              tD(d, h),
              nO(f, d, null),
              tD(c, p));
            for (let e = 0; e < $.length; e += 1) $[e] && $[e].m(c, null);
            (tD(a, g), tD(a, v));
            for (let e = 0; e < O.length; e += 1) O[e] && O[e].m(v, null);
            ((w = !0),
              x ||
                ((y = [
                  tj(t, "mousedown", tH(e[34])),
                  tj(t, "mouseup", tH(e[35])),
                  tj(t, "touchstart", tH(e[36])),
                  tj(t, "touchend", tH(e[37])),
                  tj(t, "click", e[38]),
                  tj(v, "touchstart", tH(e[30])),
                  tj(v, "touchmove", tH(e[31])),
                  tj(v, "touchend", tH(e[32])),
                  tj(v, "wheel", tH(e[33])),
                ]),
                (x = !0)));
          },
          p(e, t) {
            (!w || 1 & t[0]) &&
              E !== (E = e[0].t("movement.hide") + "") &&
              tX(i, E);
            let n = {};
            (128 & t[0] && (n.options = e[7]),
              4 & t[0] && (n.value = e[2]),
              u.$set(n));
            let l = {};
            if (
              (64 & t[0] && (l.options = e[6]),
              !m &&
                16 & t[0] &&
                ((m = !0), (l.value = e[4]), nu(() => (m = !1))),
              f.$set(l),
              256 & t[0])
            ) {
              let n;
              for (n = 0, T = Object.values(e[8]); n < T.length; n += 1) {
                let l = uP(e, T, n);
                $[n]
                  ? $[n].p(l, t)
                  : (($[n] = uj(l)), $[n].c(), $[n].m(c, null));
              }
              for (; n < $.length; n += 1) $[n].d(1);
              $.length = T.length;
            }
            if (40450 & t[0]) {
              let n;
              for (n = 0, I = e[10]; n < I.length; n += 1) {
                let l = uS(e, I, n);
                O[n]
                  ? O[n].p(l, t)
                  : ((O[n] = uH(l)), O[n].c(), O[n].m(v, null));
              }
              for (; n < O.length; n += 1) O[n].d(1);
              O.length = I.length;
            }
          },
          i(e) {
            w ||
              (nd(() => {
                w && (r || (r = nb(t, i6, { x: -1e3 }, !0)), r.run(1));
              }),
              nx(u.$$.fragment, e),
              nx(f.$$.fragment, e),
              nd(() => {
                w && (A || (A = nb(a, i6, { x: -1e3 }, !0)), A.run(1));
              }),
              (w = !0));
          },
          o(e) {
            (r || (r = nb(t, i6, { x: -1e3 }, !1)),
              r.run(0),
              ny(u.$$.fragment, e),
              ny(f.$$.fragment, e),
              A || (A = nb(a, i6, { x: -1e3 }, !1)),
              A.run(0),
              (w = !1));
          },
          d(e) {
            (e && tL(t),
              e && r && r.end(),
              e && tL(s),
              e && tL(a),
              nM(u),
              nM(f),
              tN($, e),
              tN(O, e),
              e && A && A.end(),
              (x = !1),
              tr(y));
          },
        };
      }
      function uj(e) {
        let t, n, l, o, i, r;
        let s = e[48] + "",
          a = e[49] + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("span")),
              (l = tB(s)),
              (o = tP()),
              (i = tR("span")),
              (r = tB(a)),
              this.h());
          },
          l(e) {
            var c = tV((t = tY(e, "DIV", { class: !0 }))),
              d = tV((n = tY(c, "SPAN", { class: !0 })));
            ((l = tW(d, s)), d.forEach(tL), (o = tq(c)));
            var u = tV((i = tY(c, "SPAN", { class: !0 })));
            ((r = tW(u, a)), u.forEach(tL), c.forEach(tL), this.h());
          },
          h() {
            (tG(n, "class", "sm-method svelte-mbc03h"),
              tG(i, "class", "sm-unit svelte-mbc03h"),
              tG(t, "class", "sm-cell svelte-mbc03h"));
          },
          m(e, s) {
            (tk(e, t, s), tD(t, n), tD(n, l), tD(t, o), tD(t, i), tD(i, r));
          },
          p(e, t) {
            (256 & t[0] && s !== (s = e[48] + "") && tX(l, s),
              256 & t[0] && a !== (a = e[49] + "") && tX(r, a));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function uz(e) {
        let t, n, l, o;
        let i = e[45].v + "",
          r = e[45].d + "";
        return {
          c() {
            ((t = tR("div")), (n = tB(i)), (l = tP()), (o = tB(r)), this.h());
          },
          l(e) {
            var s = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(s, i)),
              (l = tq(s)),
              (o = tW(s, r)),
              s.forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "class", "sm-cell svelte-mbc03h"),
              t0(t, "colorized", e[12] && !!e[45].c),
              t1(t, "--cell-bg-color", e[45].c));
          },
          m(e, i) {
            (tk(e, t, i), tD(t, n), tD(t, l), tD(t, o));
          },
          p(e, l) {
            (1536 & l[0] && i !== (i = e[45].v + "") && tX(n, i),
              1536 & l[0] && r !== (r = e[45].d + "") && tX(o, r),
              38400 & l[0] && t0(t, "colorized", e[12] && !!e[45].c),
              1536 & l[0] && t1(t, "--cell-bg-color", e[45].c));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function uH(e) {
        let t, n, l, o, i, r;
        let s = (0, J.B_)(e[42], e[11]) + "",
          a = Object.values(e[15](e[9].get(e[42]))),
          c = [];
        for (let t = 0; t < a.length; t += 1) c[t] = uz(uB(e, a, t));
        return {
          c() {
            ((t = tR("div")), (n = tR("div")), (l = tB(s)), (o = tP()));
            for (let e = 0; e < c.length; e += 1) c[e].c();
            ((i = tP()), this.h());
          },
          l(e) {
            var r = tV((t = tY(e, "DIV", { "data-fdi": !0, class: !0 }))),
              a = tV((n = tY(r, "DIV", { class: !0 })));
            ((l = tW(a, s)), a.forEach(tL), (o = tq(r)));
            for (let e = 0; e < c.length; e += 1) c[e].l(r);
            ((i = tq(r)), r.forEach(tL), this.h());
          },
          h() {
            (tG(n, "class", "sm-cell hd svelte-mbc03h"),
              tG(t, "data-fdi", (r = e[42])),
              tG(t, "class", "sm-column svelte-mbc03h"),
              t0(t, "colorized", e[12]),
              t0(t, "sm-active-column", e[42] === e[1]));
          },
          m(e, r) {
            (tk(e, t, r), tD(t, n), tD(n, l), tD(t, o));
            for (let e = 0; e < c.length; e += 1) c[e] && c[e].m(t, null);
            tD(t, i);
          },
          p(e, n) {
            if (
              (3072 & n[0] &&
                s !== (s = (0, J.B_)(e[42], e[11]) + "") &&
                tX(l, s),
              38400 & n[0])
            ) {
              let l;
              for (
                l = 0, a = Object.values(e[15](e[9].get(e[42])));
                l < a.length;
                l += 1
              ) {
                let o = uB(e, a, l);
                c[l] ? c[l].p(o, n) : ((c[l] = uz(o)), c[l].c(), c[l].m(t, i));
              }
              for (; l < c.length; l += 1) c[l].d(1);
              c.length = a.length;
            }
            (1024 & n[0] && r !== (r = e[42]) && tG(t, "data-fdi", r),
              4096 & n[0] && t0(t, "colorized", e[12]),
              1026 & n[0] && t0(t, "sm-active-column", e[42] === e[1]));
          },
          d(e) {
            (e && tL(t), tN(c, e));
          },
        };
      }
      function uG(e) {
        let t, n;
        let l = e[5]._movementType === e9.TABLE && e[3] && uU(e);
        return {
          c() {
            (l && l.c(), (t = tU()));
          },
          l(e) {
            (l && l.l(e), (t = tU()));
          },
          m(e, o) {
            (l && l.m(e, o), tk(e, t, o), (n = !0));
          },
          p(e, n) {
            e[5]._movementType === e9.TABLE && e[3]
              ? l
                ? (l.p(e, n), 40 & n[0] && nx(l, 1))
                : ((l = uU(e)).c(), nx(l, 1), l.m(t.parentNode, t))
              : l &&
                (nA(),
                ny(l, 1, 1, () => {
                  l = null;
                }),
                nw());
          },
          i(e) {
            n || (nx(l), (n = !0));
          },
          o(e) {
            (ny(l), (n = !1));
          },
          d(e) {
            (l && l.d(e), e && tL(t));
          },
        };
      }
      function uV(e, t, n) {
        var l, o, i, r, s, a, c, d, u, h;
        let f, m, p, g, v, A, w, x, y, E, C, b, T, $, I, O, M;
        let D = (e) => e,
          k = o8();
        tu(e, k, (e) => n(5, (M = e)));
        let L = () => {
          k.update({ _movementType: e9.SIMPLE });
        };
        return (
          (e.$$.update = () => {
            (32 & e.$$.dirty[0] && n(0, (f = l0(M.language))),
              917536 & e.$$.dirty[0] &&
                n(
                  29,
                  (m = [
                    ...(null !==
                      n(
                        19,
                        (i =
                          null ===
                            n(
                              18,
                              (o =
                                null === n(17, (l = M.main)) || void 0 === l
                                  ? void 0
                                  : l.analysis),
                            ) || void 0 === o
                            ? void 0
                            : o.upperFdis),
                      ) && void 0 !== i
                      ? i
                      : []),
                  ]),
                ),
              7340064 & e.$$.dirty[0] &&
                n(
                  28,
                  (p = [
                    ...(null !==
                      n(
                        22,
                        (a =
                          null ===
                            n(
                              21,
                              (s =
                                null === n(20, (r = M.main)) || void 0 === r
                                  ? void 0
                                  : r.analysis),
                            ) || void 0 === s
                            ? void 0
                            : s.lowerFdis),
                      ) && void 0 !== a
                      ? a
                      : []),
                  ]),
                ),
              32 & e.$$.dirty[0] && n(13, (g = M.stat)),
              32 & e.$$.dirty[0] && n(1, (v = M.selectedFdi)),
              32 & e.$$.dirty[0] && n(2, (A = M.selectedToothSegment)),
              32 & e.$$.dirty[0] &&
                n(27, (w = M._configuration.toothSegmentSelectable)),
              32 & e.$$.dirty[0] && n(12, (x = M.toggle.tma)),
              25165856 & e.$$.dirty[0] &&
                n(
                  11,
                  (y =
                    null !==
                      n(
                        24,
                        (d =
                          null === n(23, (c = M.main)) || void 0 === c
                            ? void 0
                            : c.dentalNotationType),
                      ) && void 0 !== d
                      ? d
                      : J.oE.FDI),
                ),
              2 & e.$$.dirty[0] && n(4, (E = "upper" === e1(D(v)))),
              32 & e.$$.dirty[0] &&
                (M.viewPose === ef.UPPER_OCCL && n(4, (E = !0)),
                M.viewPose === ef.LOWER_OCCL && n(4, (E = !1))),
              100663328 & e.$$.dirty[0] &&
                n(
                  3,
                  (C = M.mdf.working
                    ? null === n(25, (u = M.mdf)) || void 0 === u
                      ? void 0
                      : u.stepMovement
                    : null === n(26, (h = M.main)) || void 0 === h
                      ? void 0
                      : h.stepMovement),
                ),
              805306384 & e.$$.dirty[0] && n(10, (b = E ? m : p)),
              12 & e.$$.dirty[0] &&
                n(
                  9,
                  (T = new Map(
                    [...C].map((e) => {
                      let [t, n] = e;
                      return [t, n[A]];
                    }),
                  )),
                ),
              1 & e.$$.dirty[0] &&
                n(
                  8,
                  ($ = {
                    moveZ: {
                      method: f.t("movement.method.t_z"),
                      unit: ""
                        .concat(f.t("movement.dir.E"), "(E)/")
                        .concat(f.t("movement.dir.I"), "(I) (mm)"),
                    },
                    moveY: {
                      method: f.t("movement.method.t_y"),
                      unit: ""
                        .concat(f.t("movement.dir.La"), "(La)/")
                        .concat(f.t("movement.dir.B"), "(B)/")
                        .concat(f.t("movement.dir.Li"), "(Li) (mm)"),
                    },
                    moveX: {
                      method: f.t("movement.method.t_x"),
                      unit: ""
                        .concat(f.t("movement.dir.M"), "(M)/")
                        .concat(f.t("movement.dir.D"), "(D) (mm)"),
                    },
                    rotateZ: {
                      method: f.t("movement.method.r_z"),
                      unit: ""
                        .concat(f.t("movement.dir.M"), "(M)/")
                        .concat(f.t("movement.dir.D"), "(D)"),
                    },
                    rotateY: {
                      method: f.t("movement.method.r_y"),
                      unit: ""
                        .concat(f.t("movement.dir.M"), "(M)/")
                        .concat(f.t("movement.dir.D"), "(D)"),
                    },
                    rotateX: {
                      method: f.t("movement.method.r_x"),
                      unit: ""
                        .concat(f.t("movement.dir.La"), "(La)/")
                        .concat(f.t("movement.dir.B"), "(B)/")
                        .concat(f.t("movement.dir.Li"), "(Li)"),
                    },
                  }),
                ),
              2 & e.$$.dirty[0] &&
                setTimeout(() => {
                  var e;
                  return null ===
                    (e = document.querySelector(
                      '[data-fdi="'.concat(v, '"]'),
                    )) || void 0 === e
                    ? void 0
                    : e.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                      });
                }),
              134217729 & e.$$.dirty[0] &&
                n(
                  7,
                  (I = w
                    ? [
                        { label: f.t("movement.type.crown"), value: "crown" },
                        { label: f.t("movement.type.center"), value: "center" },
                        { label: f.t("movement.type.tip"), value: "tip" },
                      ]
                    : [{ label: f.t("movement.type.crown"), value: "crown" }]),
                ),
              1 & e.$$.dirty[0] &&
                n(
                  6,
                  (O = [
                    { label: f.t("movement.jaw.upper"), value: !0 },
                    { label: f.t("movement.jaw.lower"), value: !1 },
                  ]),
                ));
          }),
          [
            f,
            v,
            A,
            C,
            E,
            M,
            O,
            I,
            $,
            T,
            b,
            y,
            x,
            g,
            k,
            (e) =>
              e
                ? {
                    t_z: e.t_z,
                    t_y: e.t_y,
                    t_x: e.t_x,
                    r_z: e.r_z,
                    r_y: e.r_y,
                    r_x: e.r_x,
                  }
                : ln,
            L,
            l,
            o,
            i,
            r,
            s,
            a,
            c,
            d,
            u,
            h,
            w,
            p,
            m,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            () => {
              (L(), g({ catalog: "牙齿移动量表", event: "点击收起按钮" }));
            },
            (e) => {
              let { detail: t } = e;
              return k.update({ selectedToothSegment: t });
            },
            function (e) {
              (n(4, (E = e)), n(1, v), n(5, M));
            },
          ]
        );
      }
      class uZ extends nk {
        constructor(e) {
          (super(), nD(this, e, uV, uG, ta, {}, uR, [-1, -1]));
        }
      }
      function uF(e) {
        tI(
          e,
          "svelte-1wh9gm2",
          ".sm-button.svelte-1wh9gm2{user-select:none;cursor:pointer;border-width:1px;border-style:solid;border-color:var(--border-color, #eff0f7);border-radius:8px;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;font-size:12px;line-height:18px;color:var(--color, #4e4b66);position:relative;overflow:hidden;background:var(--background, unset)}.sm-button.svelte-1wh9gm2::after{content:'';position:absolute;left:0;top:0;display:block;width:100%;height:100%}.sm-button.disabled.svelte-1wh9gm2{cursor:not-allowed !important;box-shadow:none !important}.sm-button:not(.disabled).hover.svelte-1wh9gm2,.sm-button:not(.disabled).active.svelte-1wh9gm2{border:1px solid #0086cd}.sm-button:not(.disabled).active.svelte-1wh9gm2{box-shadow:none}.sm-button.shadow.svelte-1wh9gm2{box-shadow:-2px -2px 5px rgba(255, 255, 255, 0.3), 2px 2px 5px rgba(110, 113, 145, 0.1)}.sm-button.shadow:not(.disabled).active.svelte-1wh9gm2{box-shadow:inset -2px -2px 5px rgba(255, 255, 255, 0.1), inset 2px 2px 5px rgba(110, 113, 145, 0.1)}",
        );
      }
      let uJ = (e) => ({ disabled: 4 & e }),
        uY = (e) => ({ disabled: e[2] });
      function uK(e) {
        let t, n, l, o, i;
        let r = e[15].default,
          s = th(r, e, e[14], uY);
        return {
          c() {
            ((t = tR("div")), s && s.c(), this.h());
          },
          l(e) {
            var n = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            (s && s.l(n), n.forEach(tL), this.h());
          },
          h() {
            (tG(t, "class", tv("sm-button") + " svelte-1wh9gm2"),
              tG(
                t,
                "style",
                (n =
                  "width: " + e[0] + "; height: " + e[1] + "; " + e[4] + ";"),
              ),
              t0(t, "disabled", e[2]),
              t0(t, "active", e[7]),
              t0(t, "hover", e[8]),
              t0(t, "shadow", e[3]),
              t1(t, "--color", e[2] ? e[6].color : e[5].color),
              t1(t, "--background", e[2] ? e[6].background : e[5].background),
              t1(
                t,
                "--border-color",
                e[2] ? e[6].borderColor : e[5].borderColor,
              ));
          },
          m(n, r) {
            (tk(n, t, r),
              s && s.m(t, null),
              e[16](t),
              (l = !0),
              o ||
                ((i = [
                  tj(t, "mousedown", e[10]),
                  tj(t, "touchstart", e[10]),
                  tj(t, "mouseenter", e[17]),
                  tj(t, "mouseleave", e[18]),
                ]),
                (o = !0)));
          },
          p(e, o) {
            let [i] = o;
            (s &&
              s.p &&
              (!l || 16388 & i) &&
              tp(s, r, e, e[14], l ? tm(r, e[14], i, uJ) : tg(e[14]), uY),
              (!l ||
                (19 & i &&
                  n !==
                    (n =
                      "width: " +
                      e[0] +
                      "; height: " +
                      e[1] +
                      "; " +
                      e[4] +
                      ";"))) &&
                tG(t, "style", n),
              (!l || 4 & i) && t0(t, "disabled", e[2]),
              (!l || 128 & i) && t0(t, "active", e[7]),
              (!l || 256 & i) && t0(t, "hover", e[8]),
              (!l || 8 & i) && t0(t, "shadow", e[3]));
            let a = 19 & i;
            ((a || 119 & i) && t1(t, "--color", e[2] ? e[6].color : e[5].color),
              (a || 119 & i) &&
                t1(t, "--background", e[2] ? e[6].background : e[5].background),
              (a || 119 & i) &&
                t1(
                  t,
                  "--border-color",
                  e[2] ? e[6].borderColor : e[5].borderColor,
                ));
          },
          i(e) {
            l || (nx(s, e), (l = !0));
          },
          o(e) {
            (ny(s, e), (l = !1));
          },
          d(n) {
            (n && tL(t), s && s.d(n), e[16](null), (o = !1), tr(i));
          },
        };
      }
      function uW(e, t, n) {
        let l,
          { $$slots: o = {}, $$scope: i } = t,
          r = nn(),
          { width: s = "120px" } = t,
          { height: a = "30px" } = t,
          { disabled: c = !1 } = t,
          { duration: d = 100 } = t,
          { withShadow: u = !1 } = t,
          { canPress: h = !1 } = t,
          { style: f = "" } = t,
          { styles: m = {} } = t,
          {
            defaultStyle: p = {
              color: "var(--link-color)",
              borderColor: "#d9dbe9",
              background: "#fcfcfc",
              ...m.default,
            },
          } = t,
          {
            disabledStyle: g = {
              color: "#a0a3bd",
              borderColor: "#d9dbe9",
              background: "#d9dbe9",
              ...m.disabled,
            },
          } = t,
          v = !1,
          A = !1,
          w = 0;
        return (
          (e.$$set = (e) => {
            ("width" in e && n(0, (s = e.width)),
              "height" in e && n(1, (a = e.height)),
              "disabled" in e && n(2, (c = e.disabled)),
              "duration" in e && n(11, (d = e.duration)),
              "withShadow" in e && n(3, (u = e.withShadow)),
              "canPress" in e && n(12, (h = e.canPress)),
              "style" in e && n(4, (f = e.style)),
              "styles" in e && n(13, (m = e.styles)),
              "defaultStyle" in e && n(5, (p = e.defaultStyle)),
              "disabledStyle" in e && n(6, (g = e.disabledStyle)),
              "$$scope" in e && n(14, (i = e.$$scope)));
          }),
          [
            s,
            a,
            c,
            u,
            f,
            p,
            g,
            v,
            A,
            l,
            (e) => {
              if ((e.preventDefault(), e.stopPropagation(), c)) return;
              let t = !0,
                l = (e) => {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    window.clearInterval(w),
                    document.removeEventListener("mouseup", l, !0),
                    document.removeEventListener("touchend", l, !0),
                    n(7, (v = !1)),
                    t && r("click", null));
                };
              (document.addEventListener("mouseup", l, !0),
                document.addEventListener("touchend", l, !0),
                n(7, (v = !0)),
                h &&
                  (w = window.setInterval(() => {
                    ((t = !1), r("pressing", null));
                  }, d)));
            },
            d,
            h,
            m,
            i,
            o,
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(9, (l = e));
              });
            },
            () => !c && n(8, (A = !0)),
            () => n(8, (A = !1)),
          ]
        );
      }
      class uq extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              uW,
              uK,
              ta,
              {
                width: 0,
                height: 1,
                disabled: 2,
                duration: 11,
                withShadow: 3,
                canPress: 12,
                style: 4,
                styles: 13,
                defaultStyle: 5,
                disabledStyle: 6,
              },
              uF,
            ));
        }
      }
      function uQ(e) {
        tI(
          e,
          "svelte-1hmjer3",
          ".sm-range-slider.svelte-1hmjer3.svelte-1hmjer3{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.sm-range-slider.sm-vertical.svelte-1hmjer3.svelte-1hmjer3{flex-flow:column nowrap}.sm-container.svelte-1hmjer3.svelte-1hmjer3{position:relative;margin:20px;width:var(--size, 300px);height:0}.sm-vertical.svelte-1hmjer3 .sm-container.svelte-1hmjer3{width:0;height:var(--size, 300px)}.sm-base-line.svelte-1hmjer3.svelte-1hmjer3{background-color:#d9dbe9;position:absolute;left:0;top:-1px;width:100%;height:2px}.sm-vertical.svelte-1hmjer3 .sm-base-line.svelte-1hmjer3{width:2px;height:100%}.sm-active-range.svelte-1hmjer3.svelte-1hmjer3{background:var(--link-color);position:absolute;transform-style:preserve-3d;left:50%;top:-1px;width:1px;height:2px;transform-origin:0 center;transform:scaleX(var(--scale, 1))}.sm-vertical.svelte-1hmjer3 .sm-active-range.svelte-1hmjer3{left:-1px;top:50%;height:1px;width:2px;transform-origin:center 0;transform:scaleY(var(--scale, 1))}.sm-origin-pointer.svelte-1hmjer3.svelte-1hmjer3{width:8px;height:8px;border-radius:50%;background:#a0a3bd;position:absolute;left:-4px;top:-4px;transform-style:preserve-3d;transform:translateX(var(--distance, 0px));cursor:pointer}.sm-vertical.svelte-1hmjer3 .sm-origin-pointer.svelte-1hmjer3{transform:translateY(var(--distance, 0px))}.sm-drag-bar.svelte-1hmjer3.svelte-1hmjer3{cursor:pointer;width:30px;height:30px;border-radius:50%;border:2px solid var(--link-color);background-color:var(--foreground-link-color);position:absolute;left:-15px;top:-15px;transform-style:preserve-3d;transform:translateX(var(--distance, 0px))}.sm-vertical.svelte-1hmjer3 .sm-drag-bar.svelte-1hmjer3{transform:translateY(var(--distance, 0px))}.sm-label.svelte-1hmjer3.svelte-1hmjer3{position:absolute;white-space:nowrap;font-size:14px;line-height:22px;font-weight:400;color:var(--foreground-color);user-select:none;width:0;display:flex;justify-content:center;align-items:center}.sm-label.sm-left.svelte-1hmjer3.svelte-1hmjer3{top:2px;right:calc(100% + 10px);justify-content:flex-end}.sm-label.sm-top.svelte-1hmjer3.svelte-1hmjer3{left:50%;bottom:calc(100% + 6px)}.sm-label.sm-bottom.svelte-1hmjer3.svelte-1hmjer3{left:50%;top:calc(100% + 6px)}.sm-label.sm-right.svelte-1hmjer3.svelte-1hmjer3{top:2px;left:calc(100% + 10px);justify-content:flex-start}",
        );
      }
      function uX(e) {
        let t, n;
        return {
          c() {
            ((t = tS("svg")), (n = tS("path")), this.h());
          },
          l(e) {
            var l = tV(
              (t = tK(e, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
              })),
            );
            (tV(
              (n = tK(l, "path", {
                d: !0,
                style: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              l.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "d", "M7.99902 1L1.03585 7.96317L7.99902 14.9263"),
              t1(n, "stroke", "var(--color)"),
              tG(n, "stroke-width", "2"),
              tG(n, "stroke-linecap", "round"),
              tG(n, "stroke-linejoin", "round"),
              tG(t, "width", "9"),
              tG(t, "height", "16"),
              tG(t, "viewBox", "0 0 9 16"),
              tG(t, "fill", "none"),
              tG(t, "xmlns", "http://www.w3.org/2000/svg"));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function u_(e) {
        let t, n;
        return {
          c() {
            ((t = tS("svg")), (n = tS("path")), this.h());
          },
          l(e) {
            var l = tV(
              (t = tK(e, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
              })),
            );
            (tV(
              (n = tK(l, "path", {
                d: !0,
                style: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              l.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "d", "M0.999023 8L7.96219 1.03683L14.9254 8"),
              t1(n, "stroke", "var(--color)"),
              tG(n, "stroke-width", "2"),
              tG(n, "stroke-linecap", "round"),
              tG(n, "stroke-linejoin", "round"),
              tG(t, "width", "16"),
              tG(t, "height", "9"),
              tG(t, "viewBox", "0 0 16 9"),
              tG(t, "fill", "none"),
              tG(t, "xmlns", "http://www.w3.org/2000/svg"));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function u1(e) {
        let t;
        let n = e[7] ? u_ : uX,
          l = n(e);
        return {
          c() {
            (l.c(), (t = tU()));
          },
          l(e) {
            (l.l(e), (t = tU()));
          },
          m(e, n) {
            (l.m(e, n), tk(e, t, n));
          },
          p(e, o) {
            n !== (n = e[7] ? u_ : uX) &&
              (l.d(1), (l = n(e)) && (l.c(), l.m(t.parentNode, t)));
          },
          d(e) {
            (l.d(e), e && tL(t));
          },
        };
      }
      function u0(e) {
        let t, n;
        return {
          c() {
            ((t = tS("svg")), (n = tS("path")), this.h());
          },
          l(e) {
            var l = tV(
              (t = tK(e, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
              })),
            );
            (tV(
              (n = tK(l, "path", {
                d: !0,
                style: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              l.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "d", "M0.999023 1L7.9622 7.96317L0.999023 14.9263"),
              t1(n, "stroke", "var(--color)"),
              tG(n, "stroke-width", "2"),
              tG(n, "stroke-linecap", "round"),
              tG(n, "stroke-linejoin", "round"),
              tG(t, "width", "9"),
              tG(t, "height", "16"),
              tG(t, "viewBox", "0 0 9 16"),
              tG(t, "fill", "none"),
              tG(t, "xmlns", "http://www.w3.org/2000/svg"));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function u2(e) {
        let t, n;
        return {
          c() {
            ((t = tS("svg")), (n = tS("path")), this.h());
          },
          l(e) {
            var l = tV(
              (t = tK(e, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0,
              })),
            );
            (tV(
              (n = tK(l, "path", {
                d: !0,
                style: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
              })),
            ).forEach(tL),
              l.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "d", "M0.999023 1L7.96219 7.96317L14.9254 0.999999"),
              t1(n, "stroke", "var(--color)"),
              tG(n, "stroke-width", "2"),
              tG(n, "stroke-linecap", "round"),
              tG(n, "stroke-linejoin", "round"),
              tG(t, "width", "16"),
              tG(t, "height", "9"),
              tG(t, "viewBox", "0 0 16 9"),
              tG(t, "fill", "none"),
              tG(t, "xmlns", "http://www.w3.org/2000/svg"));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function u3(e) {
        let t;
        let n = e[7] ? u2 : u0,
          l = n(e);
        return {
          c() {
            (l.c(), (t = tU()));
          },
          l(e) {
            (l.l(e), (t = tU()));
          },
          m(e, n) {
            (l.m(e, n), tk(e, t, n));
          },
          p(e, o) {
            n !== (n = e[7] ? u2 : u0) &&
              (l.d(1), (l = n(e)) && (l.c(), l.m(t.parentNode, t)));
          },
          d(e) {
            (l.d(e), e && tL(t));
          },
        };
      }
      function u4(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h, f, m, p, g, v, A;
        let w = ("string" == typeof e[5] ? e[5] : e[5](e[0])) + "";
        return (
          (n = new uq({
            props: {
              withShadow: !0,
              canPress: !0,
              disabled: e[2] > e[1] ? e[0] <= e[1] : e[0] >= e[1],
              width: "30px",
              height: "30px",
              $$slots: { default: [u1] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[9]),
          n.$on("pressing", e[9]),
          (p = new uq({
            props: {
              withShadow: !0,
              canPress: !0,
              disabled: e[2] > e[1] ? e[0] >= e[2] : e[0] <= e[2],
              width: "30px",
              height: "30px",
              $$slots: { default: [u3] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[10]),
          p.$on("pressing", e[10]),
          {
            c() {
              ((t = tR("div")),
                n$(n.$$.fragment),
                (l = tP()),
                (o = tR("div")),
                (i = tR("div")),
                (r = tP()),
                (s = tR("div")),
                (a = tP()),
                (c = tR("div")),
                (d = tP()),
                (u = tR("div")),
                (h = tR("div")),
                (f = tB(w)),
                (m = tP()),
                n$(p.$$.fragment),
                this.h());
            },
            l(e) {
              var g = tV((t = tY(e, "DIV", { class: !0 })));
              (nI(n.$$.fragment, g), (l = tq(g)));
              var v = tV((o = tY(g, "DIV", { class: !0 })));
              (tV((i = tY(v, "DIV", { class: !0 }))).forEach(tL),
                (r = tq(v)),
                tV((s = tY(v, "DIV", { class: !0 }))).forEach(tL),
                (a = tq(v)),
                tV((c = tY(v, "DIV", { class: !0 }))).forEach(tL),
                (d = tq(v)));
              var A = tV((u = tY(v, "DIV", { class: !0 }))),
                x = tV((h = tY(A, "DIV", { class: !0 })));
              ((f = tW(x, w)),
                x.forEach(tL),
                A.forEach(tL),
                v.forEach(tL),
                (m = tq(g)),
                nI(p.$$.fragment, g),
                g.forEach(tL),
                this.h());
            },
            h() {
              (tG(i, "class", "sm-base-line svelte-1hmjer3"),
                tG(s, "class", "sm-active-range svelte-1hmjer3"),
                t1(s, "--scale", ((e[0] - e[8]) / (e[2] - e[1])) * e[3]),
                tG(c, "class", "sm-origin-pointer svelte-1hmjer3"),
                t1(
                  c,
                  "--distance",
                  "".concat(((e[8] - e[1]) / (e[2] - e[1])) * e[3], "px"),
                ),
                tG(h, "class", "sm-label svelte-1hmjer3"),
                t0(h, "sm-left", "left" === e[4]),
                t0(h, "sm-top", "top" === e[4]),
                t0(h, "sm-bottom", "bottom" === e[4]),
                t0(h, "sm-right", "right" === e[4]),
                tG(u, "class", "sm-drag-bar svelte-1hmjer3"),
                t1(
                  u,
                  "--distance",
                  "".concat(((e[0] - e[1]) / (e[2] - e[1])) * e[3], "px"),
                ),
                tG(o, "class", "sm-container svelte-1hmjer3"),
                t1(o, "--size", "".concat(e[3], "px")),
                tG(t, "class", "sm-range-slider svelte-1hmjer3"),
                t0(t, "sm-vertical", e[7]));
            },
            m(w, x) {
              (tk(w, t, x),
                nO(n, t, null),
                tD(t, l),
                tD(t, o),
                tD(o, i),
                tD(o, r),
                tD(o, s),
                tD(o, a),
                tD(o, c),
                tD(o, d),
                tD(o, u),
                tD(u, h),
                tD(h, f),
                e[17](u),
                tD(t, m),
                nO(p, t, null),
                (g = !0),
                v || ((A = tj(c, "click", e[16])), (v = !0)));
            },
            p(e, l) {
              let [i] = l,
                r = {};
              (7 & i &&
                (r.disabled = e[2] > e[1] ? e[0] <= e[1] : e[0] >= e[1]),
                1048704 & i && (r.$$scope = { dirty: i, ctx: e }),
                n.$set(r),
                271 & i &&
                  t1(s, "--scale", ((e[0] - e[8]) / (e[2] - e[1])) * e[3]),
                270 & i &&
                  t1(
                    c,
                    "--distance",
                    "".concat(((e[8] - e[1]) / (e[2] - e[1])) * e[3], "px"),
                  ),
                (!g || 33 & i) &&
                  w !==
                    (w = ("string" == typeof e[5] ? e[5] : e[5](e[0])) + "") &&
                  tX(f, w),
                (!g || 16 & i) && t0(h, "sm-left", "left" === e[4]),
                (!g || 16 & i) && t0(h, "sm-top", "top" === e[4]),
                (!g || 16 & i) && t0(h, "sm-bottom", "bottom" === e[4]),
                (!g || 16 & i) && t0(h, "sm-right", "right" === e[4]),
                15 & i &&
                  t1(
                    u,
                    "--distance",
                    "".concat(((e[0] - e[1]) / (e[2] - e[1])) * e[3], "px"),
                  ),
                8 & i && t1(o, "--size", "".concat(e[3], "px")));
              let a = {};
              (7 & i &&
                (a.disabled = e[2] > e[1] ? e[0] >= e[2] : e[0] <= e[2]),
                1048704 & i && (a.$$scope = { dirty: i, ctx: e }),
                p.$set(a),
                (!g || 128 & i) && t0(t, "sm-vertical", e[7]));
            },
            i(e) {
              g || (nx(n.$$.fragment, e), nx(p.$$.fragment, e), (g = !0));
            },
            o(e) {
              (ny(n.$$.fragment, e), ny(p.$$.fragment, e), (g = !1));
            },
            d(l) {
              (l && tL(t), nM(n), e[17](null), nM(p), (v = !1), A());
            },
          }
        );
      }
      function u7(e, t, n) {
        let l, o, i, r, s;
        let a = nn(),
          { direction: c = "horizontal" } = t,
          { value: d = 0 } = t,
          { step: u = 1 } = t,
          { start: h = -100 } = t,
          { end: f = 100 } = t,
          { size: m = 300 } = t,
          { precision: p = 1 } = t,
          { labelPosition: g = l ? "right" : "top" } = t,
          { label: v = (e) => "Value ".concat(e.toFixed(p)) } = t,
          A = (e) => Number(e.toFixed(p));
        return (
          ne(() => {
            let e = (e) => {
              let { clientX: t, clientY: r } =
                  e instanceof MouseEvent ? e : e.touches[0],
                s = d,
                a = (e) => {
                  let { clientX: a, clientY: c } =
                      e instanceof MouseEvent ? e : e.touches[0],
                    u = A(s + ((l ? c - r : a - t) / m) * (f - h));
                  u < o ? n(0, (d = o)) : u > i ? n(0, (d = i)) : n(0, (d = u));
                },
                c = () => {
                  (document.removeEventListener("mousemove", a),
                    document.removeEventListener("touchmove", a),
                    document.removeEventListener("mouseup", c),
                    document.removeEventListener("touchend", c));
                };
              (document.addEventListener("mousemove", a),
                document.addEventListener("touchmove", a),
                document.addEventListener("mouseup", c),
                document.addEventListener("touchend", c));
            };
            return (
              s.addEventListener("mousedown", e),
              s.addEventListener("touchstart", e),
              () => {
                (s.removeEventListener("mousedown", e),
                  s.removeEventListener("touchstart", e));
              }
            );
          }),
          (e.$$set = (e) => {
            ("direction" in e && n(11, (c = e.direction)),
              "value" in e && n(0, (d = e.value)),
              "step" in e && n(12, (u = e.step)),
              "start" in e && n(1, (h = e.start)),
              "end" in e && n(2, (f = e.end)),
              "size" in e && n(3, (m = e.size)),
              "precision" in e && n(13, (p = e.precision)),
              "labelPosition" in e && n(4, (g = e.labelPosition)),
              "label" in e && n(5, (v = e.label)));
          }),
          (e.$$.update = () => {
            (2048 & e.$$.dirty && n(7, (l = "vertical" === c)),
              6 & e.$$.dirty && n(15, (o = Math.min(h, f))),
              6 & e.$$.dirty && n(14, (i = Math.max(h, f))),
              49152 & e.$$.dirty && n(8, (r = (o + i) / 2)),
              1 & e.$$.dirty && a("change", { value: d }));
          }),
          [
            d,
            h,
            f,
            m,
            g,
            v,
            s,
            l,
            r,
            () => {
              if (f > h) {
                let e = A(d - u);
                e >= h && e <= f && n(0, (d = e));
              } else {
                let e = A(d + u);
                e <= h && e >= f && n(0, (d = e));
              }
            },
            () => {
              if (f > h) {
                let e = A(d + u);
                e >= h && e <= f && n(0, (d = e));
              } else {
                let e = A(d - u);
                e <= h && e >= f && n(0, (d = e));
              }
            },
            c,
            u,
            p,
            i,
            o,
            () => n(0, (d = r)),
            function (e) {
              ni[e ? "unshift" : "push"](() => {
                n(6, (s = e));
              });
            },
          ]
        );
      }
      class u6 extends nk {
        constructor(e) {
          (super(),
            nD(
              this,
              e,
              u7,
              u4,
              ta,
              {
                direction: 11,
                value: 0,
                step: 12,
                start: 1,
                end: 2,
                size: 3,
                precision: 13,
                labelPosition: 4,
                label: 5,
              },
              uQ,
            ));
        }
      }
      function u5(e) {
        tI(
          e,
          "svelte-1jn9q6x",
          ".sm-ope-x.svelte-1jn9q6x,.sm-ope-y.svelte-1jn9q6x,.sm-ope-z.svelte-1jn9q6x{width:0;height:0;position:absolute;display:flex;justify-content:center;align-items:center;transform-style:preserve-3d}.sm-ope-z.svelte-1jn9q6x{bottom:90px;left:50%}.sm-ope-y.svelte-1jn9q6x{top:calc(50% - 50px);left:50px}.sm-ope-x.svelte-1jn9q6x{top:calc(50% - 50px);right:50px}.sm-view-title.svelte-1jn9q6x,.sm-ope-bl.svelte-1jn9q6x,.sm-ope-br.svelte-1jn9q6x{position:absolute;bottom:30px;display:flex;flex-flow:row nowrap;align-items:center}.sm-view-title.svelte-1jn9q6x{width:0;height:0;left:50%;bottom:160px;text-align:center;color:var(--foreground-color);font-size:16px;line-height:24px;white-space:nowrap;display:flex;justify-content:center}.sm-ope-bl.svelte-1jn9q6x{left:30px}.sm-ope-br.svelte-1jn9q6x{right:30px}",
        );
      }
      function u8(e) {
        let t,
          n = e[4].t("mdf.occlusalPlane.btnReset") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            16 & l &&
              n !== (n = e[4].t("mdf.occlusalPlane.btnReset") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function u9(e) {
        let t,
          n = e[4].t("mdf.occlusalPlane.btnCancel") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            16 & l &&
              n !== (n = e[4].t("mdf.occlusalPlane.btnCancel") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function he(e) {
        let t,
          n = e[4].t("mdf.occlusalPlane.btnApply") + "";
        return {
          c() {
            t = tB(n);
          },
          l(e) {
            t = tW(e, n);
          },
          m(e, n) {
            tk(e, t, n);
          },
          p(e, l) {
            16 & l &&
              n !== (n = e[4].t("mdf.occlusalPlane.btnApply") + "") &&
              tX(t, n);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function ht(e) {
        let t,
          n,
          l,
          o,
          i,
          r,
          s,
          a,
          c,
          d,
          u,
          h,
          f,
          m,
          p,
          g,
          v,
          A,
          w,
          x,
          y,
          E,
          C,
          b;
        let T = e[4].t("mdf.occlusalPlane.viewTitle") + "";
        function $(t) {
          e[8](t);
        }
        let I = {
          direction: "vertical",
          label: e[7],
          labelPosition: "left",
          start: 30,
          end: -30,
          step: 0.1,
        };
        function O(t) {
          e[10](t);
        }
        (void 0 !== e[0] && (I.value = e[0]),
          (l = new u6({ props: I })),
          ni.push(() => nT(l, "value", $)));
        let M = {
          direction: "vertical",
          label: e[9],
          labelPosition: "right",
          start: 30,
          end: -30,
          step: 0.1,
        };
        function D(t) {
          e[12](t);
        }
        (void 0 !== e[1] && (M.value = e[1]),
          (s = new u6({ props: M })),
          ni.push(() => nT(s, "value", O)));
        let k = {
          direction: "horizontal",
          label: e[11],
          labelPosition: "top",
          start: 30,
          end: -30,
          step: 0.1,
        };
        return (
          void 0 !== e[2] && (k.value = e[2]),
          (u = new u6({ props: k })),
          ni.push(() => nT(u, "value", D)),
          (A = new uq({
            props: {
              withShadow: !0,
              height: "40px",
              $$slots: { default: [u8] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[13]),
          (y = new uq({
            props: {
              withShadow: !0,
              height: "40px",
              $$slots: { default: [u9] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[14]),
          (C = new uq({
            props: {
              withShadow: !0,
              height: "40px",
              style: "margin-left:20px;",
              styles: { default: { color: "#fff", background: "#0086cd" } },
              $$slots: { default: [he] },
              $$scope: { ctx: e },
            },
          })).$on("click", e[15]),
          {
            c() {
              ((t = tR("div")),
                (n = tR("div")),
                n$(l.$$.fragment),
                (i = tP()),
                (r = tR("div")),
                n$(s.$$.fragment),
                (c = tP()),
                (d = tR("div")),
                n$(u.$$.fragment),
                (f = tP()),
                (m = tR("div")),
                (p = tB(T)),
                (g = tP()),
                (v = tR("div")),
                n$(A.$$.fragment),
                (w = tP()),
                (x = tR("div")),
                n$(y.$$.fragment),
                (E = tP()),
                n$(C.$$.fragment),
                this.h());
            },
            l(e) {
              var o = tV((t = tY(e, "DIV", { class: !0 }))),
                a = tV((n = tY(o, "DIV", { class: !0 })));
              (nI(l.$$.fragment, a), a.forEach(tL), (i = tq(o)));
              var h = tV((r = tY(o, "DIV", { class: !0 })));
              (nI(s.$$.fragment, h), h.forEach(tL), (c = tq(o)));
              var b = tV((d = tY(o, "DIV", { class: !0 })));
              (nI(u.$$.fragment, b), b.forEach(tL), (f = tq(o)));
              var $ = tV((m = tY(o, "DIV", { class: !0 })));
              ((p = tW($, T)), $.forEach(tL), (g = tq(o)));
              var I = tV((v = tY(o, "DIV", { class: !0 })));
              (nI(A.$$.fragment, I), I.forEach(tL), (w = tq(o)));
              var O = tV((x = tY(o, "DIV", { class: !0 })));
              (nI(y.$$.fragment, O),
                (E = tq(O)),
                nI(C.$$.fragment, O),
                O.forEach(tL),
                o.forEach(tL),
                this.h());
            },
            h() {
              (tG(n, "class", "sm-ope-x svelte-1jn9q6x"),
                tG(r, "class", "sm-ope-y svelte-1jn9q6x"),
                tG(d, "class", "sm-ope-z svelte-1jn9q6x"),
                tG(m, "class", "sm-view-title svelte-1jn9q6x"),
                tG(v, "class", "sm-ope-bl svelte-1jn9q6x"),
                tG(x, "class", "sm-ope-br svelte-1jn9q6x"),
                tG(t, "class", "sm-layout"));
            },
            m(e, o) {
              (tk(e, t, o),
                tD(t, n),
                nO(l, n, null),
                tD(t, i),
                tD(t, r),
                nO(s, r, null),
                tD(t, c),
                tD(t, d),
                nO(u, d, null),
                tD(t, f),
                tD(t, m),
                tD(m, p),
                tD(t, g),
                tD(t, v),
                nO(A, v, null),
                tD(t, w),
                tD(t, x),
                nO(y, x, null),
                tD(x, E),
                nO(C, x, null),
                (b = !0));
            },
            p(e, t) {
              let [n] = t,
                i = {};
              (16 & n && (i.label = e[7]),
                !o && 1 & n && ((o = !0), (i.value = e[0]), nu(() => (o = !1))),
                l.$set(i));
              let r = {};
              (16 & n && (r.label = e[9]),
                !a && 2 & n && ((a = !0), (r.value = e[1]), nu(() => (a = !1))),
                s.$set(r));
              let c = {};
              (16 & n && (c.label = e[11]),
                !h && 4 & n && ((h = !0), (c.value = e[2]), nu(() => (h = !1))),
                u.$set(c),
                (!b || 16 & n) &&
                  T !== (T = e[4].t("mdf.occlusalPlane.viewTitle") + "") &&
                  tX(p, T));
              let d = {};
              (131088 & n && (d.$$scope = { dirty: n, ctx: e }), A.$set(d));
              let f = {};
              (131088 & n && (f.$$scope = { dirty: n, ctx: e }), y.$set(f));
              let m = {};
              (131088 & n && (m.$$scope = { dirty: n, ctx: e }), C.$set(m));
            },
            i(e) {
              b ||
                (nx(l.$$.fragment, e),
                nx(s.$$.fragment, e),
                nx(u.$$.fragment, e),
                nx(A.$$.fragment, e),
                nx(y.$$.fragment, e),
                nx(C.$$.fragment, e),
                (b = !0));
            },
            o(e) {
              (ny(l.$$.fragment, e),
                ny(s.$$.fragment, e),
                ny(u.$$.fragment, e),
                ny(A.$$.fragment, e),
                ny(y.$$.fragment, e),
                ny(C.$$.fragment, e),
                (b = !1));
            },
            d(e) {
              (e && tL(t), nM(l), nM(s), nM(u), nM(A), nM(y), nM(C));
            },
          }
        );
      }
      function hn(e, t, n) {
        var l;
        let o, i;
        let r = o8();
        (tu(e, r, (e) => n(3, (i = e))), console.log(o));
        let [s, a, c] =
            null !== (l = i.mdf.occlusalPlaneRotation) && void 0 !== l
              ? l
              : [0, 0, 0],
          d = (e) => Number(e.toFixed(1)).toFixed(1);
        return (
          (e.$$.update = () => {
            (8 & e.$$.dirty && n(4, (o = l0(i.language))),
              7 & e.$$.dirty && r.OPE.setRotation([s, a, c]));
          }),
          [
            s,
            a,
            c,
            i,
            o,
            r,
            d,
            (e) => o.t("mdf.occlusalPlane.valueOfX", { value: d(e) }),
            function (e) {
              n(0, (s = e));
            },
            (e) => o.t("mdf.occlusalPlane.valueOfY", { value: d(e) }),
            function (e) {
              n(1, (a = e));
            },
            (e) => o.t("mdf.occlusalPlane.valueOfZ", { value: d(e) }),
            function (e) {
              n(2, (c = e));
            },
            () => {
              var e;
              (r.OPE.resetRotation(),
                n(
                  0,
                  ([s, a, c] =
                    null != (e = i.mdf.occlusalPlaneRotation) ? e : [0, 0, 0]),
                  s,
                  n(1, a),
                  n(2, c),
                ));
            },
            () => r.OPE.cancel(),
            () => r.OPE.saveAndExit(),
          ]
        );
      }
      class hl extends nk {
        constructor(e) {
          (super(), nD(this, e, hn, ht, ta, {}, u5));
        }
      }
      let ho = _ ? uE : ug;
      function hi(e) {
        tI(
          e,
          "svelte-11v9x33",
          ".sm-hover-tip.svelte-11v9x33{padding:12px;font-size:14px;line-height:22px;letter-spacing:0.25px;max-width:50%;color:#fff;background-color:rgba(20, 20, 43, 0.8);border-radius:8px;box-shadow:1px 1px 4px #c4c6d4;position:absolute;left:0;top:0;z-index:10;transform-style:preserve-3d;white-space:pre-wrap}.sm-hover-error-text.svelte-11v9x33{padding:2px 6px;background:#ed2e7e;border-radius:4px;margin-bottom:4px;margin-top:2px;font-size:12px;line-height:18px;letter-spacing:0.25px;color:#fff}.sm-hover-tip-img.svelte-11v9x33{position:absolute;left:0;top:0;transform-style:preserve-3d}.sm-hover-tip-lg.svelte-11v9x33{font-size:16px;line-height:24px}.sm-hover-tip-attach-added.svelte-11v9x33,.sm-hover-tip-attach-moved.svelte-11v9x33{display:inline-block;margin-left:0.25em;padding:0 4px;color:#fff;font-size:12px;line-height:22px;height:22px;border-radius:4px}.sm-hover-tip-attach-added.svelte-11v9x33{background-color:#00ba88}.sm-hover-tip-attach-moved.svelte-11v9x33{background-color:#f4b740}",
        );
      }
      function hr(e, t, n) {
        let l = e.slice();
        return ((l[19] = t[n]), l);
      }
      function hs(e) {
        let t, n, l, o, i, r, s, a, c;
        function d(e, t) {
          return e[8] === eL.ATTACH_NEW_ADDED
            ? hd
            : e[8] === eL.ATTACH_MOVED
              ? hc
              : void 0;
        }
        let u = d(e),
          h = u && u(e),
          f = e[6] && hu(e);
        return {
          c() {
            ((t = tR("div")),
              (n = tR("span")),
              (l = tB(e[7])),
              (o = tP()),
              h && h.c(),
              (i = tP()),
              f && f.c(),
              this.h());
          },
          l(r) {
            var s = tV((t = tY(r, "DIV", { class: !0, style: !0 }))),
              a = tV((n = tY(s, "SPAN", { class: !0 })));
            ((l = tW(a, e[7])),
              a.forEach(tL),
              (o = tq(s)),
              h && h.l(s),
              (i = tq(s)),
              f && f.l(s),
              s.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "svelte-11v9x33"),
              t0(n, "sm-hover-tip-lg", e[8] === eL.IPR_OPERATION_INFO),
              tG(t, "class", "sm-hover-tip svelte-11v9x33"),
              tG(t, "style", e[5]));
          },
          m(s, d) {
            (tk(s, t, d),
              tD(t, n),
              tD(n, l),
              tD(t, o),
              h && h.m(t, null),
              tD(t, i),
              f && f.m(t, null),
              a || ((c = tA((r = iP.call(null, t, e[18])))), (a = !0)));
          },
          p(e, o) {
            (128 & o && tX(l, e[7]),
              256 & o &&
                t0(n, "sm-hover-tip-lg", e[8] === eL.IPR_OPERATION_INFO),
              u === (u = d(e)) && h
                ? h.p(e, o)
                : (h && h.d(1), (h = u && u(e)) && (h.c(), h.m(t, i))),
              e[6]
                ? f
                  ? f.p(e, o)
                  : ((f = hu(e)).c(), f.m(t, null))
                : f && (f.d(1), (f = null)),
              32 & o && tG(t, "style", e[5]),
              r && ts(r.update) && 3 & o && r.update.call(null, e[18]));
          },
          i(e) {
            s ||
              nd(() => {
                (s = nC(t, i7, { delay: 0, duration: 300 })).start();
              });
          },
          o: tn,
          d(e) {
            (e && tL(t), h && h.d(), f && f.d(), (a = !1), c());
          },
        };
      }
      function ha(e) {
        let t;
        let n = e[2] === eN.ANGELROD && hf(e);
        return {
          c() {
            (n && n.c(), (t = tU()));
          },
          l(e) {
            (n && n.l(e), (t = tU()));
          },
          m(e, l) {
            (n && n.m(e, l), tk(e, t, l));
          },
          p(e, l) {
            e[2] === eN.ANGELROD
              ? n
                ? (n.p(e, l), 4 & l && nx(n, 1))
                : ((n = hf(e)).c(), nx(n, 1), n.m(t.parentNode, t))
              : n && (n.d(1), (n = null));
          },
          i(e) {
            nx(n);
          },
          o: tn,
          d(e) {
            (n && n.d(e), e && tL(t));
          },
        };
      }
      function hc(e) {
        let t, n;
        let l = e[9].t("mdf.attachment.moved") + "";
        return {
          c() {
            ((t = tR("span")), (n = tB(l)), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "SPAN", { class: !0 })));
            ((n = tW(o, l)), o.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-hover-tip-attach-moved svelte-11v9x33");
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, t) {
            512 & t &&
              l !== (l = e[9].t("mdf.attachment.moved") + "") &&
              tX(n, l);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function hd(e) {
        let t, n;
        let l = e[9].t("mdf.attachment.newAdded") + "";
        return {
          c() {
            ((t = tR("span")), (n = tB(l)), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "SPAN", { class: !0 })));
            ((n = tW(o, l)), o.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-hover-tip-attach-added svelte-11v9x33");
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, t) {
            512 & t &&
              l !== (l = e[9].t("mdf.attachment.newAdded") + "") &&
              tX(n, l);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function hu(e) {
        let t;
        let n = e[6].split("\n").filter(Boolean),
          l = [];
        for (let t = 0; t < n.length; t += 1) l[t] = hh(hr(e, n, t));
        return {
          c() {
            for (let e = 0; e < l.length; e += 1) l[e].c();
            t = tU();
          },
          l(e) {
            for (let t = 0; t < l.length; t += 1) l[t].l(e);
            t = tU();
          },
          m(e, n) {
            for (let t = 0; t < l.length; t += 1) l[t] && l[t].m(e, n);
            tk(e, t, n);
          },
          p(e, o) {
            if (64 & o) {
              let i;
              for (
                i = 0, n = e[6].split("\n").filter(Boolean);
                i < n.length;
                i += 1
              ) {
                let r = hr(e, n, i);
                l[i]
                  ? l[i].p(r, o)
                  : ((l[i] = hh(r)), l[i].c(), l[i].m(t.parentNode, t));
              }
              for (; i < l.length; i += 1) l[i].d(1);
              l.length = n.length;
            }
          },
          d(e) {
            (tN(l, e), e && tL(t));
          },
        };
      }
      function hh(e) {
        let t, n, l, o;
        let i = e[19] + "";
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tB(i)),
              (o = tP()),
              this.h());
          },
          l(e) {
            var r = tV((t = tY(e, "DIV", { style: !0 }))),
              s = tV((n = tY(r, "DIV", { class: !0 })));
            ((l = tW(s, i)),
              s.forEach(tL),
              (o = tq(r)),
              r.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "sm-hover-error-text svelte-11v9x33"),
              t1(t, "display", "flex"));
          },
          m(e, i) {
            (tk(e, t, i), tD(t, n), tD(n, l), tD(t, o));
          },
          p(e, t) {
            64 & t && i !== (i = e[19] + "") && tX(l, i);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function hf(e) {
        let t, n, o, i, r, s, a;
        return {
          c() {
            ((t = tR("div")), (n = tR("img")), this.h());
          },
          l(e) {
            var l = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
            ((n = tY(l, "IMG", { src: !0, width: !0, alt: !0 })),
              l.forEach(tL),
              this.h());
          },
          h() {
            var i, r;
            ((i = n.src),
              (r = o =
                "data:image/png;base64,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"),
              l || (l = document.createElement("a")),
              (l.href = r),
              i !== l.href && tG(n, "src", o),
              tG(n, "width", "300"),
              tG(n, "alt", ""),
              tG(t, "class", "sm-hover-tip-img svelte-11v9x33"),
              tG(t, "style", e[5]));
          },
          m(l, o) {
            (tk(l, t, o),
              tD(t, n),
              s || ((a = tA((i = iP.call(null, t, e[17])))), (s = !0)));
          },
          p(e, n) {
            (32 & n && tG(t, "style", e[5]),
              i && ts(i.update) && 3 & n && i.update.call(null, e[17]));
          },
          i(e) {
            r ||
              nd(() => {
                (r = nC(t, i7, { delay: 0, duration: 300 })).start();
              });
          },
          o: tn,
          d(e) {
            (e && tL(t), (s = !1), a());
          },
        };
      }
      function hm(e) {
        let t;
        function n(e, t) {
          return e[4] ? ha : e[7] ? hs : void 0;
        }
        let l = n(e),
          o = l && l(e);
        return {
          c() {
            (o && o.c(), (t = tU()));
          },
          l(e) {
            (o && o.l(e), (t = tU()));
          },
          m(e, n) {
            (o && o.m(e, n), tk(e, t, n));
          },
          p(e, i) {
            l === (l = n(e)) && o
              ? o.p(e, i)
              : (o && o.d(1),
                (o = l && l(e)) && (o.c(), nx(o, 1), o.m(t.parentNode, t)));
          },
          i(e) {
            nx(o);
          },
          o: tn,
          d(e) {
            (o && o.d(e), e && tL(t));
          },
        };
      }
      function hp(e) {
        let t, n;
        return (
          (t = new i9({
            props: {
              container: e[3],
              $$slots: { default: [hm] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            p(e, n) {
              let [l] = n,
                o = {};
              (8 & l && (o.container = e[3]),
                4195319 & l && (o.$$scope = { dirty: l, ctx: e }),
                t.$set(o));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hg(e, t, n) {
        var l;
        let o, i, r, s, a, c, d, u, h, f, m;
        let p = o8();
        tu(e, p, (e) => n(16, (m = e)));
        let g = 0,
          v = 0,
          A = !1,
          w = 0;
        return (
          (e.$$.update = () => {
            (65536 & e.$$.dirty && n(9, (o = l0(m.language))),
              65536 & e.$$.dirty && n(3, (i = m._instance.el)),
              67584 & e.$$.dirty &&
                n(
                  8,
                  ({
                    type: r,
                    text: s,
                    error_message: a,
                    sub_type: c,
                    pointerPosition: d = [0, 0],
                  } = null !== n(11, (l = m.hoverMessage)) && void 0 !== l
                    ? l
                    : {}),
                  r,
                  (n(7, s), n(16, m), n(11, l)),
                  (n(6, a), n(16, m), n(11, l)),
                  (n(2, c), n(16, m), n(11, l)),
                  (n(15, d), n(16, m), n(11, l)),
                ),
              32768 & e.$$.dirty && n(14, (u = d[0])),
              32768 & e.$$.dirty && n(13, (h = d[1])),
              24587 & e.$$.dirty &&
                n(5, (f = re(i, u, h, g, v, -g / 2, -v - 20))),
              4100 & e.$$.dirty &&
                (c !== eN.ANGELROD || _
                  ? n(4, (A = !1))
                  : (window.clearTimeout(w),
                    n(
                      12,
                      (w = window.setTimeout(() => {
                        n(4, (A = !0));
                      }, 1e3)),
                    ))));
          }),
          [
            g,
            v,
            c,
            i,
            A,
            f,
            a,
            s,
            r,
            o,
            p,
            l,
            w,
            h,
            u,
            d,
            m,
            (e) => n(0, ({ width: g, height: v } = e), g, n(1, v)),
            (e) => n(0, ({ width: g, height: v } = e), g, n(1, v)),
          ]
        );
      }
      class hv extends nk {
        constructor(e) {
          (super(), nD(this, e, hg, hp, ta, {}, hi));
        }
      }
      function hA(e) {
        tI(
          e,
          "svelte-1epxc7u",
          ".sm-view-close.svelte-1epxc7u{min-width:50px;height:30px;border:1px solid #0086cd;border-radius:8px;text-align:center;line-height:30px;font-size:14px;color:#0086cd;cursor:pointer;margin-left:5px;padding:'0 7px'}",
        );
      }
      function hw(e) {
        let t, n, l, o;
        let i = e[1].t("mdf.tools.close") + "";
        return {
          c() {
            ((t = tR("div")), (n = tB(i)), this.h());
          },
          l(e) {
            var l = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(l, i)), l.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-view-close svelte-1epxc7u");
          },
          m(i, r) {
            (tk(i, t, r),
              tD(t, n),
              l ||
                ((o = [
                  tj(t, "touchstart", tH(e[4])),
                  tj(t, "touchend", tH(e[5])),
                  tj(t, "mousedown", tH(e[6])),
                  tj(t, "click", e[3]),
                ]),
                (l = !0)));
          },
          p(e, t) {
            2 & t && i !== (i = e[1].t("mdf.tools.close") + "") && tX(n, i);
          },
          d(e) {
            (e && tL(t), (l = !1), tr(o));
          },
        };
      }
      function hx(e) {
        let t;
        let n = e[0].mdf.comparing && hw(e);
        return {
          c() {
            (n && n.c(), (t = tU()));
          },
          l(e) {
            (n && n.l(e), (t = tU()));
          },
          m(e, l) {
            (n && n.m(e, l), tk(e, t, l));
          },
          p(e, l) {
            let [o] = l;
            e[0].mdf.comparing
              ? n
                ? n.p(e, o)
                : ((n = hw(e)).c(), n.m(t.parentNode, t))
              : n && (n.d(1), (n = null));
          },
          i: tn,
          o: tn,
          d(e) {
            (n && n.d(e), e && tL(t));
          },
        };
      }
      function hy(e, t, n) {
        let l, o;
        let i = o8();
        return (
          tu(e, i, (e) => n(0, (o = e))),
          (e.$$.update = () => {
            1 & e.$$.dirty && n(1, (l = l0(o.language)));
          }),
          [
            o,
            l,
            i,
            () => {
              i.exitMdfCompare();
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class hE extends nk {
        constructor(e) {
          (super(), nD(this, e, hy, hx, ta, {}, hA));
        }
      }
      function hC(e) {
        tI(
          e,
          "svelte-pgao2q",
          ".sm-panel.svelte-pgao2q.svelte-pgao2q{width:100%;height:100%;position:relative;user-select:none}.sm-bot.svelte-pgao2q.svelte-pgao2q{position:fixed;z-index:100;bottom:0px;right:0}.sm-layout.svelte-pgao2q.svelte-pgao2q,.sm-mdf.svelte-pgao2q.svelte-pgao2q{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%}.sm-mdf.sm-mdf-comparing.svelte-pgao2q.svelte-pgao2q{left:50%;width:50%}.sm-layout.svelte-pgao2q.svelte-pgao2q{z-index:1;display:flex;flex-flow:column nowrap}.sm-top.svelte-pgao2q.svelte-pgao2q,.sm-main.svelte-pgao2q.svelte-pgao2q{width:100%;position:relative}.sm-main.svelte-pgao2q.svelte-pgao2q{flex:1}.sm-left.svelte-pgao2q.svelte-pgao2q{position:absolute;left:40px;top:34px;height:calc(100% - 50px)}.sm-main.sm-section-view.svelte-pgao2q .sm-left.svelte-pgao2q{left:calc(33.3333% + 20px)}.sm-right.svelte-pgao2q.svelte-pgao2q{position:absolute;right:24px;top:0;height:100%}.sm-view-title.svelte-pgao2q.svelte-pgao2q{display:flex;justify-content:center;align-items:center;position:absolute;left:0;height:30px;bottom:95px;font-size:16px;line-height:22px;color:#4e4b66;width:100%;text-align:center}.sm-top-placeholder.svelte-pgao2q.svelte-pgao2q{height:50px}@media screen and (max-height: 520px){.sm-left.svelte-pgao2q.svelte-pgao2q{top:50px;padding-left:24px;height:100%;transform-origin:0 0;transform:scale(0.8)}.sm-top-placeholder.svelte-pgao2q.svelte-pgao2q{height:0}.sm-left.sm-left-ios.svelte-pgao2q.svelte-pgao2q{left:env(safe-area-inset-left)}}",
        );
      }
      function hb(e) {
        let t, n, l, o, i, r, s, a, c, d, u, h;
        let f = [h$, hT],
          m = [];
        function p(e, t) {
          return e[1].mdf.working ? 0 : 1;
        }
        s = m[(r = p(e))] = f[r](e);
        let g = e[1].menu.list.length && hU(),
          v = e[1].contextmenu && hj(),
          A = e[1].hoverMessage && hz();
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              (l = tR("div")),
              (o = tP()),
              (i = tR("div")),
              s.c(),
              (a = tP()),
              g && g.c(),
              (c = tP()),
              v && v.c(),
              (d = tP()),
              A && A.c(),
              (u = tU()),
              this.h());
          },
          l(e) {
            var r = tV((t = tY(e, "DIV", { class: !0 }))),
              h = tV((n = tY(r, "DIV", { class: !0 })));
            (tV((l = tY(h, "DIV", { class: !0 }))).forEach(tL),
              h.forEach(tL),
              (o = tq(r)));
            var f = tV((i = tY(r, "DIV", { class: !0 })));
            (s.l(f),
              f.forEach(tL),
              r.forEach(tL),
              (a = tq(e)),
              g && g.l(e),
              (c = tq(e)),
              v && v.l(e),
              (d = tq(e)),
              A && A.l(e),
              (u = tU()),
              this.h());
          },
          h() {
            (tG(l, "class", "sm-top-placeholder svelte-pgao2q"),
              tG(n, "class", "sm-top svelte-pgao2q"),
              tG(i, "class", "sm-main svelte-pgao2q"),
              t0(i, "sm-section-view", e[1].viewMode === eu.SECTION),
              tG(t, "class", "sm-layout svelte-pgao2q"));
          },
          m(e, s) {
            (tk(e, t, s),
              tD(t, n),
              tD(n, l),
              tD(t, o),
              tD(t, i),
              m[r].m(i, null),
              tk(e, a, s),
              g && g.m(e, s),
              tk(e, c, s),
              v && v.m(e, s),
              tk(e, d, s),
              A && A.m(e, s),
              tk(e, u, s),
              (h = !0));
          },
          p(e, t) {
            let n = r;
            ((r = p(e)) === n
              ? m[r].p(e, t)
              : (nA(),
                ny(m[n], 1, 1, () => {
                  m[n] = null;
                }),
                nw(),
                (s = m[r]) ? s.p(e, t) : (s = m[r] = f[r](e)).c(),
                nx(s, 1),
                s.m(i, null)),
              (!h || 2 & t) &&
                t0(i, "sm-section-view", e[1].viewMode === eu.SECTION),
              e[1].menu.list.length
                ? g
                  ? 2 & t && nx(g, 1)
                  : ((g = hU()).c(), nx(g, 1), g.m(c.parentNode, c))
                : g &&
                  (nA(),
                  ny(g, 1, 1, () => {
                    g = null;
                  }),
                  nw()),
              e[1].contextmenu
                ? v
                  ? 2 & t && nx(v, 1)
                  : ((v = hj()).c(), nx(v, 1), v.m(d.parentNode, d))
                : v &&
                  (nA(),
                  ny(v, 1, 1, () => {
                    v = null;
                  }),
                  nw()),
              e[1].hoverMessage
                ? A
                  ? 2 & t && nx(A, 1)
                  : ((A = hz()).c(), nx(A, 1), A.m(u.parentNode, u))
                : A &&
                  (nA(),
                  ny(A, 1, 1, () => {
                    A = null;
                  }),
                  nw()));
          },
          i(e) {
            h || (nx(s), nx(g), nx(v), nx(A), (h = !0));
          },
          o(e) {
            (ny(s), ny(g), ny(v), ny(A), (h = !1));
          },
          d(e) {
            (e && tL(t),
              m[r].d(),
              e && tL(a),
              g && g.d(e),
              e && tL(c),
              v && v.d(e),
              e && tL(d),
              A && A.d(e),
              e && tL(u));
          },
        };
      }
      function hT(e) {
        let t, n, l, o, i, r;
        let s = e[3] && hI(e),
          a = e[2] && hM();
        return {
          c() {
            ((t = tR("div")),
              (n = tR("div")),
              s && s.c(),
              (l = tP()),
              a && a.c(),
              (o = tP()),
              (i = tR("div")),
              this.h());
          },
          l(e) {
            var r = tV((t = tY(e, "DIV", { class: !0 }))),
              c = tV((n = tY(r, "DIV", { class: !0 })));
            (s && s.l(c),
              (l = tq(c)),
              a && a.l(c),
              c.forEach(tL),
              (o = tq(r)),
              tV((i = tY(r, "DIV", { class: !0 }))).forEach(tL),
              r.forEach(tL),
              this.h());
          },
          h() {
            (tG(n, "class", "sm-left svelte-pgao2q"),
              t0(n, "sm-left-ios", ei),
              tG(i, "class", "sm-right svelte-pgao2q"),
              tG(t, "class", "sm-view"));
          },
          m(e, c) {
            (tk(e, t, c),
              tD(t, n),
              s && s.m(n, null),
              tD(n, l),
              a && a.m(n, null),
              tD(t, o),
              tD(t, i),
              (r = !0));
          },
          p(e, t) {
            (e[3]
              ? s
                ? (s.p(e, t), 8 & t && nx(s, 1))
                : ((s = hI(e)).c(), nx(s, 1), s.m(n, l))
              : s &&
                (nA(),
                ny(s, 1, 1, () => {
                  s = null;
                }),
                nw()),
              e[2]
                ? a
                  ? 4 & t && nx(a, 1)
                  : ((a = hM()).c(), nx(a, 1), a.m(n, null))
                : a &&
                  (nA(),
                  ny(a, 1, 1, () => {
                    a = null;
                  }),
                  nw()));
          },
          i(e) {
            r || (nx(s), nx(a), (r = !0));
          },
          o(e) {
            (ny(s), ny(a), (r = !1));
          },
          d(e) {
            (e && tL(t), s && s.d(), a && a.d());
          },
        };
      }
      function h$(e) {
        let t, n, l;
        let o = e[1].mdf.comparing && hD(e),
          i = !e[1].mdf.occlusalPlaneWorking && hN(e);
        return {
          c() {
            (o && o.c(), (t = tP()), i && i.c(), (n = tU()));
          },
          l(e) {
            (o && o.l(e), (t = tq(e)), i && i.l(e), (n = tU()));
          },
          m(e, r) {
            (o && o.m(e, r),
              tk(e, t, r),
              i && i.m(e, r),
              tk(e, n, r),
              (l = !0));
          },
          p(e, l) {
            (e[1].mdf.comparing
              ? o
                ? (o.p(e, l), 2 & l && nx(o, 1))
                : ((o = hD(e)).c(), nx(o, 1), o.m(t.parentNode, t))
              : o &&
                (nA(),
                ny(o, 1, 1, () => {
                  o = null;
                }),
                nw()),
              e[1].mdf.occlusalPlaneWorking
                ? i &&
                  (nA(),
                  ny(i, 1, 1, () => {
                    i = null;
                  }),
                  nw())
                : i
                  ? (i.p(e, l), 2 & l && nx(i, 1))
                  : ((i = hN(e)).c(), nx(i, 1), i.m(n.parentNode, n)));
          },
          i(e) {
            l || (nx(o), nx(i), (l = !0));
          },
          o(e) {
            (ny(o), ny(i), (l = !1));
          },
          d(e) {
            (o && o.d(e), e && tL(t), i && i.d(e), e && tL(n));
          },
        };
      }
      function hI(e) {
        let t, n;
        let l = e[4] === e9.SIMPLE && e[5] !== eu.SECTION && hO();
        return {
          c() {
            (l && l.c(), (t = tU()));
          },
          l(e) {
            (l && l.l(e), (t = tU()));
          },
          m(e, o) {
            (l && l.m(e, o), tk(e, t, o), (n = !0));
          },
          p(e, n) {
            e[4] === e9.SIMPLE && e[5] !== eu.SECTION
              ? l
                ? 48 & n && nx(l, 1)
                : ((l = hO()).c(), nx(l, 1), l.m(t.parentNode, t))
              : l &&
                (nA(),
                ny(l, 1, 1, () => {
                  l = null;
                }),
                nw());
          },
          i(e) {
            n || (nx(l), (n = !0));
          },
          o(e) {
            (ny(l), (n = !1));
          },
          d(e) {
            (l && l.d(e), e && tL(t));
          },
        };
      }
      function hO(e) {
        let t, n;
        return (
          (t = new ho({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hM(e) {
        let t, n;
        return (
          (t = new dX({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hD(e) {
        let t, n, l, o;
        function i(e, t) {
          return e[1].mdf.compareType === eM.DayNight ? hL : hk;
        }
        let r = i(e),
          s = r(e);
        return (
          (l = new hE({})),
          {
            c() {
              ((t = tR("div")), s.c(), (n = tP()), n$(l.$$.fragment), this.h());
            },
            l(e) {
              var o = tV((t = tY(e, "DIV", { class: !0, style: !0 })));
              (s.l(o),
                (n = tq(o)),
                nI(l.$$.fragment, o),
                o.forEach(tL),
                this.h());
            },
            h() {
              (tG(t, "class", "sm-view-title svelte-pgao2q"),
                t1(t, "width", "calc(50% - 12px)"));
            },
            m(e, i) {
              (tk(e, t, i), s.m(t, null), tD(t, n), nO(l, t, null), (o = !0));
            },
            p(e, l) {
              r === (r = i(e)) && s
                ? s.p(e, l)
                : (s.d(1), (s = r(e)) && (s.c(), s.m(t, n)));
            },
            i(e) {
              o || (nx(l.$$.fragment, e), (o = !0));
            },
            o(e) {
              (ny(l.$$.fragment, e), (o = !1));
            },
            d(e) {
              (e && tL(t), s.d(), nM(l));
            },
          }
        );
      }
      function hk(e) {
        let t, n;
        let l = e[7].t("mdf.viewTitle.original") + "";
        return {
          c() {
            ((t = tR("span")), (n = tB(l)));
          },
          l(e) {
            var o = tV((t = tY(e, "SPAN", {})));
            ((n = tW(o, l)), o.forEach(tL));
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, t) {
            128 & t &&
              l !== (l = e[7].t("mdf.viewTitle.original") + "") &&
              tX(n, l);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function hL(e) {
        let t, n, l, o;
        let i =
            (e[1].dayNightMode === eH.DAY
              ? e[7].t("night_mode_text")
              : e[7].t("day_mode_text")) + "",
          r = "-".concat(e[7].t("modify_message"));
        return {
          c() {
            ((t = tR("span")), (n = tB(i)), (l = tP()), (o = tB(r)));
          },
          l(e) {
            var s = tV((t = tY(e, "SPAN", {})));
            ((n = tW(s, i)), (l = tq(s)), (o = tW(s, r)), s.forEach(tL));
          },
          m(e, i) {
            (tk(e, t, i), tD(t, n), tD(t, l), tD(t, o));
          },
          p(e, t) {
            (130 & t &&
              i !==
                (i =
                  (e[1].dayNightMode === eH.DAY
                    ? e[7].t("night_mode_text")
                    : e[7].t("day_mode_text")) + "") &&
              tX(n, i),
              128 & t &&
                r !== (r = "-".concat(e[7].t("modify_message"))) &&
                tX(o, r));
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function hN(e) {
        let t, n, l, o, i, r, s, a, c, d, u;
        let h = e[1].mdf.comparing && hR(e),
          f = e[1].mdf.angelButtonInvalidTips && hS(),
          m = e[3] && e[4] === e9.SIMPLE && hB(),
          p = e[2] && hP();
        return (
          (a = new rv({})),
          (d = new dY({})),
          {
            c() {
              ((t = tR("div")),
                h && h.c(),
                (n = tP()),
                f && f.c(),
                (l = tP()),
                (o = tR("div")),
                m && m.c(),
                (i = tP()),
                p && p.c(),
                (r = tP()),
                (s = tR("div")),
                n$(a.$$.fragment),
                (c = tP()),
                n$(d.$$.fragment),
                this.h());
            },
            l(e) {
              var u = tV((t = tY(e, "DIV", { class: !0 })));
              (h && h.l(u), (n = tq(u)), f && f.l(u), (l = tq(u)));
              var g = tV((o = tY(u, "DIV", { class: !0 })));
              (m && m.l(g),
                (i = tq(g)),
                p && p.l(g),
                g.forEach(tL),
                (r = tq(u)));
              var v = tV((s = tY(u, "DIV", { class: !0 })));
              (nI(a.$$.fragment, v),
                (c = tq(v)),
                nI(d.$$.fragment, v),
                v.forEach(tL),
                u.forEach(tL),
                this.h());
            },
            h() {
              (tG(o, "class", "sm-left svelte-pgao2q"),
                t0(o, "sm-left-ios", ei),
                tG(s, "class", "sm-right svelte-pgao2q"),
                tG(t, "class", "sm-mdf svelte-pgao2q"),
                t0(t, "sm-mdf-comparing", e[1].mdf.comparing));
            },
            m(e, g) {
              (tk(e, t, g),
                h && h.m(t, null),
                tD(t, n),
                f && f.m(t, null),
                tD(t, l),
                tD(t, o),
                m && m.m(o, null),
                tD(o, i),
                p && p.m(o, null),
                tD(t, r),
                tD(t, s),
                nO(a, s, null),
                tD(s, c),
                nO(d, s, null),
                (u = !0));
            },
            p(e, r) {
              (e[1].mdf.comparing
                ? h
                  ? h.p(e, r)
                  : ((h = hR(e)).c(), h.m(t, n))
                : h && (h.d(1), (h = null)),
                e[1].mdf.angelButtonInvalidTips
                  ? f
                    ? 2 & r && nx(f, 1)
                    : ((f = hS()).c(), nx(f, 1), f.m(t, l))
                  : f &&
                    (nA(),
                    ny(f, 1, 1, () => {
                      f = null;
                    }),
                    nw()),
                e[3] && e[4] === e9.SIMPLE
                  ? m
                    ? 24 & r && nx(m, 1)
                    : ((m = hB()).c(), nx(m, 1), m.m(o, i))
                  : m &&
                    (nA(),
                    ny(m, 1, 1, () => {
                      m = null;
                    }),
                    nw()),
                e[2]
                  ? p
                    ? 4 & r && nx(p, 1)
                    : ((p = hP()).c(), nx(p, 1), p.m(o, null))
                  : p &&
                    (nA(),
                    ny(p, 1, 1, () => {
                      p = null;
                    }),
                    nw()),
                (!u || 2 & r) && t0(t, "sm-mdf-comparing", e[1].mdf.comparing));
            },
            i(e) {
              u ||
                (nx(f),
                nx(m),
                nx(p),
                nx(a.$$.fragment, e),
                nx(d.$$.fragment, e),
                (u = !0));
            },
            o(e) {
              (ny(f),
                ny(m),
                ny(p),
                ny(a.$$.fragment, e),
                ny(d.$$.fragment, e),
                (u = !1));
            },
            d(e) {
              (e && tL(t),
                h && h.d(),
                f && f.d(),
                m && m.d(),
                p && p.d(),
                nM(a),
                nM(d));
            },
          }
        );
      }
      function hR(e) {
        let t, n;
        let l = e[7].t("mdf.viewTitle.modified") + "";
        return {
          c() {
            ((t = tR("div")), (n = tB(l)), this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 })));
            ((n = tW(o, l)), o.forEach(tL), this.h());
          },
          h() {
            tG(t, "class", "sm-view-title svelte-pgao2q");
          },
          m(e, l) {
            (tk(e, t, l), tD(t, n));
          },
          p(e, t) {
            128 & t &&
              l !== (l = e[7].t("mdf.viewTitle.modified") + "") &&
              tX(n, l);
          },
          d(e) {
            e && tL(t);
          },
        };
      }
      function hS(e) {
        let t, n;
        return (
          (t = new d3({
            props: {
              style: "position:absolute;left:calc(50% - 180px);bottom:100px;",
            },
          })),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hB(e) {
        let t, n;
        return (
          (t = new ho({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hP(e) {
        let t, n;
        return (
          (t = new dX({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hU(e) {
        let t, n;
        return (
          (t = new rD({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hj(e) {
        let t, n;
        return (
          (t = new d9({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hz(e) {
        let t, n;
        return (
          (t = new hv({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hH(e) {
        let t, n;
        let l = e[6] && hb(e);
        return {
          c() {
            (l && l.c(), (t = tU()));
          },
          l(e) {
            (l && l.l(e), (t = tU()));
          },
          m(e, o) {
            (l && l.m(e, o), tk(e, t, o), (n = !0));
          },
          p(e, n) {
            e[6]
              ? l
                ? (l.p(e, n), 64 & n && nx(l, 1))
                : ((l = hb(e)).c(), nx(l, 1), l.m(t.parentNode, t))
              : l &&
                (nA(),
                ny(l, 1, 1, () => {
                  l = null;
                }),
                nw());
          },
          i(e) {
            n || (nx(l), (n = !0));
          },
          o(e) {
            (ny(l), (n = !1));
          },
          d(e) {
            (l && l.d(e), e && tL(t));
          },
        };
      }
      function hG(e) {
        let t, n, l;
        let o = e[1].mdf.occlusalPlaneWorking && hV(),
          i = e[3] && e[4] === e9.TABLE && _ && hZ();
        return {
          c() {
            (o && o.c(), (t = tP()), (n = tR("div")), i && i.c(), this.h());
          },
          l(e) {
            (o && o.l(e), (t = tq(e)));
            var l = tV((n = tY(e, "DIV", { class: !0, style: !0 })));
            (i && i.l(l), l.forEach(tL), this.h());
          },
          h() {
            (tG(n, "class", "sm-bot svelte-pgao2q"),
              tG(n, "style", "left:".concat(hJ)));
          },
          m(e, r) {
            (o && o.m(e, r),
              tk(e, t, r),
              tk(e, n, r),
              i && i.m(n, null),
              (l = !0));
          },
          p(e, l) {
            (e[1].mdf.occlusalPlaneWorking
              ? o
                ? 2 & l && nx(o, 1)
                : ((o = hV()).c(), nx(o, 1), o.m(t.parentNode, t))
              : o &&
                (nA(),
                ny(o, 1, 1, () => {
                  o = null;
                }),
                nw()),
              e[3] && e[4] === e9.TABLE && _
                ? i
                  ? 24 & l && nx(i, 1)
                  : ((i = hZ()).c(), nx(i, 1), i.m(n, null))
                : i &&
                  (nA(),
                  ny(i, 1, 1, () => {
                    i = null;
                  }),
                  nw()));
          },
          i(e) {
            l || (nx(o), nx(i), (l = !0));
          },
          o(e) {
            (ny(o), ny(i), (l = !1));
          },
          d(e) {
            (o && o.d(e), e && tL(t), e && tL(n), i && i.d());
          },
        };
      }
      function hV(e) {
        let t, n;
        return (
          (t = new hl({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hZ(e) {
        let t, n;
        return (
          (t = new uZ({})),
          {
            c() {
              n$(t.$$.fragment);
            },
            l(e) {
              nI(t.$$.fragment, e);
            },
            m(e, l) {
              (nO(t, e, l), (n = !0));
            },
            i(e) {
              n || (nx(t.$$.fragment, e), (n = !0));
            },
            o(e) {
              (ny(t.$$.fragment, e), (n = !1));
            },
            d(e) {
              nM(t, e);
            },
          }
        );
      }
      function hF(e) {
        let t, n, l, o, i, r;
        ((n = new iF({
          props: { $$slots: { default: [hH] }, $$scope: { ctx: e } },
        })).$on("inited", e[10]),
          n.$on("error", e[11]),
          n.$on("loaded", e[12]),
          n.$on("destroyed", e[13]));
        let s = e[6] && hG(e);
        return {
          c() {
            ((t = tR("div")),
              n$(n.$$.fragment),
              (l = tP()),
              s && s.c(),
              this.h());
          },
          l(e) {
            var o = tV((t = tY(e, "DIV", { class: !0 })));
            (nI(n.$$.fragment, o),
              (l = tq(o)),
              s && s.l(o),
              o.forEach(tL),
              this.h());
          },
          h() {
            (tG(t, "class", "sm-panel svelte-pgao2q"),
              t1(t, "--background-color", e[1].bgColor),
              t1(
                t,
                "--primary-foreground-color",
                nQ(e[1].bgColor, { light: "#f7f7fc", dark: "#14142b" }),
              ),
              t1(
                t,
                "--foreground-color",
                nQ(e[1].bgColor, { light: "#a0a3bd", dark: "#4e4b66" }),
              ),
              t1(t, "--link-color", "#0086cd"),
              t1(t, "--link-color-new", "#1370FF"),
              t1(t, "--foreground-link-color", "#f7f7fc"),
              t1(
                t,
                "--line-color",
                nQ(e[1].bgColor, { light: "#a0a3bd", dark: "#4e4b66" }),
              ));
          },
          m(a, c) {
            (tk(a, t, c),
              nO(n, t, null),
              tD(t, l),
              s && s.m(t, null),
              (o = !0),
              i || ((r = tj(t, "contextmenu", tz(e[9]))), (i = !0)));
          },
          p(e, l) {
            let [o] = l,
              i = {};
            (16638 & o && (i.$$scope = { dirty: o, ctx: e }),
              n.$set(i),
              e[6]
                ? s
                  ? (s.p(e, o), 64 & o && nx(s, 1))
                  : ((s = hG(e)).c(), nx(s, 1), s.m(t, null))
                : s &&
                  (nA(),
                  ny(s, 1, 1, () => {
                    s = null;
                  }),
                  nw()),
              2 & o && t1(t, "--background-color", e[1].bgColor),
              2 & o &&
                t1(
                  t,
                  "--primary-foreground-color",
                  nQ(e[1].bgColor, { light: "#f7f7fc", dark: "#14142b" }),
                ),
              2 & o &&
                t1(
                  t,
                  "--foreground-color",
                  nQ(e[1].bgColor, { light: "#a0a3bd", dark: "#4e4b66" }),
                ),
              2 & o &&
                t1(
                  t,
                  "--line-color",
                  nQ(e[1].bgColor, { light: "#a0a3bd", dark: "#4e4b66" }),
                ));
          },
          i(e) {
            o || (nx(n.$$.fragment, e), nx(s), (o = !0));
          },
          o(e) {
            (ny(n.$$.fragment, e), ny(s), (o = !1));
          },
          d(e) {
            (e && tL(t), nM(n), s && s.d(), (i = !1), r());
          },
        };
      }
      let hJ = "34px";
      function hY(e, t, n) {
        let l, o, i, r, s, a;
        let c,
          d = tn,
          u = () => (d(), (d = tc(f, (e) => n(1, (c = e)))), f);
        e.$$.on_destroy.push(() => d());
        let { stat: h = async () => {} } = t,
          { store: f = o6() } = t;
        return (
          u(),
          (e.$$set = (e) => {
            ("stat" in e && n(8, (h = e.stat)),
              "store" in e && u(n(0, (f = e.store))));
          }),
          (e.$$.update = () => {
            (1 & e.$$.dirty && o9(f),
              257 & e.$$.dirty && f.update({ stat: h }),
              2 & e.$$.dirty && n(7, (l = l0(c.language))),
              2 & e.$$.dirty && n(6, (o = c._configuration.coverLayerVisible)),
              2 & e.$$.dirty && n(5, (i = c.viewMode)),
              2 & e.$$.dirty && n(4, (r = c._movementType)),
              2 & e.$$.dirty &&
                n(3, (s = c.toggleEnabled.movement && c.toggle.movement)),
              2 & e.$$.dirty &&
                n(2, (a = c.toggleEnabled.cover && c.toggle.cover)));
          }),
          [
            f,
            c,
            a,
            s,
            r,
            i,
            o,
            l,
            h,
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
            function (t) {
              nl.call(this, e, t);
            },
          ]
        );
      }
      class hK extends nk {
        constructor(e) {
          (super(), nD(this, e, hY, hF, ta, { stat: 8, store: 0 }, hC));
        }
      }
      let hW = (0, Q.createContext)(null),
        { Provider: hq, Consumer: hQ } = hW,
        hX = () => (0, Q.useContext)(hW),
        h_ = o6(),
        h1 = (e) => {
          let { sington: t, assetsDir: n, children: l } = e,
            o = t ? h_ : o6();
          return (
            (0, Q.useEffect)(() => {
              o.config({ assetsDir: n });
            }, [n]),
            Q.createElement(hq, { value: o }, l)
          );
        };
      function h0(e) {
        let {
            className: t,
            style: n = { width: "100%", height: "100%" },
            stat: l,
            onInited: o,
            onError: i,
            onLoaded: r,
          } = e,
          s = (0, Q.useRef)(null),
          a = (0, Q.useRef)(),
          c = (0, Q.useRef)({ onInited: o, onError: i, onLoaded: r }),
          d = hX();
        return (
          (0, Q.useEffect)(() => {
            c.current = { onInited: o, onError: i, onLoaded: r };
          }, [o, i, r]),
          (0, Q.useEffect)(() => {
            if (!s.current) return;
            let e = (a.current = new hK({
              target: s.current,
              props: { stat: l, store: d },
            }));
            return nP(
              e.$on("inited", (e) => {
                let { detail: t } = e,
                  { onInited: n } = c.current;
                null == n || n(t);
              }),
              e.$on("error", (e) => {
                let { detail: t } = e,
                  { onError: n } = c.current;
                null == n || n(t);
              }),
              e.$on("loaded", (e) => {
                let { detail: t } = e,
                  { onLoaded: n } = c.current;
                null == n || n(t);
              }),
              () => e.$destroy(),
            );
          }, []),
          Q.createElement("div", { className: t, style: n, ref: s })
        );
      }
      let h2 = () =>
        (function (e) {
          let [t, n] = (0, Q.useState)(() => td(e));
          return ((0, Q.useEffect)(() => e.subscribe(n), [e]), t);
        })(hX());
    },
  },
]);
